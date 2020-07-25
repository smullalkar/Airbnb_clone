from . import db
from .PropertyModel import *
from .AmenitiesModel import *


class AmenityPropertyRelationModel(db.Model):
    """
    Amenities Properties Relationship Table
    
    Many to many
    """
    __tablename__ = "amenities_property"
    id = db.Column(db.Integer, primary_key=True)
    amenityId = db.Column(db.Integer, db.ForeignKey(AmenitiesModel.id))
    propertyId = db.Column(db.Integer, db.ForeignKey(PropertyModel.id))