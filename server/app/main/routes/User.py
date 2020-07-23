from . import user
from flask import request
from ..services.user import register, login, oauth_login
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
    user login route
    """
    response = oauth_login(request.json)

    return response

# @user.route("/token_validate", methods=["POST"])
# def token_validate():

#     response = checkAuthToken(request.json)

#     return response