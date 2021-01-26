from . import payment
from flask import request
from ..services.payment import getOrderId, getPaymentValidation
# import datetime


@payment.route("/getOrderId", methods=["POST"])
def getorder():
    """
    get order_id
    """
    response = getOrderId(request.json)
    return response


@payment.route("/getValidation", methods=["POST"])
def getvalidation():
    """
    validate order id
    """
    # params = request.args
    response = getPaymentValidation(request.json)
    return response

