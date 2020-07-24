from . import db


class AmenitiesModel(db.Model):
    """
    Amenities Table
    """
    __tablename__ = "amenities"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(60))
    status = db.Column(db.Boolean)
