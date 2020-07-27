from . import db
from .CountriesModel import *

class StateModel(db.Model):
    """
    State Table
    """
    __table__name = 'states'
    id = db.Column(db.Integer, primary_key = True)
    stateName = db.Column(db.String(60))
    code = db.Column(db.String(10))
    status = db.Column(db.Boolean)
    countryId = db.Column(db.Integer, db.ForeignKey(CountriesModel.id))
