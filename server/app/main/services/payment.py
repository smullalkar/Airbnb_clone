from ..models import db
import jwt
from instance.config import SECRET_KEY
from ..util.auth_token import checkAuthToken
import razorpay
import json
import hmac
import hashlib
import os
from twilio.rest import Client
from flask import Flask, render_template, request
import smtplib
from .booking import add_booking


def send_email(subject, msg, reciever):
    server = smtplib.SMTP('smtp.gmail.com:587')
    server.ehlo()
    server.starttls()
    server.login('smullalkar@gmail.com', 'prisha101')
    message = 'Subject: {}\n\n{}'.format(subject, msg)
    server.sendmail('smullalkar@gmail.com', reciever, message)
    server.quit()
    print("Success: Email sent!")


def getOrderId(booking_info):
    print('booking_info........',booking_info)
    client = razorpay.Client(auth=("rzp_test_3S2Ud4WlsY59BD", "gbaIvPnANiYCREUicQe0fzVE"))
    response = client.order.create(data=booking_info)
    return json.dumps(response)

def getPaymentValidation(details):
    print('details.......',details)
    payment = details["res"]
    print('payment details.......',payment)
    bookingDetails = details["bookingDetails"]
    print('booking details.......',bookingDetails)
    
    secret = "gbaIvPnANiYCREUicQe0fzVE"
    key = bytes(secret, 'utf-8')
    msg = bytes(payment['razorpay_order_id'] + "|" + payment['razorpay_payment_id'], 'utf-8')
    dig = hmac.new(key=key,msg=msg,digestmod=hashlib.sha256)
    generated_signature = dig.hexdigest()
    if generated_signature == payment['razorpay_signature']:
        add_booking(bookingDetails)
        if bookingDetails["phone"] != "":
            account_sid = 'ACb658045f6bab9c686ec24ce8d449990f'
            auth_token = '647033ee099edc58939dc45b93005b6e'
            client = Client(account_sid, auth_token)

            message = client.messages \
                            .create(
                                body="Payment successful you booking is confirmed.",
                                from_='+15157050607',
                                to="+91%s"%bookingDetails["phone"]
                            )

            print(message.sid)
            
            
            subject = "Booking from @airbnb 2020"
            msg = 'Thank you %s %s for booking @Airbnb, your booking is confirmed'%(bookingDetails["firstname"],bookingDetails["lastname"])
            user_email = bookingDetails["email"]

            send_email(subject, msg, user_email)
    
            return{
                "status":"success",
                "message":"payment successfull"
            }
        else:
            subject = "Booking from @airbnb 2020"
            msg = 'Thank you "%s" "%s" for booking @Airbnb, your booking is confirmed'%(bookingDetails["firstname"],bookingDetails["lastname"])
            user_email = bookingDetails["email"]

            send_email(subject, msg, user_email)
    
            return{
                "status":"success",
                "message":"payment successfull"
            }
        
    else:
        return {
            "status":"failiure",
            "message":"payment unsuccessfull"
        }


# Download the helper library from https://www.twilio.com/docs/python/install


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
