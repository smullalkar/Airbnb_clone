from . import db
from .PropertyModel import *
from .FacilityModel import *


class FacilityPropertyModel(db.Model):
    """
    Facility Properties Relationship Table
    
    Many to many
    """
    __tablename__ = "facility_property"
    id = db.Column(db.Integer, primary_key=True)
    facilityId = db.Column(db.Integer, db.ForeignKey(FacilityModel.id))
    propertyId = db.Column(db.Integer, db.ForeignKey(PropertyModel.id))