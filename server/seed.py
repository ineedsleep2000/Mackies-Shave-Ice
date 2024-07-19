#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db , User, Category, ShavedIce, Flavor, AddOn, Cream, ComboFlavor, Hotdog, Topping, Condiment, IceSize, Drink, Snack

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        print("Dropping tables...")
        User.query.delete()
        Category.query.delete()
        ShavedIce.query.delete()
        Flavor.query.delete()
        AddOn.query.delete()
        Cream.query.delete()
        ComboFlavor.query.delete()
        Hotdog.query.delete()
        Topping.query.delete()
        Condiment.query.delete()
        IceSize.query.delete()
        Drink.query.delete()
        Snack.query.delete()
        print("Dropped all the tables!")
        print("Populating all the tables...")
print("finish")

