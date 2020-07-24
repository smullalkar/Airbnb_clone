from . import db


class CountriesModel(db.Model):
    """
    Country Table
    """
    __table__name = 'countries'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(60))
    code = db.Column(db.String(10))
    status = db.Column(db.Boolean)
