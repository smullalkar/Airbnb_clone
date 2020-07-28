from ..models import db, UserModel
import json
import jwt
from instance.config import SECRET_KEY
import datetime
import time
from ..util.auth_token import checkAuthToken


def ownerDetails(payload):
    """
    function to send owner details of a particular id
    """
    try:
        ownerId = payload["owner_id"]
    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})

    if userDetails is None:
        return json.dumps({'error': True, 'error_found': 'data is empty'})

    owner = UserModel.query.filter(UserModel.id == ownerId).first()

    if owner is not None:
        try:
            data = {
                "firstname": results.firstname,
                "lastname": results.lastname,
                "dob": str(results.dob),
                "email": results.email,
                "phone": results.phone,
                "owner_id": results.id
            }

            return json.dumps({
                "error": False,
                "data": data,
                "message": "Successfull!"
            })
        except Exception as err:
            return {'error': True, 'error_found': format(err)}

    return {"error": True, "message": "No property with this owner!"}

