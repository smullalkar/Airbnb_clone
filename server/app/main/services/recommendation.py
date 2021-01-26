from ..models import db, BookingModel
import json
import jwt
from instance.config import SECRET_KEY
import datetime
import time
from ..util.auth_token import checkAuthToken
from .searchs import sendData
import math


def recommendation(params):
    """
    send recommendation based on property viewed by user
    """
    try:
        location = params.get('location')
        cityId = int(params.get('city_id', default=0))
        stateId = int(params.get('state_id', default=0))
        countryId = int(params.get('country_id', default=0))
        checkin = params.get('checkin',datetime.date.today() + datetime.timedelta(days=1))
        checkout = params.get('checkout',datetime.date.today() + datetime.timedelta(days=2))
        children = int(params.get('children', default=0))
        infants = int(params.get('infants', default=0))
        adults = int(params.get('adults', default=0))
        perPage = int(params.get('per_page', default=20))
        totalguests = int(adults)+int(children)
        print('................',location)

        category = params.get('type_of_place')
        isCancel = params.get('is_cancel')
        instantBook = params.get('instantBook')
        minPrice = int(params.get('minPrice', default=0))
        maxPrice = int(params.get('maxPrice', default=0))
        bed = int(params.get('bed', default=0))
        bedrooms = int(params.get('bedrooms', default=0))
        bathrooms = int(params.get('bathrooms', default=0))
        amenities = params.get('amenities')
        propertyType = params.get('property_type')
        facility = params.get('facilities')
        print('................amenities',amenities)
        print('................f',facility)

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
            minPrice = maxPrice - (maxPrice * 0.25)
            maxPrice = maxPrice + (maxPrice * 0.25)

    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})

    # SELECT * FROM property AS p JOIN city_model AS c ON p.cityId=c.id JOIN property_type AS pt ON p.propertyTypeId=pt.id JOIN categories AS ct ON p.categoryId=ct.id JOIN state_model as st on c.stateId=st.id JOIN countries_model AS cm ON st.countryId=cm.id WHERE c.cityName='Bengaluru';        

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
                JOIN review as r ON r.propertyId=p.id WHERE c.cityName = "%s" AND '''%(location)
                
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

    if amenities is not None or facility is not None:
        query = query.strip('AND ')
        query = query + ' GROUP BY p.id ;'
        results = db.session.execute(query)
        
        similarData = []
        for element in results:
            amen = element.amenities
            fac = element.facilities
            
            a = amen.split(',') #amenities of the enity got from db
            f = fac.split(',') #facilities got from db
                    
            if amenities is not None and facility is None:
                amenities_ = amenities.split(",") #amenities to filter
                similarity = math.ceil(len(amenities_)*0.6)
                match = 0
                flag = False
                for i in range(len(a)):
                    for j in range(len(amenities_)):
                        searchAmenity = amenities_[j].split('_')
                        searchAmenity = " ".join(searchAmenity)
                        if a[i] == searchAmenity:
                            match+=1
                            if match == similarity:
                                flag=True
                                break
                if flag:
                    similarData.append(element)
                            
            if amenities is None and facility is not None:
                facility_ = facility.split(",") #facility to filter
                similarity = math.ceil(len(facility_)*0.6)
                match = 0
                flag = False
                for i in range(len(f)):
                    for j in range(len(facility_)):
                        searchFacility = facility_[j].split('_')
                        searchFacility = " ".join(searchFacility)
                        if f[i] == searchFacility:
                            match+=1
                            if match == similarity:
                                flag=True
                                break
                if flag:
                    similarData.append(element)
            
            if amenities is not None and facility is not None:
                amenities_ = amenities.split(",") #amenities to filter
                facility_ = facility.split(",") #facility to filter
                similarityAmenity = math.ceil(len(amenities_)*0.6)
                similarityFacility = math.ceil(len(facility_)*0.6)
                match1 = 0
                match2 = 0
                flag1 = False
                flag2 = False
                
                for i in range(len(a)):
                    for j in range(len(amenities_)):
                        searchAmenity = amenities_[j].split('_')
                        searchAmenity = " ".join(searchAmenity)
                        if a[i] == searchAmenity:
                            match1+=1
                            if match1 == similarityAmenity:
                                flag1=True
                                break
                
                for m in range(len(f)):
                    for n in range(len(facility_)):
                        searchFacility = facility_[j].split('_')
                        searchFacility = " ".join(searchFacility)
                        if f[m] == searchFacility:
                            match2+=1
                            if match2 == similarityFacility:
                                flag2=True
                                break
                if flag1 and flag2:
                    similarData.append(element)
            
        d = sendData(similarData)
        print('filtered data',d)
        return json.dumps({
            "data": d,
            "message": 'Successful',
            'error': False
        }, default=str)
        
    query = query.strip('AND ')
    query = query + ' GROUP BY p.id ;'
    results = db.session.execute(query)

    d = sendData(results)
    print('data',d)
    return json.dumps({
        "data": d,
        "message": 'Successful',
        'error': False
    }, default=str)

def recommendation_popularity(params):
    """
    send recommendation based on popularity
    """
    try:
        location = params.get('location')
        propertyId = params.get("property_id")
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

    if location is not None:
        query = query + ' c.cityName = "%s" '%(location)

        query = query + ' AND p.id != %d GROUP BY p.id HAVING rating >= 3.5 ;'%(int(propertyId))
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
