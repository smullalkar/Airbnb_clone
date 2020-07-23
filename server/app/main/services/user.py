from ..models import db, UserModel, UserOAuthModel
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
            email == '' or \
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

    return {"error": True, "message": "Email already exists"}


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
                    "created_at": results.createdAt,
                    "user_id": res.id
                }
                obj = {
                    "data": data,
                    "session_expiry": time.time() + 86400
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


def oauth_login(userDetails):
    """
    function to oauth_login the user
    """
    try:
        firstname = userDetails["firstname"]
        lastname = userDetails["lastname"]
        email = userDetails["email"]
        provider = userDetails["provider"]
        provider_id = userDetails["provider_id"]
        access_token = userDetails["access_token"]
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
            data = {
                "firstname": results.firstname,
                "lastname": results.lastname,
                "email": results.email,
                "userType": results.userType,
                "created_at": results.createdAt,
                "user_id": res.id
            }
            d = {
                "data": data,
                "session_expiry": time.time() + 86400
            }
            encode_jwt = jwt.encode(d, SECRET_KEY)
            return json.dumps({
                "error": False,
                "token": encode_jwt.decode(),
                "message": "Logged in successfully!"
            })
        else:
            try:
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

                relation = UserOAuthModel.query.filter(UserModel.user_id == res.id).first()
                if relation is None:
                    u = UserOAuthModel(
                        user_id=res.id,
                        provider=provider,
                        provider_id=provider_id,
                        access_token=access_token
                    )
                    db.session.add(u)
                    db.session.commit()

                data_ = {
                    "firstname": res.firstname,
                    "lastname": res.lastname,
                    "email": res.email,
                    "userType": res.userType,
                    "created_at": res.createdAt,
                    "user_id": res.id
                }
                obj = {
                    "data": data_,
                    "session_expiry": time.time() + 86400
                }
                encode_jwt = jwt.encode(obj, SECRET_KEY)
                return json.dumps({
                    "error": False,
                    "token": encode_jwt.decode(),
                    "message": "Logged in successfully!"
                })
            except Exception as err:
                return {'error': True, 'error_found': format(err)}
    return json.dumps({"error": True, "message": "Unknown error!"})
