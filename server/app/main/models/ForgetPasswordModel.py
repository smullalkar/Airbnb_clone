from . import db
from .UserModel import UserModel

class ForgetPassWordModel(db.Model):
    """
    forget password system
    """
    __tablename__ = "forget_password"
    id = db.Column(db.String(255), primary_key=True)
    userId = db.Column(db.Integer,db.ForeignKey(UserModel.id))
    createdAt = db.Column(db.DateTime(timezone=True))