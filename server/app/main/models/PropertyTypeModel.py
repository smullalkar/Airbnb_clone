from . import db


class PropertyTypeModel(db.Model):
    """
    Property Type Table
    """
    __tablename__ = "property_type"
    id = db.Column(db.Integer, primary_key=True)
    propertyType = db.Column(db.String(60))
    status = db.Column(db.Boolean)
