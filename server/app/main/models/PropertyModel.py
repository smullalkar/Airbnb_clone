from . import db
from .UserModel import *
from .PropertyTypeModel import *
from .CategoriesModel import *
from .CityModel import *
from .StateModel import *
from .CountriesModel import *
from .PriceTypeModel import *


class PropertyModel(db.Model):
    """
    Property Table
    """
    __tablename__ = "property"
    id = db.Column(db.Integer, primary_key=True)
    propertyName = db.Column(db.String(60), nullable=False)
    description = db.Column(db.String(255))
    userId = db.Column(db.Integer,db.ForeignKey(UserModel.id))
    propertyTypeId = db.Column(db.Integer,db.ForeignKey(PropertyTypeModel.id))
    categoryId = db.Column(db.Integer,db.ForeignKey(CategoriesModel.id))
    cityId = db.Column(db.Integer,db.ForeignKey(CityModel.id))
    stateId = db.Column(db.Integer,db.ForeignKey(StateModel.id))
    countryId = db.Column(db.Integer,db.ForeignKey(CountriesModel.id))
    address = db.Column(db.String(255))
    bedroomCount = db.Column(db.Integer)
    bedCount = db.Column(db.Integer)
    bathroomCount = db.Column(db.Integer)
    accomodatesCount = db.Column(db.Integer)
    isAvailable = db.Column(db.Boolean)
    startDate = db.Column(db.Date)
    endDate = db.Column(db.Date)
    price = db.Column(db.Integer)
    priceTypeId = db.Column(db.Integer,db.ForeignKey(PriceTypeModel.id))
    refundType = db.Column(db.Boolean)
    isCancel = db.Column(db.Boolean)
    istantBook = db.Column(db.Boolean)
    createdAt = db.Column(db.DateTime(timezone=True))
    modifiedAt = db.Column(db.DateTime(timezone=True))
    status = db.Column(db.Boolean)
