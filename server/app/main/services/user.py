from ..models import db, UserModel, UserOAuthModel, PropertyModel
import json
import jwt
from instance.config import SECRET_KEY
import datetime
import time
from ..util.auth_token import checkAuthToken


def register(userDetails):
    """
    function to register the user.
    """
    try:
        firstname = userDetails["firstname"]
        lastname = userDetails["lastname"]
        dob = userDetails["dob"]
        email = userDetails["email"]
        password = userDetails["password"]
        phone = userDetails["phone"]
        createdAt = time.strftime('%Y-%m-%d %H:%M:%S')
    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})

    if userDetails is None:
        return json.dumps({'error': True, 'error_found': 'data is empty'})
    elif firstname == '' or \
            lastname == '' or \
            email == '' or \
            dob == '' or \
            phone == '' or \
            password == '':
        return json.dumps(
            {'error': True, 'error_found': 'one or more field is empty'}
        )

    status = UserModel.query.filter(UserModel.email == email).first()

    if status is None:
        try:
            userType = "user"

            user = UserModel(
                firstname=firstname,
                lastname=lastname,
                dob=dob,
                email=email,
                password=password,
                phone=phone,
                userType=userType,
                createdAt=createdAt
            )

            db.session.add(user)
            db.session.commit()

            return json.dumps({
                "error": False,
                "message": "User registered successfully"
            })
        except Exception as err:
            return {'error': True, 'error_found': format(err)}

    return {"error": True, "message": "Registration failed, user already exists"}


def login(userDetails):
    """
    function to login the user
    """
    try:
        email = userDetails["email"]
        password = userDetails["password"]
    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})

    if email == "" or password == "":
        return json.dumps({"error": True, "message": "Empty Fields"})

    if type(email) is not str or type(password) is not str:
        return json.dumps({"error": True, "message": "Wrong data format!"})

    results = UserModel.query.filter(UserModel.email == email).first()

    if results is not None:
        if results.password == password:
            if results.email == email:
                data = {
                    "firstname": results.firstname,
                    "lastname": results.lastname,
                    "dob": str(results.dob),
                    "email": results.email,
                    "phone": results.phone,
                    "userType": results.userType,
                    "created_at": str(results.createdAt),
                    "user_id": results.id
                }
                obj = {
                    "data": data,
                    "session_expiry": time.time() + 86400
                }

                encodeJwt = jwt.encode(obj, SECRET_KEY)

                return json.dumps({
                    "error": False,
                    "token": encodeJwt.decode(),
                    "message": "Logged in successfully!"
                })

        else:
            return json.dumps({
                "error": True,
                "message": "Invalid login creadentials"
            })

    return json.dumps({"error": True, "message": "Unknown error!"})


def oauth_login(userDetails):
    """
    function to oauth_login the user
    """
    try:
        firstname = userDetails["firstname"]
        lastname = userDetails["lastname"]
        email = userDetails["email"]
        provider = userDetails["provider"]
        providerId = userDetails["provider_id"]
        createdAt = time.strftime('%Y-%m-%d %H:%M:%S')
    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})

    results = UserModel.query.filter(UserModel.email == email).first()

    if results is not None:
        if results.email == email:
            """
            checking if user already exists or not
            """
            data = {
                "firstname": results.firstname,
                "lastname": results.lastname,
                "email": results.email,
                "userType": results.userType,
                "created_at": str(results.createdAt),
                "user_id": results.id
            }
            d = {
                "data": data,
                "session_expiry": time.time() + 86400
            }
            encodeJwt = jwt.encode(d, SECRET_KEY)
            return json.dumps({
                "error": False,
                "token": encodeJwt.decode(),
                "message": "Logged in successfully!"
            })
    else:
        try:
            """
            registering as new user
            """
            userType = "user"
            user = UserModel(
                firstname=firstname,
                lastname=lastname,
                email=email,
                userType=userType,
                createdAt=createdAt
            )
            db.session.add(user)
            db.session.commit()

            res = UserModel.query.filter(UserModel.email == email).first()
            relation = UserOAuthModel.query.filter(UserOAuthModel.userId == res.id).first()
            if relation is None:
                """
                saving data of OAuth
                """
                u = UserOAuthModel(
                    userId=res.id,
                    provider=provider,
                    providerId=providerId,
                )
                db.session.add(u)
                db.session.commit()

            data_ = {
                "firstname": res.firstname,
                "lastname": res.lastname,
                "email": res.email,
                "userType": res.userType,
                "created_at": str(res.createdAt),
                "user_id": res.id
            }
            obj = {
                "data": data_,
                "session_expiry": time.time() + 86400
            }
            encodeJwt = jwt.encode(obj, SECRET_KEY)
            return json.dumps({
                "error": False,
                "token": encodeJwt.decode(),
                "message": "Logged in successfully!"
            })
        except Exception as err:
            return {'error': True, 'error_found': format(err)}        
    return json.dumps({"error": True, "message": "Unknown error!"})


def user_search_results(params):
    """
    function to send results for user search based location, checkin_date, checkout_date, no of guests
    """
    try:
        location = params.get('location',default='Bengaluru')
        cityId = params.get('city_id')
        stateId = params.get('state_id')
        countryId = params.get('country_id')
        checkin = params.get('checkin',datetime.date.today() + datetime.timedelta(days=1))
        checkout = params.get('checkout',datetime.date.today() + datetime.timedelta(days=2))
        children = params.get('children')
        infants = params.get('infants')
        adults = params.get('adults',default=1)
        perPage = params.get('per_page',20)
        totalguests = int(adults)+int(children)
        print('................',totalguests)
        
        category = params.get('type_of_place')
        isCancel = params.get('is_cancel')
        price = params.get('price', default=0)
        bed = params.get('bed', default=1)
        bedrooms = params.get('bedrooms', default=1)
        bathrooms = params.get('bathrooms', default=1)
        amenities = params.get('amenities')
        propertyType = params.get('property_type')
        
        
    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})

    # SELECT * FROM property AS p JOIN city_model AS c ON p.cityId=c.id JOIN property_type AS pt ON p.propertyTypeId=pt.id JOIN categories AS ct ON p.categoryId=ct.id JOIN state_model as st on c.stateId=st.id JOIN countries_model AS cm ON st.countryId=cm.id WHERE c.cityName='Bengaluru';

    if location is not None and totalguests == 1:
        results = db.session.execute(''' SELECT * FROM property AS p JOIN city_model AS c ON p.cityId=c.id JOIN property_type AS pt ON p.propertyTypeId=pt.id JOIN categories AS ct ON p.categoryId=ct.id JOIN state_model as st on c.stateId=st.id JOIN countries_model AS cm ON st.countryId=cm.id WHERE c.cityName='%s' ; '''%(location))
        data = []
        for result in results:
            temp_dict = {}
            temp_dict["property_id"] = result.id
            temp_dict["propertyName"] = result.propertyName
            temp_dict["description"] = result.description
            temp_dict["address"] = result.address
            temp_dict["bedroomCount"] = result.bedroomCount
            temp_dict["bedCount"] = result.bedCount
            temp_dict["bathroomCount"] = result.bathroomCount
            temp_dict["accomodatesCount"] = result.accomodatesCount
            temp_dict["isAvailable"] = result.isAvailable
            temp_dict["price"] = result.price
            temp_dict["bedCount"] = result.bedCount
            temp_dict["countryId"] = result.countryId
            temp_dict["countryName"] = result.countryName
            # temp_dict["steteId"] = result.steteId
            temp_dict["stateName"] = result.stateName
            temp_dict["propertyType"] = result.propertyType
            temp_dict["cityName"] = result.cityName
            temp_dict["istantBook"] = result.istantBook
            temp_dict["isCancel"] = result.isCancel
            temp_dict["refundType"] = result.refundType
            temp_dict["price"] = result.price
            temp_dict["accomodatesCount"] = result.accomodatesCount
            temp_dict["bathroomCount"] = result.bathroomCount
            temp_dict["isAvailable"] = result.isAvailable
            temp_dict["bedCount"] = result.bedCount
            temp_dict["bedroomCount"] = result.bedroomCount
            temp_dict["address"] = result.isAvailable
            temp_dict["cityId"] = result.cityId
            temp_dict["ownerId"] = result.userId
            data.append(temp_dict)

        return json.dumps({
            "data": data,
            "message": 'Data recieved',
            'error': False
        }, default=str)
    elif totalguests > 1:
        results = db.session.execute(''' SELECT * FROM property AS p JOIN city_model AS c ON p.cityId=c.id JOIN property_type AS pt ON p.propertyTypeId=pt.id JOIN categories AS ct ON p.categoryId=ct.id JOIN state_model as st on c.stateId=st.id JOIN countries_model AS cm ON st.countryId=cm.id WHERE c.cityName='%s' AND p.accomodatesCount > '%d' ; '''%(location,totalguests-1))
        data = []
        for result in results:
            temp_dict = {}
            temp_dict["property_id"] = result.id
            temp_dict["propertyName"] = result.propertyName
            temp_dict["description"] = result.description
            temp_dict["address"] = result.address
            temp_dict["bedroomCount"] = result.bedroomCount
            temp_dict["bedCount"] = result.bedCount
            temp_dict["bathroomCount"] = result.bathroomCount
            temp_dict["accomodatesCount"] = result.accomodatesCount
            temp_dict["isAvailable"] = result.isAvailable
            temp_dict["price"] = result.price
            temp_dict["bedCount"] = result.bedCount
            temp_dict["countryId"] = result.countryId
            temp_dict["countryName"] = result.countryName
            # temp_dict["steteId"] = result.steteId
            temp_dict["stateName"] = result.stateName
            temp_dict["propertyType"] = result.propertyType
            temp_dict["cityName"] = result.cityName
            temp_dict["istantBook"] = result.istantBook
            temp_dict["isCancel"] = result.isCancel
            temp_dict["refundType"] = result.refundType
            temp_dict["price"] = result.price
            temp_dict["accomodatesCount"] = result.accomodatesCount
            temp_dict["bathroomCount"] = result.bathroomCount
            temp_dict["isAvailable"] = result.isAvailable
            temp_dict["bedCount"] = result.bedCount
            temp_dict["bedroomCount"] = result.bedroomCount
            temp_dict["address"] = result.isAvailable
            temp_dict["cityId"] = result.cityId
            temp_dict["ownerId"] = result.userId
            data.append(temp_dict)

        return json.dumps({
            "data": data,
            "message": 'Data recieved',
            'error': False
        }, default=str)
    # elif if 
    
    
# name = db.Column(db.String(60), nullable=False)
#     description = db.Column(db.String(255))
#     userId = db.Column(db.Integer,db.ForeignKey(UserModel.id))
#     propertyTypeId = db.Column(db.Integer,db.ForeignKey(PropertyTypeModel.id))
#     categoryId = db.Column(db.Integer,db.ForeignKey(CategoriesModel.id))
    # cityId = db.Column(db.Integer,db.ForeignKey(CityModel.id))
    # stateId = db.Column(db.Integer,db.ForeignKey(StateModel.id))
    # countryId = db.Column(db.Integer,db.ForeignKey(CountriesModel.id))
    # address = db.Column(db.String(255))
    # bedroomCount = db.Column(db.Integer)
    # bedCount = db.Column(db.Integer)
    # bathroomCount = db.Column(db.Integer)
    # accomodatesCount = db.Column(db.Integer)
    # isAvailable = db.Column(db.Boolean)
    # startDate = db.Column(db.Date)
    # endDate = db.Column(db.Date)
    # price = db.Column(db.Integer)
    # priceTypeId = db.Column(db.Integer,db.ForeignKey(PriceTypeModel.id))
    # refundType = db.Column(db.Boolean)
    # createdAt = db.Column(db.DateTime(timezone=True))
    # modifiedAt = db.Column(db.DateTime(timezone=True))
    # status = db.Column(db.Boolean)

def insert_data():
    data = [
        {
            'name': "Nature's", 
            'description': "Nature's Nest premium is tucked in the midst of greenery surrounded by a private forest, sitting in the heart of Bangalore (Wilson Garden), walking distance to Forum Mall, Koramangala.",
            'userId': 2,
            'propertyTypeId': 1,
            'categoryId': 2,
            'cityId': 1,
            'stateId' :1,
            'countryId': 1,
            'address': "Bengaluru, Karnataka, India",
            'bedroomCount': 1,
            'bedCount': 1,
            'bathroomCount': 1,
            'accomodatesCount': 1,
            'isAvailable': True,
            'startDate': datetime.date.today() + datetime.timedelta(days=1),
            'endDate': datetime.date.today() + datetime.timedelta(days=2),
            'price': 1000,
            'priceTypeId': 1,
            'refundType': True,
            'createdAt': datetime.date.today(),
            'status': True
        },
        # insert into user (firstname,lastname,dob,email,password,phone,createdAt,userType,status) values('Shabaz','Mullalkar','1994:04:04','smullalkar@gmail.com','1234','8123332662','2020-07-25','user'',true);
        {
            'name': "Clover - iStreet", 
            'description': "Spacious Air Conditioned Studio Suite at Koramangala Located on the ground floor with a private entry & exit to the suite.. It has a Bathtub, Fully Equipped Kitchen with Microwave, Fridge, Induction stove.",
            'userId': 2,
            'propertyTypeId': 5,
            'categoryId': 3,
            'cityId': 2,
            'stateId' :2,
            'countryId': 1,
            'address': "Mumbai, Maharashtra, India",
            'bedroomCount': 1,
            'bedCount': 1,
            'bathroomCount': 1,
            'accomodatesCount': 2,
            'isAvailable': True,
            'startDate': datetime.date.today() + datetime.timedelta(days=1),
            'endDate': datetime.date.today() + datetime.timedelta(days=2),
            'price': 3000,
            'priceTypeId': 1,
            'refundType': True,
            'createdAt': datetime.date.today(),
            'status': True
        },
        {
            'name': "LUXURY STUDIO ROOMS WITH KITCHEN @ KORAMANGALA", 
            'description': "4 Seasons Suites is a boutique apartment hotel property with over 120 Five * ratings on Airbnb. We offer upscale Service Apartments, Suites, Studio Rooms & Restaurant",
            'userId': 2,
            'propertyTypeId': 2,
            'categoryId': 1,
            'cityId': 1,
            'stateId' :1,
            'countryId': 1,
            'address': "Bangalore, Karnataka, India",
            'bedroomCount': 2,
            'bedCount': 2,
            'bathroomCount': 2,
            'accomodatesCount': 3,
            'isAvailable': True,
            'startDate': datetime.date.today() + datetime.timedelta(days=1),
            'endDate': datetime.date.today() + datetime.timedelta(days=5),
            'price': 4000,
            'priceTypeId': 1,
            'refundType': True,
            'createdAt': datetime.date.today(),
            'status': True
        }
    ]

    for i in data:
        user = PropertyModel(
            propertyName=i['name'],
            description=i['description'],
            userId=i['userId'],
            propertyTypeId=i['propertyTypeId'],
            categoryId=i['categoryId'],
            cityId=i['cityId'],
            stateId=i['stateId'],
            countryId=i['countryId'],
            address=i['address'],
            bedroomCount=i['bedroomCount'],
            bedCount=i['bedCount'],
            bathroomCount=i['bathroomCount'],
            accomodatesCount=i['accomodatesCount'],
            isAvailable=i['isAvailable'],
            startDate=i['startDate'],
            endDate=i['endDate'],
            price=i['price'],
            priceTypeId=i['priceTypeId'],
            refundType=i['refundType'],
            isCancel = True,
            istantBook = True,
            createdAt=i['createdAt'],
            status=True
        )
        db.session.add(user)
        db.session.commit()
    return json.dumps({
        "error": False,
        "message": "data added successfully"
    })