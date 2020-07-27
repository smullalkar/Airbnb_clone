from . import user
from flask import request
from ..services.filters import sendAmenities, sendFacility, sendPropertyType, sendCategories
from ..services.searchs import user_search_results, search
from ..services.review import sendReviews
from ..services.booking import add_booking, send_booking
from ..services.recommendation import recommendation, recommendation_popularity
import datetime
# from ..util.auth_token import checkAuthToken

@user.route("/search")
def usearch():
    """
    sending user search results
    """
    params = request.args
    response = search(params)
    return response


@user.route("/searchresults")
def user_search():
    """
    sending user search results
    """
    params = request.args
    print('params....',params)
    response = user_search_results(params)
    return response

@user.route("/amenities")
def send_amenities():
    """
    sending amenities
    """
    response = sendAmenities()
    return response

@user.route("/facilities")
def send_facility():
    """
    sending facilities
    """
    response = sendFacility()
    return response

@user.route("/propertytype")
def send_propertytype():
    """
    sending property type
    """
    response = sendPropertyType()
    return response

@user.route("/categories")
def send_categories():
    """
    sending categories
    """
    response = sendCategories()
    return response

@user.route("/reviews", methods=["POST"])
def send_reviews():
    """
    sending reviews
    """
    response = sendReviews(request.json)
    return response


@user.route("/addbooking", methods=["POST"])
def addbook():
    """
    add booking done by user
    """
    response = add_booking(request.json)
    return response

@user.route("/sendbooking", methods=["POST"])
def sendbook():
    """
    send booking data of the property
    """
    response = send_booking(request.json)
    return response


@user.route("/recommendation", methods=["POST"])
def recom():
    """
    sending recommendation based on property viewed by user
    """
    params = request.args
    print('params....',params)
    response = recommendation(params,request.json)
    return response


@user.route("/recommendation_popularity", methods=["POST"])
def recom_pop():
    """
    sending recommendation based on popularity in the area of the property viewed by the user
    """
    params = request.args
    print('params....',params)
    response = recommendation_popularity(params,request.json)
    return response


# @user.route("/token_validate", methods=["POST"])
# def token_validate():

#     response = checkAuthToken(request.json)

#     return response