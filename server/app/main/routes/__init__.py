from flask import Blueprint

user = Blueprint('user', __name__)
owner = Blueprint('owner',__name__)
payment = Blueprint('payment',__name__)

from . import User, Property, Owner, Payment
