from ..models import db
import json
import jwt
from instance.config import SECRET_KEY
import datetime
import time
from ..util.auth_token import checkAuthToken
from ..services.searchs import sendData

def entityPageDetails(payload):
    """
    function to send results for user search based on filters applied
    """
    try:
        propertyId = payload["property_id"]
        print(propertyId)
    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})

    query = ''' SELECT p.id,p.propertyName,p.description,p.address,
                p.countryId,cm.countryName,p.stateId,st.stateName,
                ppt.propertyType,ct.categoryName,c.cityName,p.istantBook,p.isCancel,
                p.refundType,p.price,p.accomodatesCount,p.lat,p.lng,
                p.bathroomCount,p.isAvailable,p.bedCount,p.bedroomCount,
                p.cityId,p.userId, AVG(r.rating) AS rating, COUNT(r.rating) AS ratingcount,
                GROUP_CONCAT(DISTINCT amenities.aminityName) AS amenities,
                GROUP_CONCAT(DISTINCT facility.facilityName) AS facilities,
                GROUP_CONCAT(DISTINCT images.image) AS images
                FROM property AS p 
                JOIN city_model AS c ON p.cityId=c.id 
                JOIN property_type AS pt ON p.propertyTypeId=pt.id 
                JOIN categories AS ct ON p.categoryId=ct.id 
                JOIN state_model as st on c.stateId=st.id 
                JOIN countries_model AS cm ON st.countryId=cm.id 
                JOIN property_type AS ppt on p.propertyTypeId=ppt.id 
                JOIN amenities_property ON p.id=amenities_property.propertyId 
                JOIN amenities ON amenities_property.amenityId=amenities.id
                JOIN facility_property ON p.id=facility_property.propertyId 
                JOIN facility ON facility_property.facilityId=facility.id
                JOIN images ON p.id=images.propertyId
                JOIN categories AS cct ON p.categoryId=cct.id 
                JOIN review as r ON r.propertyId=p.id WHERE '''

    if propertyId is not None:
        query = query + ' p.id = "%d" '%(propertyId)
        query = query + ' GROUP BY p.id ;'
        results = db.session.execute(query)

        d = sendData(results)
        print(d)
        return json.dumps({
            "data": d,
            "message": 'Successful',
            'error': False
        }, default=str)
    else:
        return json.dumps({
            "message": 'Error occured!',
            'error': True
        })
