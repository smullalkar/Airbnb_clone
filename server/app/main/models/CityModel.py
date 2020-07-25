from . import db
from .StateModel import *

class CityModel(db.Model):
    """
    City Table
    """
    __table__name = 'city'
    id = db.Column(db.Integer, primary_key = True)
    cityName = db.Column(db.String(60))
    status = db.Column(db.Boolean)
    stateId = db.Column(db.Integer, db.ForeignKey(StateModel.id))
