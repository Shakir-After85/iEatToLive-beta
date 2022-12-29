from app import app
import json
from api.models import Recipes, db


with app.app_context(): 
    recipes = []
    with open("./recipes.json", "rt") as recipefile: 
        recipes = json.loads(recipefile.read())
    recipes = [Recipes(**recipe) for recipe in recipes]
    db.session.add_all(recipes)
    db.session.commit()

   