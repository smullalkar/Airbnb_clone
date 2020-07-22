import jwt
from instance.config import SECRET_KEY as key
import time
import json


def checkAuthToken(token):

    decodedData = jwt.decode(token, key)

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

# def checkAuthToken(t):
#     data= t["token"]
#     decodedData = jwt.decode(data, key)

#     current_time = time.time()

#     if decodedData["session_expiry"] < current_time:
#         return json.dumps({
#             "error": True,
#             "message": "Invalid Token"
#         })
#     else:
#         return json.dumps({
#             "data": decodedData,
#             "message": True
#         }, default=str)