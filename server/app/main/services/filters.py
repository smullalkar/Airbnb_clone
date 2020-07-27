from ..models import db, UserModel, UserOAuthModel, PropertyModel
import json
import jwt
from instance.config import SECRET_KEY
import datetime
import time
from ..util.auth_token import checkAuthToken


def sendAmenities():
    '''
    sending amenities
    '''
    results = db.session.execute(''' SELECT * FROM amenities; ''')
    data = []
    for result in results:
        temp_dict = {}
        temp_dict["id"] = result.id
        temp_dict["amenityName"] = result.aminityName
        temp_dict["status"] = result.status
        data.append(temp_dict)
    print('data...............',data)
    return json.dumps({
        "data": data,
        'error': False
    }, default=str)


def sendFacility():
    '''
    sending facility
    '''
    results = db.session.execute(''' SELECT * FROM facility; ''')
    data = []
    for result in results:
        temp_dict = {}
        temp_dict["id"] = result.id
        temp_dict["facilityName"] = result.facilityName
        temp_dict["status"] = result.status
        data.append(temp_dict)
    print('data...............',data)
    return json.dumps({
        "data": data,
        'error': False
    }, default=str)


def sendPropertyType():
    '''
    sending property type
    '''
    results = db.session.execute(''' SELECT * FROM property_type; ''')
    data = []
    for result in results:
        temp_dict = {}
        temp_dict["id"] = result.id
        temp_dict["propertyType"] = result.propertyType
        temp_dict["status"] = result.status
        data.append(temp_dict)
    print('data...............',data)
    return json.dumps({
        "data": data,
        'error': False
    }, default=str)


def sendCategories():
    '''
    sending categories
    '''
    results = db.session.execute(''' SELECT * FROM categories; ''')
    data = []
    for result in results:
        temp_dict = {}
        temp_dict["id"] = result.id
        temp_dict["ty_of_place"] = result.categoryName
        temp_dict["status"] = result.status
        data.append(temp_dict)
    print('data...............',data)
    return json.dumps({
        "data": data,
        'error': False
    }, default=str)