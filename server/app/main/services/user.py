from ..models import db, UserModel
import json
import jwt
from instance.config import SECRET_KEY
import datetime
import time
from ..util.auth_token import checkAuthToken


def register(userDetails):
    try:
        firstname = userDetails["firstname"]
        lastname = userDetails["lastname"]
        dob = userDetails["dob"]
        email = userDetails["email"]
        password = userDetails["password"]
        createdAt = time.strftime('%Y-%m-%d %H:%M:%S')
        userType = userDetails["userType"]
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
            email == '' or \
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
                type=userType,
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

    return {"error": True, "message": "Email already exists"}


def login(userDetails):
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
                    "dob": results.dob,
                    "email": results.email,
                    "userType": results.userType,
                }
                obj = {
                    "data": data,
                    "created_at": str(datetime.datetime.utcnow()),
                    "expire_at": str(
                        datetime.datetime.utcnow()
                        + datetime.timedelta(days=1)
                    )
                }

                encode_jwt = jwt.encode(obj, SECRET_KEY)

                return json.dumps({
                    "error": False,
                    "token": encode_jwt.decode(),
                    "message": "Logged in successfully!"
                })

        else:
            return json.dumps({
                "error": True,
                "message":
                "You have entered the wrong password!"
            })

    return json.dumps({"error": True, "message": "Unknown error!"})
