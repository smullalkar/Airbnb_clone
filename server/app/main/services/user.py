from ..models import db, UserModel, UserOAuthModel, ImageModel
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
                data = [{
                    "firstname": results.firstname,
                    "lastname": results.lastname,
                    "dob": str(results.dob),
                    "email": results.email,
                    "phone": results.phone,
                    "userType": results.userType,
                    "created_at": str(results.createdAt),
                    "user_id": results.id
                }]
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
            if results.phone is not None:
                data = [{
                    "firstname": results.firstname,
                    "lastname": results.lastname,
                    "dob": str(results.dob),
                    "email": results.email,
                    "phone": results.phone,
                    "userType": results.userType,
                    "created_at": str(results.createdAt),
                    "user_id": results.id
                }]
            else:
                data = [{
                    "firstname": results.firstname,
                    "lastname": results.lastname,
                    "email": results.email,
                    "userType": results.userType,
                    "created_at": str(results.createdAt),
                    "user_id": results.id,
                    "phone": '',
                    "dob": '',
                }]
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

            data_ = [{
                "firstname": res.firstname,
                "lastname": res.lastname,
                "email": res.email,
                "userType": res.userType,
                "created_at": str(res.createdAt),
                "user_id": res.id
            }]
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


def sendUserDetails(payload):
    data= payload["token"]
    decodedData = jwt.decode(data, SECRET_KEY)

    current_time = time.time()

    if decodedData["session_expiry"] < current_time:
        return json.dumps({
            "error": True,
            "message": "Invalid Token"
        })
    else:
        return json.dumps({
            "data": decodedData,
            "message": True
        }, default=str)


def insert_data():
    # data = [
    #     {
    #         'name': "Master's Homestay", 
    #         'description': "At the heart of Fort Kochi, Our home is very near to all the tourist attractions in the area. Good place for your vacation. The guests are provided with the best of services and the facilities.",
    #         'userId': 1,
    #         'propertyTypeId': 9,
    #         'categoryId': 1,
    #         'cityId': 1,
    #         'stateId' :1,
    #         'countryId': 1,
    #         'address': "Bengaluru, Karnataka, India",
    #         'bedroomCount': 5,
    #         'bedCount': 5,
    #         'bathroomCount': 5,
    #         'accomodatesCount': 5,
    #         'isAvailable': True,
    #         'startDate': datetime.date.today() + datetime.timedelta(days=1),
    #         'endDate': datetime.date.today() + datetime.timedelta(days=2),
    #         'price': 10000,
    #         'priceTypeId': 1,
    #         'refundType': True,
    #         'createdAt': datetime.datetime.utcnow(),
    #         'status': True
    #     },
    #     # insert into user (firstname,lastname,dob,email,password,phone,createdAt,userType,status) values('Shabaz','Mullalkar','1994:04:04','smullalkar@gmail.com','1234','8123332662','2020-07-25','user'',true);
    #     {
    #         'name': "refurbished ACs Artsy Bandra hamlet", 
    #         'description': "A newly renovated, fully equipped unit in Bandra's Waroda Road. Walk to numerous lovely Cafes and boutiques in the neighborhood. Enjoy peace and quiet in a silent location in a cul-de-sac, while still being well connected to the rest of the city.",
    #         'userId': 1,
    #         'propertyTypeId': 2,
    #         'categoryId': 2,
    #         'cityId': 2,
    #         'stateId' :2,
    #         'countryId': 1,
    #         'address': "Mumbai, Maharashtra, India",
    #         'bedroomCount': 4,
    #         'bedCount': 4,
    #         'bathroomCount': 4,
    #         'accomodatesCount': 4,
    #         'isAvailable': True,
    #         'startDate': datetime.date.today() + datetime.timedelta(days=1),
    #         'endDate': datetime.date.today() + datetime.timedelta(days=2),
    #         'price': 4000,
    #         'priceTypeId': 1,
    #         'refundType': True,
    #         'createdAt': datetime.datetime.utcnow(),
    #         'status': True
    #     },
    #     {
    #         'name': "Private bedroom. Hidden Gem in the heart of Pune.", 
    #         'description': "Spacious private bedroom on the first floor of a heritage. Bedroom is large enough for 2 guests to sleep comfortably,has private seating for 2, flatscreen TV & a large executive table with chair.",
    #         'userId': 2,
    #         'propertyTypeId': 2,
    #         'categoryId': 2,
    #         'cityId': 4,
    #         'stateId' : 2,
    #         'countryId': 1,
    #         'address': "Pune, Maharashtra, India",
    #         'bedroomCount': 1,
    #         'bathroomCount': 1,
    #         'accomodatesCount': 2,
    #         'isAvailable': True,
    #         'startDate': datetime.date.today() + datetime.timedelta(days=1),
    #         'endDate': datetime.date.today() + datetime.timedelta(days=5),
    #         'price': 1000,
    #         'priceTypeId': 1,
    #         'refundType': True,
    #         'createdAt': datetime.datetime.utcnow(),
    #         'status': True
    #     }
    # ]
    results = db.session.execute(''' select * from images; ''')
    for i in results:
        if int(i.propertyId) == 29: 
            break
        user = ImageModel(
            propertyId=int(i.propertyId)+106,
            image=i.image
        )
        db.session.add(user)
        db.session.commit()
        
    return json.dumps({
        "error": False,
        "message": "data added successfully"
    })
