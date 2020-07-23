from . import db


class UserModel(db.Model):
    """
    User table
    """
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(60), nullable=False)
    lastname = db.Column(db.String(60))
    dob = db.Column(db.DateTime(timezone=True))
    email = db.Column(db.String(60), unique=True)
    password = db.Column(db.String(60))
    phone = db.Column(db.String(60))
    createdAt = db.Column(db.DateTime(timezone=True))
    userType = db.Column(db.String(60))
