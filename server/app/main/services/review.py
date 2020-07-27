from ..models import db
import json
import jwt
from instance.config import SECRET_KEY
import datetime
import time
from ..util.auth_token import checkAuthToken


def sendReviews(payload):
    '''
    sending reviews of a perticular property
    '''
    try:
        propertyId = payload["propertyId"]
    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    results = db.session.execute(''' 
                                    SELECT r.id, r.propertyId, r.userId, r.review, 
                                    r.rating, r.createdAt, u.firstname, u.lastname
                                    FROM review AS r 
                                    JOIN user AS u ON r.userId=u.id 
                                    WHERE propertyId = %d ; 
                                '''%(int(propertyId)))
    data = []
    for result in results:
        temp_dict = {}
        temp_dict["reviewId"] = result.id
        temp_dict["propertyId"] = result.propertyId
        temp_dict["reviewerId"] = result.userId
        temp_dict["review "] = result.review 
        temp_dict["rating"] = result.rating
        temp_dict["createdAt"] = result.createdAt
        temp_dict["firstname"] = result.firstname
        temp_dict["lastname"] = result.lastname
        data.append(temp_dict)
    print('data...............',data)
    return json.dumps({
        "data": data,
        'error': False
    }, default=str)