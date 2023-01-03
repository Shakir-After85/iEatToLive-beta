from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

favorties = db.Table('favorites',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('recipes_id', db.Integer, db.ForeignKey('recipes.id'), primary_key=True)
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    first_name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    list_favorites = db.relationship('Recipes', secondary="favorites")
    # favorites = db.relationship('Recipes', back_populates="user")
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "list_favorites": list(map(lambda x: x.serialize(), self.list_favorites)),
            # do not serialize the password, its a security breach
        }


class Recipes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(120), unique=True, nullable=False)
    # ingredients = db.Column(db.String(80), unique=False, nullable=False)
    cook_time = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(550), unique=False, nullable=False)
    image_link = db.Column(db.String(550), unique=False, nullable=False)
    # user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    # user = db.relationship("User", back_populates="favorites")

    def __repr__(self):
        return f'<Recipes {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            # "ingredients": list(map(lambda x: x.serialize(), self.ingredients)),
            
            "cook_time" : self.cook_time,
            "description" : self.description,
            "image_link": self.image_link
            # do not serialize the password, its a security breach
        }