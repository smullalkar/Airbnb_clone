from ..models import db, BookingModel
import json
import jwt
from instance.config import SECRET_KEY
import datetime
import time
from ..util.auth_token import checkAuthToken
from .searchs import sendData


def recommendation(params, payload):
    """
    send recommendation based on property viewed by user
    """
    try:
        location = params.get('location')
        cityId = params.get('city_id', default=1)
        stateId = params.get('state_id', default=1)
        countryId = params.get('country_id', default=1)
        checkin = params.get('checkin',datetime.date.today() + datetime.timedelta(days=1))
        checkout = params.get('checkout',datetime.date.today() + datetime.timedelta(days=2))
        children = params.get('children', default=0)
        infants = params.get('infants', default=0)
        adults = params.get('adults', default=1)
        perPage = params.get('per_page', default=20)
        totalguests = int(adults)+int(children)
        print('................',location)

        category = params.getlist('type_of_place')
        isCancel = params.get('is_cancel')
        instantBook = params.get('instantBook')
        minPrice = params.get('minPrice', default=0)
        maxPrice = params.get('maxPrice', default=0)
        bed = params.get('bed', default=0)
        bedrooms = params.get('bedrooms', default=0)
        bathrooms = params.get('bathrooms', default=0)
        amenities = params.getlist('amenities')
        propertyType = params.getlist('property_type')
        facility = params.getlist('facility')
        print('................',amenities)
        print('................f',facility)

        propertyId = payload["property_id"]
        
        if maxPrice <= 1000:
            minPrice = 0
            maxPrice = maxPrice

        elif maxPrice > 1000 and maxPrice <= 3000:
            minPrice = maxPrice - (maxPrice * 0.50)
            maxPrice = maxPrice + (maxPrice * 0.50)

        elif maxPrice > 3000 and maxPrice <= 5000:
            minPrice = maxPrice - (maxPrice * 0.40)
            maxPrice = maxPrice + (maxPrice * 0.40)

        elif maxPrice > 5000 and maxPrice < 10000:
            minPrice = maxPrice - (maxPrice * 0.30)
            maxPrice = maxPrice + (maxPrice * 0.30)

        else:
            minPrice = maxPrice - (maxPrice * 0.20)
            maxPrice = maxPrice + (maxPrice * 0.20)
            
    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})

    # SELECT * FROM property AS p JOIN city_model AS c ON p.cityId=c.id JOIN property_type AS pt ON p.propertyTypeId=pt.id JOIN categories AS ct ON p.categoryId=ct.id JOIN state_model as st on c.stateId=st.id JOIN countries_model AS cm ON st.countryId=cm.id WHERE c.cityName='Bengaluru';        

    query = ''' SELECT p.id,p.propertyName,p.description,p.address,
                p.countryId,cm.countryName,p.stateId,st.stateName,
                ppt.propertyType,c.cityName,p.istantBook,p.isCancel,
                p.refundType,p.price,p.accomodatesCount,
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

    if location is not None:
        query = query + ' c.cityName = "%s" AND '%(location)

    if totalguests != 0:
        query = query + ' p.accomodatesCount >= %d AND '%(totalguests)

    if category is not None and len(category) != 0:
        if len(category) > 1:
            for i in category:
                query = query + ' ct.categoryName = "%s" OR '%(i)
        else:
            query = query + ' ct.categoryName = "%s" AND '%(category[0])

    if isCancel is not None:
        query = query + ' p.isCancel = {0} AND '.format(isCancel)
        
    if instantBook is not None:
        query = query + ' p.instantBook = {0} AND '.format(instantBook)

    if maxPrice != 0 and minPrice != 0:
        query = query + ' p.price >= %d AND p.price <= %d AND '%(int(minPrice),int(maxPrice))

    if bed != 0:
        query = query + ' p.bedCount = %d AND '%(bed)

    if bedrooms != 0:
        query = query + ' p.bedroomCount = %d AND '%(bedrooms)

    if bathrooms != 0:
        query = query + ' p.bathroomCount = %d AND '%(bathrooms)

    if amenities is not None and len(amenities) != 0:
        if len(amenities) > 1:
            for i in amenities:
                query = query + ' amenities.aminityName = "%s" OR '%(i)
        else:
            query = query + ' amenities.aminityName = "%s" AND '%(amenities[0])

    if facility is not None and len(facility) != 0 :
        if len(facility) > 1:
            for i in facility:
                query = query + ' facility.facilityName = "%s" OR '%(i)
        else:
            query = query + ' facility.facilityName = "%s" AND '%(facility[0])

    if propertyType is not None and len(propertyType) != 0:
        if len(propertyType) > 1:
            for i in propertyType:
                query = query + ' ppt.propertyType = "%s" OR '%(i)
        else:
            query = query + ' ppt.propertyType = "%s" AND '%(propertyType[0])

    query = query.strip('AND ')
    query = query.strip('OR ')
    query = query + ' AND p.id != %d GROUP BY p.id ;'%(int(propertyId))
    results = db.session.execute(query)

    d = sendData(results)
    print(d)
    return json.dumps({
        "data": d,
        "message": 'Successful',
        'error': False
    }, default=str)


def recommendation_popularity(params, payload):
    """
    send recommendation based on popularity
    """
    try:
        location = params.get('location')
        propertyId = payload["property_id"]
        print('body ............',propertyId, location)
            
    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})

    # SELECT * FROM property AS p JOIN city_model AS c ON p.cityId=c.id JOIN property_type AS pt ON p.propertyTypeId=pt.id JOIN categories AS ct ON p.categoryId=ct.id JOIN state_model as st on c.stateId=st.id JOIN countries_model AS cm ON st.countryId=cm.id WHERE c.cityName='Bengaluru';        

    query = ''' SELECT p.id,p.propertyName,p.description,p.address,
                p.countryId,cm.countryName,p.stateId,st.stateName,
                ppt.propertyType,c.cityName,p.istantBook,p.isCancel,
                p.refundType,p.price,p.accomodatesCount,
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

    if location is not None:
        query = query + ' c.cityName = "%s" '%(location)

        query = query + ' AND p.id != %d GROUP BY p.id HAVING rating >= 3 ;'%(int(propertyId))
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
            "message": 'Location not specified!',
            'error': True
        }, default=str)
