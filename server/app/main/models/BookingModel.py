from . import db
from .UserModel import *
from .PropertyModel import *


class BookingModel(db.Model):
    """
    Booking table
    """
    __tablename__ = "booking"
    id = db.Column(db.Integer, primary_key=True)
    propertyId = db.Column(db.Integer, db.ForeignKey(PropertyModel.id))
    userId = db.Column(db.Integer, db.ForeignKey(UserModel.id))
    amountPaid = db.Column(db.Integer)
    createdAt = db.Column(db.DateTime(timezone=True))
    modifiedAt = db.Column(db.DateTime(timezone=True))
    isRefund = db.Column(db.Boolean)
    refundDate = db.Column(db.DateTime(timezone=True))
    bookingDate = db.Column(db.DateTime(timezone=True))
    gst = db.Column(db.Integer)
    totalPerDay = db.Column(db.Integer)
    totalBill = db.Column(db.Integer)
    status = db.Column(db.Boolean)
