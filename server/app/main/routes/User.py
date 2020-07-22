from . import user
from flask import request
from ..services.user import register, login
# from ..util.auth_token import checkAuthToken


@user.route("/register", methods=["POST"])
def registerUser():

    response = register(request.json)

    return response


@user.route("/login", methods=["POST"])
def loginUser():

    response = login(request.json)

    return response

# @user.route("/token_validate", methods=["POST"])
# def token_validate():

#     response = checkAuthToken(request.json)

#     return response