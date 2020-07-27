from . import db


class MinimumStayModel(db.Model):
    """
    MinimumStay Table
    """
    __table__name = 'price_type'
    id = db.Column(db.Integer, primary_key = True)
    minimumStay = db.Column(db.String(60))
    status = db.Column(db.Boolean)
