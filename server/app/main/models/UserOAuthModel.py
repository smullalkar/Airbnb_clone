from . import db
import

class UserOAuthModel(db.Model):
    """
    User OAuth table
    """
    __tablename__ = "user_oauth"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    provider = db.Column(db.String(60))
    provider_id = db.Column(db.String(100))
    access_token = db.Column(db.String(100))

