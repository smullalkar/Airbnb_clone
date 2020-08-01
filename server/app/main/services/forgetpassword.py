from ..models import db
import json
import jwt
from instance.config import SECRET_KEY
import datetime
import time
from ..util.auth_token import checkAuthToken
from ..models.ForgetPasswordModel import ForgetPassWordModel
from ..models.UserModel import UserModel
import uuid  
import smtplib


def send_email(subject, msg, reciever):
    server = smtplib.SMTP('smtp.gmail.com:587')
    server.ehlo()
    server.starttls()
    server.login('smullalkar@gmail.com', 'prisha101')
    message = 'Subject: {}\n\n{}'.format(subject, msg)
    server.sendmail('smullalkar@gmail.com', reciever, message)
    server.quit()
    print("Success: Email sent!")


def forgetPass(payload):
    user_email = payload["user_email"]
    token = uuid.uuid4()
    results = UserModel.query.filter(UserModel.email == user_email).first()
    createdAt = time.strftime('%Y-%m-%d %H:%M:%S')
    userId = results.id
    
    table = ForgetPassWordModel(
        id=token,
        userId=userId,
        createdAt=createdAt
    )
    db.session.add(table)
    db.session.commit()
    
    subject = "Forget Password"
    msg = 'http://127.0.0.1:5000/forgetpassword/reset?token=%s'%(token)

    send_email(subject, msg, user_email)
    
