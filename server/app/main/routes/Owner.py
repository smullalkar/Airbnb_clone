from . import owner
from flask import request
from ..services.owner import ownerDetails
import datetime
# from ..util.auth_token import checkAuthToken


@owner.route("/ownerdetails", methods=["POST"])
def owner_det():
    """
    owner details of a particular property
    """
    response = ownerDetails(request.json)
    return response

