from . import db
from .UserModel import *
from .PropertyModel import *


class ReviewModel(db.Model):
    """
    Review table
    """
    __tablename__ = "review"
    id = db.Column(db.Integer, primary_key=True)
    propertyId = db.Column(db.Integer, db.ForeignKey(PropertyModel.id))
    userId = db.Column(db.Integer, db.ForeignKey(UserModel.id))
    rating = db.Column(db.Integer)
    review = db.Column(db.String(255))
    createdAt = db.Column(db.DateTime(timezone=True))
