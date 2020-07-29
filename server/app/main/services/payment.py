from ..models import db
import jwt
from instance.config import SECRET_KEY
from ..util.auth_token import checkAuthToken
import razorpay
import json
import hmac
import hashlib
# from flask import Flask, render_template, request


def getOrderId(booking_info):
    print('booking_info........',booking_info)
    client = razorpay.Client(auth=("rzp_test_3S2Ud4WlsY59BD", "gbaIvPnANiYCREUicQe0fzVE"))
    response = client.order.create(data=booking_info)
    return json.dumps(response)

def getPaymentValidation(payment):
    print('payment........',payment)
    secret = "gbaIvPnANiYCREUicQe0fzVE"
    key = bytes(secret, 'utf-8')
    msg = bytes(payment['razorpay_order_id'] + "|" + payment['razorpay_payment_id'], 'utf-8')
    dig = hmac.new(key=key,msg=msg,digestmod=hashlib.sha256)
    generated_signature = dig.hexdigest()
    if generated_signature == payment['razorpay_signature']:
        return{
            "status":"success",
            "message":"payment successfull"
        }
    else:
        return {
            "status":"failiure",
            "message":"payment unsuccessfull"
        }