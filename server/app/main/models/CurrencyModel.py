from . import db
from .CountriesModel import *

class CurrencyModel(db.Model):
    """
    Currency Table
    """
    __table__name = 'currency'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(60))
    status = db.Column(db.Boolean)
    countryId = db.Column(db.Integer, db.ForeignKey(CountriesModel.id))