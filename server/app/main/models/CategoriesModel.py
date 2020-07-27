from . import db


class CategoriesModel(db.Model):
    """
    Categories Table
    """
    __tablename__ = "categories"
    id = db.Column(db.Integer, primary_key=True)
    categoryName = db.Column(db.String(60))
    status = db.Column(db.Boolean)
