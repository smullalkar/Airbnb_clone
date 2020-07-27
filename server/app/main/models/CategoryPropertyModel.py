from . import db
from .PropertyModel import *
from .CategoriesModel import *


class CategoryPropertyModel(db.Model):
    """
    Facility Properties Relationship Table
    
    Many to many
    """
    __tablename__ = "category_property"
    id = db.Column(db.Integer, primary_key=True)
    categoryId = db.Column(db.Integer, db.ForeignKey(CategoriesModel.id))
    propertyId = db.Column(db.Integer, db.ForeignKey(PropertyModel.id))