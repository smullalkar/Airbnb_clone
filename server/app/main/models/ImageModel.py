from . import db
from .PropertyModel import *


class ImageModel(db.Model):
    """
    Property Images table
    """
    __tablename__ = "images"
    id = db.Column(db.Integer, primary_key=True)
    propertyId = db.Column(db.Integer, db.ForeignKey(PropertyModel.id))
    image = db.Column(db.String(255))