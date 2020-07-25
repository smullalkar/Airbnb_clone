from . import db
from .PropertyModel import *


class PropertyRoomModel(db.Model):
    """
    Properties Rooms Table
    
    One to many
    """
    __tablename__ = "room_table"
    id = db.Column(db.Integer, primary_key=True)
    roomName = db.Column(db.String(60), nullable=False)
    propertyId = db.Column(db.Integer, db.ForeignKey(PropertyModel.id))
    isAvailable = db.Column(db.Boolean)