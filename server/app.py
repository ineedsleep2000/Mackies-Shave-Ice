# app.py
from flask import Flask, request, make_response, abort, session
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from config import app, db, api
from werkzeug.exceptions import NotFound, Unauthorized
from models import User, Category, ShavedIce, Flavor, AddOn, Cream, ComboFlavor, Hotdog, Topping, Condiment, IceSize, Drink, Snack

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

#Users##################################################################################################################

class Users(Resource):
    def post(self):
        req_json = request.get_json()
        try:
            new_user = User(
                name=req_json["name"],
                email=req_json["email"],
                _password_hash=req_json["password"],
                is_admin=req_json.get("is_admin", False)
            )
        except ValueError as e:
            return make_response({'errors': e.args})
        db.session.add(new_user)
        db.session.commit()
        session["user_id"] = new_user.id
        return make_response(new_user.to_dict(), 201)

@app.route("/login", methods=["POST"])
def login():
    user = User.query.filter(User.email == request.get_json()["email"]).first()
    if user and user.authenticate(request.get_json()["password"]):
        session["user_id"] = user.id 
        return make_response(user.to_dict(), 200)
    else:
        raise Unauthorized
    
@app.route("/authorized")
def authorized():
    user = User.query.filter(User.id == session.get("user_id")).first()
    if not user:
        raise Unauthorized
    return make_response(user.to_dict(), 200)

@app.route("/logout", methods=["DELETE"])
def logout():
    session.clear()
    return make_response({}, 204)

########################################################################################################################
#Shaved Ice#############################################################################################################

class ShavedIces(Resource):
    def get(self):
        shaved_ices = [shaved_ice.to_dict() for shaved_ice in ShavedIce.query.all()]
        return make_response(shaved_ices, 200)
    
    def post(self):
        form_json = request.get_json()
        new_shaved_ice = ShavedIce(
            name=form_json['name'],
            image=form_json['image'],
            ice_size_id=form_json['ice_size_id'],
            category_id=form_json['category_id'],
        ) 

        db.session.add(new_shaved_ice)
        db.session.commit()

        response_dict = new_shaved_ice.to_dict()

        response = make_response(response_dict, 201)

        return response

class ShavedIces_by_id(Resource):
    def get(self, id):
        shaved_ice = ShavedIce.query.filter_by(id=id).first()
        if ShavedIce is None:
            return make_response({'error': 'shaved_ice not found'}, 404)
        return make_response(shaved_ice.to_dict(), 200)
    
    def delete(self, id):
        shaved_ice = ShavedIce.query.filter_by(id=id).first()
        if not shaved_ice:
            return make_response({'error': 'shaved_ice not found'}, 404)
        db.session.delete(shaved_ice)
        db.session.commit()
        return make_response({'message': 'shaved_ice deleted'}, 204)
    
    def patch(self,id):
        shaved_ice=db.session.get(ShavedIce, id)
        if not shaved_ice:
            return make_response({'error': 'shaved_ice not found'}, 404)
        form_json = request.get_json()
        for key, value in form_json.items():
            setattr(shaved_ice, key, value)
        db.session.add(shaved_ice)
        db.session.commit()
        return make_response(shaved_ice.to_dict(), 202)
    
########################################################################################################################
#Combo flavors##########################################################################################################
   
class ComboFlavors(Resource):
    def get(self):
        combo_flavors = [combo_flavor.to_dict() for combo_flavor in ComboFlavor.query.all()]
        return make_response(combo_flavors, 200)
    
    def post(self):
        form_json = request.get_json()

        new_combo_flavor = ComboFlavor(
            name=form_json['name'],
            category_id=form_json['category_id'],
            shaved_ice_id=form_json['shaved_ice_id'],
            flavor_id=form_json['flavor_id'],
            add_on_id=form_json['add_on_id'],
            cream_id=form_json['cream_id'],
            ice_size_id=form_json['ice_size_id'],
        )

        db.session.add(new_combo_flavor)
        db.session.commit()

        response_dict = new_combo_flavor.to_dict()
        response = make_response(response_dict, 201)

        return response
    
class ComboFlavors_by_id(Resource):
    def get(self, id):
        combo_flavor = ComboFlavor.query.filter_by(id=id).first()
        if ComboFlavor is None:
            return make_response({'error': 'combo_flavor not found'}, 404)
        return make_response(combo_flavor.to_dict(), 200)
    
    def delete(self, id):
        combo_flavor = ComboFlavor.query.filter_by(id=id).first()
        if not combo_flavor:
            return make_response({'error': 'combo_flavor not found'}, 404)
        db.session.delete(combo_flavor)
        db.session.commit()
        return make_response({'message': 'combo_flavor deleted'}, 204)
    
    def patch(self,id):
        combo_flavor=db.session.get(ComboFlavor, id)
        if not combo_flavor:
            return make_response({'error': 'combo_flavor not found'}, 404)
        form_json = request.get_json()
        for key, value in form_json.items():
            setattr(combo_flavor, key, value)
        db.session.add(combo_flavor)
        db.session.commit()
        return make_response(combo_flavor.to_dict(), 202)
    
########################################################################################################################
#Hotdogs################################################################################################################
    
class Hotdogs(Resource):
    def get(self):
        hotdogs = [hotdog.to_dict() for hotdog in Hotdog.query.all()]
        return make_response(hotdogs, 200)
    
    def post(self):
        form_json = request.get_json()

        new_hotdog = Hotdog(
            name=form_json['name'],
            category_id=form_json['category_id'],
            with_chili=form_json['with_chili'],
        )

        db.session.add(new_hotdog)
        db.session.commit()

        response_dict = new_hotdog.to_dict()
        response = make_response(response_dict, 201)

        return response
    
class Hotdogs_by_id(Resource):
    def get(self, id):
        hotdog = Hotdog.query.filter_by(id=id).first()
        if Hotdog is None:
            return make_response({'error': 'hotdog not found'}, 404)
        return make_response(hotdog.to_dict(), 200)
    
    def delete(self, id):
        hotdog = Hotdog.query.filter_by(id=id).first()
        if not hotdog:
            return make_response({'error': 'hotdog not found'}, 404)
        db.session.delete(hotdog)
        db.session.commit()
        return make_response({'message': 'hotdog deleted'}, 204)
    
    def patch(self,id):
        hotdog=db.session.get(Hotdog, id)
        if not hotdog:
            return make_response({'error': 'hotdog not found'}, 404)
        form_json = request.get_json()
        for key, value in form_json.items():
            setattr(hotdog, key, value)
        db.session.add(hotdog)
        db.session.commit()
        return make_response(hotdog.to_dict(), 202)

########################################################################################################################
#toppings###############################################################################################################

class Toppings(Resource):
    def get(self):
        toppings = [topping.to_dict() for topping in Topping.query.all()]
        return make_response(toppings, 200)
    
    def post(self):
        form_json = request.get_json()

        new_topping = Topping(
            hotdog_id=form_json['hotdog_id'],
            condiment_id=form_json['condiment_id'],
        )

        db.session.add(new_topping)
        db.session.commit()

        response_dict = new_topping.to_dict()
        response = make_response(response_dict, 201)

        return response
    
class Toppings_by_id(Resource):
    def get(self, id):
        topping = Topping.query.filter_by(id=id).first()
        if Topping is None:
            return make_response({'error': 'topping not found'}, 404)
        return make_response(topping.to_dict(), 200)
    
    def delete(self, id):
        topping = Topping.query.filter_by(id=id).first()
        if not topping:
            return make_response({'error': 'topping not found'}, 404)
        db.session.delete(topping)
        db.session.commit()
        return make_response({'message': 'topping deleted'}, 204)
    
    def patch(self,id):
        topping=db.session.get(Topping, id)
        if not topping:
            return make_response({'error': 'topping not found'}, 404)
        form_json = request.get_json()
        for key, value in form_json.items():
            setattr(topping, key, value)
        db.session.add(topping)
        db.session.commit()
        return make_response(topping.to_dict(), 202)

########################################################################################################################
#Condiment##############################################################################################################

class Condiments(Resource):
    def get(self):
        condiments = [condiment.to_dict() for condiment in Condiment.query.all()]
        return make_response(condiments, 200)
    
    def post(self):
        form_json = request.get_json()

        new_condiment = Condiment(
            name=form_json['name'],
        )

        db.session.add(new_condiment)
        db.session.commit()

        response_dict = new_condiment.to_dict()
        response = make_response(response_dict, 201)

        return response
    
class Condiments_by_id(Resource):
    def get(self, id):
        condiment = Condiment.query.filter_by(id=id).first()
        if Condiment is None:
            return make_response({'error': 'condiment not found'}, 404)
        return make_response(condiment.to_dict(), 200)
    
    def delete(self, id):
        condiment = Condiment.query.filter_by(id=id).first()
        if not condiment:
            return make_response({'error': 'condiment not found'}, 404)
        db.session.delete(condiment)
        db.session.commit()
        return make_response({'message': 'condiment deleted'}, 204)
    
    def patch(self,id):
        condiment=db.session.get(Condiment, id)
        if not condiment:
            return make_response({'error': 'condiment not found'}, 404)
        form_json = request.get_json()
        for key, value in form_json.items():
            setattr(condiment, key, value)
        db.session.add(condiment)
        db.session.commit()
        return make_response(condiment.to_dict(), 202)

########################################################################################################################
#Ice sizes##############################################################################################################
class IceSizes(Resource):
    def get(self):
        ice_sizes = [ice_size.to_dict() for ice_size in IceSize.query.all()]
        return make_response(ice_sizes, 200)
    
    def post(self):
        form_json = request.get_json()

        new_ice_size = IceSize(
            size=form_json['size'],
            price=form_json['price'],
        )

        db.session.add(new_ice_size)
        db.session.commit()

        response_dict = new_ice_size.to_dict()
        response = make_response(response_dict, 201)

        return response
    
class IceSizes_by_id(Resource):
    def get(self, id):
        ice_size = IceSize.query.filter_by(id=id).first()
        if IceSize is None:
            return make_response({'error': 'ice_size not found'}, 404)
        return make_response(ice_size.to_dict(), 200)
    
    def delete(self, id):
        ice_size = IceSize.query.filter_by(id=id).first()
        if not ice_size:
            return make_response({'error': 'ice_size not found'}, 404)
        db.session.delete(ice_size)
        db.session.commit()
        return make_response({'message': 'ice_size deleted'}, 204)
    
    def patch(self,id):
        ice_size=db.session.get(IceSize, id)
        if not ice_size:
            return make_response({'error': 'ice_size not found'}, 404)
        form_json = request.get_json()
        for key, value in form_json.items():
            setattr(ice_size, key, value)
        db.session.add(ice_size)
        db.session.commit()
        return make_response(ice_size.to_dict(), 202)
    
########################################################################################################################
#Drink##################################################################################################################
class Drinks(Resource):
    def get(self):
        drinks = [drink.to_dict() for drink in Drink.query.all()]
        return make_response(drinks, 200)
    
    def post(self):
        form_json = request.get_json()

        new_drink = Drink(
            name=form_json['name'],
            price=form_json['price'],
            category_id=form_json['category_id'],
        )

        db.session.add(new_drink)
        db.session.commit()

        response_dict = new_drink.to_dict()
        response = make_response(response_dict, 201)

        return response
    
class Drinks_by_id(Resource):
    def get(self, id):
        drink = Drink.query.filter_by(id=id).first()
        if Drink is None:
            return make_response({'error': 'drink not found'}, 404)
        return make_response(drink.to_dict(), 200)
    
    def delete(self, id):
        drink = Drink.query.filter_by(id=id).first()
        if not drink:
            return make_response({'error': 'drink not found'}, 404)
        db.session.delete(drink)
        db.session.commit()
        return make_response({'message': 'drink deleted'}, 204)
    
    def patch(self,id):
        drink=db.session.get(Drink, id)
        if not drink:
            return make_response({'error': 'drink not found'}, 404)
        form_json = request.get_json()
        for key, value in form_json.items():
            setattr(drink, key, value)
        db.session.add(drink)
        db.session.commit()
        return make_response(drink.to_dict(), 202)
    
########################################################################################################################
#Snacks#################################################################################################################
   
class Snacks(Resource):
    def get(self):
        snacks = [snack.to_dict() for snack in Snack.query.all()]
        return make_response(snacks, 200)
    
    def post(self):
        form_json = request.get_json()

        new_snack = Snack(
            name=form_json['name'],
            category_id=form_json['category_id'],
            price=form_json['price'],
        )

        db.session.add(new_snack)
        db.session.commit()

        response_dict = new_snack.to_dict()
        response = make_response(response_dict, 201)

        return response
    
class Snacks_by_id(Resource):
    def get(self, id):
        snack = Snack.query.filter_by(id=id).first()
        if Snack is None:
            return make_response({'error': 'snack not found'}, 404)
        return make_response(snack.to_dict(), 200)
    
    def delete(self, id):
        snack = Snack.query.filter_by(id=id).first()
        if not snack:
            return make_response({'error': 'snack not found'}, 404)
        db.session.delete(snack)
        db.session.commit()
        return make_response({'message': 'snack deleted'}, 204)
    
    def patch(self,id):
        snack=db.session.get(Snack, id)
        if not snack:
            return make_response({'error': 'snack not found'}, 404)
        form_json = request.get_json()
        for key, value in form_json.items():
            setattr(snack, key, value)
        db.session.add(snack)
        db.session.commit()
        return make_response(snack.to_dict(), 202)

########################################################################################################################
#Cream##################################################################################################################
   
class Creams(Resource):
    def get(self):
        creams = [cream.to_dict() for cream in Cream.query.all()]
        return make_response(creams, 200)
    
    def post(self):
        form_json = request.get_json()

        new_cream = Cream(
            name=form_json['name'],
        )

        db.session.add(new_cream)
        db.session.commit()

        response_dict = new_cream.to_dict()
        response = make_response(response_dict, 201)

        return response
    
class Creams_by_id(Resource):
    def get(self, id):
        cream = Cream.query.filter_by(id=id).first()
        if Cream is None:
            return make_response({'error': 'cream not found'}, 404)
        return make_response(cream.to_dict(), 200)
    
    def delete(self, id):
        cream = Cream.query.filter_by(id=id).first()
        if not cream:
            return make_response({'error': 'cream not found'}, 404)
        db.session.delete(cream)
        db.session.commit()
        return make_response({'message': 'cream deleted'}, 204)
    
    def patch(self,id):
        cream=db.session.get(Cream, id)
        if not cream:
            return make_response({'error': 'cream not found'}, 404)
        form_json = request.get_json()
        for key, value in form_json.items():
            setattr(cream, key, value)
        db.session.add(cream)
        db.session.commit()
        return make_response(cream.to_dict(), 202)

########################################################################################################################
#Combo flavors##########################################################################################################
   
class AddOns(Resource):
    def get(self):
        add_ons = [add_on.to_dict() for add_on in AddOn.query.all()]
        return make_response(add_ons, 200)
    
    def post(self):
        form_json = request.get_json()

        new_add_on = AddOn(
            name=form_json['name'],
        )

        db.session.add(new_add_on)
        db.session.commit()

        response_dict = new_add_on.to_dict()
        response = make_response(response_dict, 201)

        return response
    
class AddOns_by_id(Resource):
    def get(self, id):
        add_on = AddOn.query.filter_by(id=id).first()
        if AddOn is None:
            return make_response({'error': 'add_on not found'}, 404)
        return make_response(add_on.to_dict(), 200)
    
    def delete(self, id):
        add_on = AddOn.query.filter_by(id=id).first()
        if not add_on:
            return make_response({'error': 'add_on not found'}, 404)
        db.session.delete(add_on)
        db.session.commit()
        return make_response({'message': 'add_on deleted'}, 204)
    
    def patch(self,id):
        add_on=db.session.get(AddOn, id)
        if not add_on:
            return make_response({'error': 'add_on not found'}, 404)
        form_json = request.get_json()
        for key, value in form_json.items():
            setattr(add_on, key, value)
        db.session.add(add_on)
        db.session.commit()
        return make_response(add_on.to_dict(), 202) 
    
########################################################################################################################
#Flavor#################################################################################################################
   
class Flavors(Resource):
    def get(self):
        flavors = [flavor.to_dict() for flavor in Flavor.query.all()]
        return make_response(flavors, 200)
    
    def post(self):
        form_json = request.get_json()

        new_flavor = Flavor(
            name=form_json['name'],
        )

        db.session.add(new_flavor)
        db.session.commit()

        response_dict = new_flavor.to_dict()
        response = make_response(response_dict, 201)

        return response
    
class Flavors_by_id(Resource):
    def get(self, id):
        flavor = Flavor.query.filter_by(id=id).first()
        if Flavor is None:
            return make_response({'error': 'flavor not found'}, 404)
        return make_response(flavor.to_dict(), 200)
    
    def delete(self, id):
        flavor = Flavor.query.filter_by(id=id).first()
        if not flavor:
            return make_response({'error': 'flavor not found'}, 404)
        db.session.delete(flavor)
        db.session.commit()
        return make_response({'message': 'flavor deleted'}, 204)
    
    def patch(self,id):
        flavor=db.session.get(Flavor, id)
        if not flavor:
            return make_response({'error': 'flavor not found'}, 404)
        form_json = request.get_json()
        for key, value in form_json.items():
            setattr(flavor, key, value)
        db.session.add(flavor)
        db.session.commit()
        return make_response(flavor.to_dict(), 202) 
    
########################################################################################################################
#Combo flavors##########################################################################################################
   
class Categorys(Resource):  
    def post(self):
        try:
            form_json = request.get_json()
            new_category = Category(
                name=form_json['name'],
            )
            db.session.add(new_category)
            db.session.commit()

            response_dict = new_category.to_dict()
            response = make_response(response_dict, 201)
            return response
        except Exception as e:
            return make_response({'error': str(e)}, 400)
    
class Categorys_by_id(Resource):
    def get(self, id):
        category = Category.query.filter_by(id=id).first()
        if category is None:
            return make_response({'error': 'category not found'}, 404)
        return make_response(category.to_dict(), 200)
    
    def delete(self, id):
        category = Category.query.filter_by(id=id).first()
        if not category:
            return make_response({'error': 'category not found'}, 404)
        db.session.delete(category)
        db.session.commit()
        return make_response({'message': 'category deleted'}, 204)
    
    def patch(self, id):
        category = db.session.get(Category, id)
        if not category:
            return make_response({'error': 'category not found'}, 404)
        form_json = request.get_json()
        for key, value in form_json.items():
            setattr(category, key, value)
        db.session.add(category)
        db.session.commit()
        return make_response(category.to_dict(), 202)

api.add_resource(Users, "/users", "/signup")
api.add_resource(ShavedIces, "/shaved_ices")
api.add_resource(ShavedIces_by_id, '/shaved_ices/<int:id>')
api.add_resource(ComboFlavors, "/combo_flavors")
api.add_resource(ComboFlavors_by_id, '/combo_flavors/<int:id>')
api.add_resource(Hotdogs, "/hotdogs")
api.add_resource(Hotdogs_by_id, '/hotdogs/<int:id>')
api.add_resource(Toppings, "/toppings")
api.add_resource(Toppings_by_id, '/toppings/<int:id>')
api.add_resource(Condiments, "/condiments")
api.add_resource(Condiments_by_id, '/condiments/<int:id>')
api.add_resource(IceSizes, "/ice_sizes")
api.add_resource(IceSizes_by_id, '/ice_sizes/<int:id>')
api.add_resource(Drinks, "/drinks")
api.add_resource(Drinks_by_id, '/drinks/<int:id>')
api.add_resource(Snacks, "/snacks")
api.add_resource(Snacks_by_id, '/snacks/<int:id>')
api.add_resource(Creams, "/creams")
api.add_resource(Creams_by_id, '/creams/<int:id>')
api.add_resource(AddOns, "/add_ons")
api.add_resource(AddOns_by_id, '/add_ons/<int:id>')
api.add_resource(Flavors, "/flavors")
api.add_resource(Flavors_by_id, '/flavors/<int:id>')
api.add_resource(Categorys, "/categorys")
api.add_resource(Categorys_by_id, '/categorys/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
