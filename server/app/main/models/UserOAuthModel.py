from . import db
from .UserModel import *


class UserOAuthModel(db.Model):
    """
    User OAuth table
    """
    __tablename__ = "user_oauth"
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(UserModel.id))
    provider = db.Column(db.String(60))
    providerId = db.Column(db.String(255))
