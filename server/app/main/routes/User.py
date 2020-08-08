from . import user
from flask import request
from ..services.user import register, login, oauth_login, sendUserDetails, updateUserPhone
from ..services.forgetpassword import forgetPass
import datetime
# from ..util.auth_token import checkAuthToken


@user.route("/register", methods=["POST"])
def registerUser():
    """
    user registeration route
    """
    response = register(request.json)
    return response


@user.route("/login", methods=["POST"])
def loginUser():
    """
    user login route
    """
    response = login(request.json)
    return response

@user.route("/oauthlogin", methods=["POST"])
def oauth_loginUser():
    """
    user oauth login route
    """
    response = oauth_login(request.json)
    return response


@user.route("/insertdata")
def i_data():
    """
    user oauth login route
    """
    response = insert_data()
    return response

@user.route("/userdetails", methods=["POST"])
def user_details():
    """
    sending user details after logging in
    """
    response = sendUserDetails(request.json)
    return response

@user.route("/forgetpassword", methods=["POST"])
def user_forgetpass():
    """
    forget password system
    """
    response = forgetPass(request.json)
    return response

@user.route("/updateuserphone", methods=["POST"])
def user_number_update():
    """
    update user number to complete the booking
    """
    response = updateUserPhone(request.json)
    return response


# @user.route("/token_validate", methods=["POST"])
# def token_validate():

#     response = checkAuthToken(request.json)

#     return response