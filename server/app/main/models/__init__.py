from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .UserModel import UserModel
from .UserOAuthModel import UserOAuthModel
from .CountriesModel import CountriesModel
from .StateModel import StateModel
from .CityModel import CityModel
from .AmenitiesModel import AmenitiesModel
from .CategoriesModel import CategoriesModel
from .CityModel import CityModel
from .CountriesModel import CountriesModel
from .CurrencyModel import CurrencyModel
from .MinimumStayModel import MinimumStayModel
from .PriceTypeModel import PriceTypeModel
from .PropertyModel import PropertyModel
from .PropertyTypeModel import PropertyTypeModel
from .PropertyImagesModel import PropertyImagesModel
from .StateModel import StateModel
