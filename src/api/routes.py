"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Recipes
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def handle_signup():
    body=request.json
    email = request.json.get('email')
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    password = request.json.get('password')
    
    if not body:
        return 'You need to enter data',400

    if not email:
        return 'You need to enter an email',400
    if not first_name:
        return 'You need to enter a fname',400
    if not last_name:
        return 'You need to enter a lname',400
    if not password:
        return 'You need to enter a password', 400

    # check_user = User.query.filter_by(email=email)
    check_user = User.query.filter_by(email=email).first()

    if check_user is not None:
        return jsonify({
            'msg': 'The email address already exists. Please login to your account to continue.'
        }),409

    user = User(email=email, first_name=first_name, last_name=last_name, password=password, is_active=True)

    db.session.add(user)
    db.session.commit()
   
    payload = {
        'msg': 'Your account has been registered successfully.',
        'user': user.serialize()
    }

    return jsonify(payload), 200


@api.route('/login', methods=['POST'])
def handle_login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({
            "msg": "No account was found. Please check the email used or create an account."
        }), 401
    
    if password != user.password:
        return jsonify({"msg": "Incorrect password. Please try again."}), 401

    # access_token = create_access_token(identity=email)
    payload = {
        # 'token': access_token.decode("utf-8"),
        'user': user.serialize()
    }

    return jsonify(payload), 200



@api.route('/recipes', methods=['GET'])
def handle_recipes():
    recipes = Recipes.query.all()
    serialized_recipes = [item.serialize() for item in recipes]
    # access_token = create_access_token(identity=email)
    payload = {
        # 'token': access_token.decode("utf-8"),
        'recipes': serialized_recipes
    }

    return jsonify(payload), 200


# # # @api.route('/recipes', methods=['GET'])
# # # def handle_login():
# # #     recipes = Recipes.query.all()
# # #     serialized_recipes = [item.serialize() for item in recipes]
# # #     # access_token = create_access_token(identity=email)
# # #     payload = {
# # #         # 'token': access_token.decode("utf-8"),
# # #         'recipes': serialized_recipes
# #     }

#     return jsonify(payload), 200
  