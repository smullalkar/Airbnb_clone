import jwt
from instance.config import SECRET_KEY as key
import datetime


def checkAuthToken(token):

    decoded_data = jwt.decode(token, key)

    if datetime.datetime.strptime(decoded_data["expire_at"],
                                  "%Y-%m-%d %H:%M:%S.%f") \
    < datetime.datetime.utcnow():
        return False, {}
    else:
        return True, {
            "data": decodedData,
            "message": True
        }
