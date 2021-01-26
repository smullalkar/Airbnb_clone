from . import db
from .UserModel import *
from .PropertyModel import *


class PropertyImagesModel(db.Model):
    """
    Property Images table
    """
    __tablename__ = "property_images"
    id = db.Column(db.Integer, primary_key=True)
    propertyId = db.Column(db.Integer, db.ForeignKey(PropertyModel.id))
    userId = db.Column(db.Integer, db.ForeignKey(UserModel.id))
    image = db.Column(db.String(60))
    createdAt = db.Column(db.DateTime(timezone=True))
    status = db.Column(db.Boolean)
