from ..models import db, BookingModel
import json
import jwt
from instance.config import SECRET_KEY
import datetime
import time
from ..util.auth_token import checkAuthToken

def add_booking(payload):
    '''
    adding booking done by user
    '''
    print('booking payload...',payload)
    try:
        propertyId = payload["property_id"]
        userId = payload["user_id"]
        checkInDate = str(payload["checkin"])+' 00:00:00'
        checkOutDate = str(payload["checkout"])+' 00:00:00'
        amountPaid = payload["total_bill"]
        gst = payload["gst"]
        totalPD = payload["total_per_day"]
        totalBill = payload["total_bill"]
        createdAt = time.strftime('%Y-%m-%d %H:%M:%S')
    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})

    totalstay = None
    diff = db.session.execute(''' SELECT DATEDIFF('%s','%s') AS d; '''%(checkOutDate,checkInDate))
    for day in diff:
        totalstay = day.d
    print('................',totalstay)

    book = BookingModel(
        propertyId = propertyId,
        userId = userId,
        amountPaid = amountPaid,
        createdAt = createdAt,
        bookingDate = checkInDate,
        gst = gst,
        totalPerDay = totalPD,
        totalBill = totalBill,
        status = True
    )
    
    db.session.add(book)
    db.session.commit()
    
    if int(totalstay) > 1:
        date_time_obj = datetime.datetime.strptime(checkInDate, '%Y-%m-%d %H:%M:%S')
        for i in range(int(totalstay)-1):
            book = BookingModel(
                propertyId = propertyId,
                userId = userId,
                amountPaid = amountPaid,
                createdAt = createdAt,
                bookingDate = date_time_obj + datetime.timedelta(days=i+1),
                status = True
            )
            
            db.session.add(book)
            db.session.commit()
    
    return json.dumps({
        "message": 'booking successful!',
        'error': False
    }, default=str)


def send_booking(payload):
    """
    send booking data of the property
    """
    try:
        propertyId = payload["propertyId"]
    except KeyError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except TypeError as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    except Exception as err:
        return json.dumps({'error': True, 'error_found': format(err)})
    
    results = db.session.execute(''' 
                                    SELECT propertyId, bookingDate FROM booking 
                                    WHERE propertyId = %d AND DATE(bookingDate) > CURDATE();
                                '''%(int(propertyId)))
    data = []
    for result in results:
        temp_dict = {}
        temp_dict["propertyId"] = result.propertyId
        temp_dict["bookingDate"] = result.bookingDate
        data.append(temp_dict)
    print('data...............',data)
    return json.dumps({
        "data": data,
        'error': False
    }, default=str)