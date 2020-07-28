from ..models import db, UserModel, UserOAuthModel, ImageModel
import json
import jwt
from instance.config import SECRET_KEY
import datetime
import time
from ..util.auth_token import checkAuthToken


def sendData(results):
    data = []
    for result in results:
        temp_dict = {}
        temp_dict["property_id"] = result.id
        temp_dict["propertyName"] = result.propertyName
        temp_dict["description"] = result.description
        temp_dict["address"] = result.address
        temp_dict["countryId"] = result.countryId
        temp_dict["countryName"] = result.countryName
        temp_dict["stateId"] = result.stateId
        temp_dict["stateName"] = result.stateName
        temp_dict["propertyType"] = result.propertyType
        temp_dict["cityName"] = result.cityName
        temp_dict["istantBook"] = result.istantBook
        temp_dict["isCancel"] = result.isCancel
        temp_dict["refundType"] = result.refundType
        temp_dict["price"] = result.price
        temp_dict["accomodatesCount"] = result.accomodatesCount
        temp_dict["bathroomCount"] = result.bathroomCount
        temp_dict["isAvailable"] = result.isAvailable
        temp_dict["bedCount"] = result.bedCount
        temp_dict["bedroomCount"] = result.bedroomCount
        temp_dict["cityId"] = result.cityId
        temp_dict["ownerId"] = result.userId
        temp_dict["amenity"] = result.amenities
        temp_dict["facility"] = result.facilities
        temp_dict["rating"] = result.rating
        temp_dict["ratingcount"] = result.ratingcount
        temp_dict["images"] = result.images
        data.append(temp_dict)
    return data

def search(params):
    """
    function to send results for user search based location, checkin_date, checkout_date, no of guests
    """
    try:
        location = params.get('location', default='Bengaluru')
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


    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})

    # SELECT * FROM property AS p JOIN city_model AS c ON p.cityId=c.id JOIN property_type AS pt ON p.propertyTypeId=pt.id JOIN categories AS ct ON p.categoryId=ct.id JOIN state_model as st on c.stateId=st.id JOIN countries_model AS cm ON st.countryId=cm.id WHERE c.cityName='Bengaluru';

    if location is not None and totalguests == 1:
        results = db.session.execute('''
                                        SELECT p.id,p.propertyName,p.description,p.address,
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
                                        JOIN review as r ON r.propertyId=p.id
                                        WHERE c.cityName='%s' GROUP BY p.id; 
                                    '''%(location))
        d = sendData(results)
        return json.dumps({
            "data": d,
            "message": 'Data recieved',
            'error': False
        }, default=str)
        
    elif totalguests > 1:
        results = db.session.execute('''    
                                        SELECT p.id,p.propertyName,p.description,p.address,
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
                                        JOIN review as r ON r.propertyId=p.id
                                        WHERE c.cityName='%s' AND p.accomodatesCount > '%d' GROUP BY p.id; 
                                    '''%(location,totalguests-1))
        d = sendData(results)

        return json.dumps({
            "data": d,
            "message": 'Data recieved',
            'error': False
        }, default=str)

def user_search_results(params):
    """
    function to send results for user search based on filters applied
    """
    try:
        location = params.get('location')
        cityId = params.get('city_id', default=0)
        stateId = params.get('state_id', default=0)
        countryId = params.get('country_id', default=0)
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
        query = query + ' p.accomodatesCount = %d AND '%(totalguests)

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
    query = query + ' GROUP BY p.id ;'
    results = db.session.execute(query)

    d = sendData(results)
    print(d)
    return json.dumps({
        "data": d,
        "message": 'Successful',
        'error': False
    }, default=str)
