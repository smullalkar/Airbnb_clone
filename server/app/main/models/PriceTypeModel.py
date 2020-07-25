from . import db


class PriceTypeModel(db.Model):
    """
    PriceType Table
    """
    __table__name = 'price_type'
    id = db.Column(db.Integer, primary_key = True)
    priceType = db.Column(db.String(60))
    status = db.Column(db.Boolean)
