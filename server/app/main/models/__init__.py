from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .UserModel import UserModel
from .UserOAuthModel import UserOAuthModel
from .CountriesModel import CountriesModel
from .StateModel import StateModel
from .CityModel import CityModel
from .AmenitiesModel import AmenitiesModel
from .PropertyModel import PropertyModel
from .CategoriesModel import CategoriesModel
from .CityModel import CityModel
from .CountriesModel import CountriesModel
from .MinimumStayModel import MinimumStayModel
from .PriceTypeModel import PriceTypeModel
from .PropertyTypeModel import PropertyTypeModel
from .PropertyImagesModel import PropertyImagesModel
from .StateModel import StateModel
from .BookingModel import BookingModel
from .AmenityPropertyRelationModel import AmenityPropertyRelationModel
from .PropertyRoomModel import PropertyRoomModel
from .FacilityModel import FacilityModel
# from .FacilityModel import FacilityModel
