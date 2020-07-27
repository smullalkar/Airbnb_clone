from . import db


class FacilityModel(db.Model):
    """
    facility Table
    """
    __tablename__ = "facility"
    id = db.Column(db.Integer, primary_key=True)
    facilityName = db.Column(db.String(60))
    status = db.Column(db.Boolean)