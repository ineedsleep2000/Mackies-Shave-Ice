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

        users = []

        u1 = User(name="Joel", email="fakeemail@email.com", password_hash="Admin01", is_admin=True)
        users.append(u1)
        u2 = User(name="Brian", email="turtle40965@gmail.com", password_hash="Admin02", is_admin=True)
        users.append(u2)
        u3 = User(name="brian", email="brian@gmail.com", password_hash="brian", is_admin=False)
        users.append(u3)

        db.session.add_all(users)

        categories = []

        c1 = Category(name="Tropical Snow Flavors")
        categories.append(c1)
        c2 = Category(name="Combination Flavors")
        categories.append(c2)
        c3 = Category(name="Hot Eats and Cool Treats")
        categories.append(c3)

        db.session.add_all(categories)
        db.session.commit()

        ice_sizes = []

        i_s1 = IceSize(size="Small", price=1.00)
        ice_sizes.append(i_s1)
        i_s2 = IceSize(size="Medium", price=2.00)
        ice_sizes.append(i_s2)
        i_s3 = IceSize(size="Large", price=3.00)
        ice_sizes.append(i_s3)

        db.session.add_all(ice_sizes)
        db.session.commit()

       
        flavors = []

        f1 = Flavor(name="Cherry")
        flavors.append(f1)
        f2 = Flavor(name="Strawberry")
        flavors.append(f2)
        f3 = Flavor(name="Banana")
        flavors.append(f3)
        f4 = Flavor(name="Green Apple")
        flavors.append(f4)

        db.session.add_all(flavors)
        db.session.commit()

        add_ons = []

        ao1 = AddOn(name="Vanilla Wafers")
        add_ons.append(ao1)
        ao2 = AddOn(name="Oreo Cookies")
        add_ons.append(ao2)
        ao3 = AddOn(name="Shark Gummies")
        add_ons.append(ao3)

        db.session.add_all(add_ons)
        db.session.commit()

        creams = []

        cr1 = Cream(name="Original")
        creams.append(cr1)
        cr2 = Cream(name="Chocolate")
        creams.append(cr2)
        cr3 = Cream(name="Caramel")
        creams.append(cr3)

        db.session.add_all(creams)
        db.session.commit()

        condiments = []

        co1 = Condiment(name="Mustard")
        condiments.append(co1)
        co2 = Condiment(name="Ketchup")
        condiments.append(co2)
        co3 = Condiment(name="Mayonnaise")
        condiments.append(co3)

        db.session.add_all(condiments)
        db.session.commit()

        hotdogs = []

        hd1 = Hotdog(name="Hotdog", category_id=c3.id, with_chili=False)
        hotdogs.append(hd1)
        hd2 = Hotdog(name="Hotdog with Chili", category_id=c3.id, with_chili=True)
        hotdogs.append(hd2)

        db.session.add_all(hotdogs)
        db.session.commit()

        toppings = []

        t1 = Topping(hotdog_id=hd1.id, condiment_id=co1.id)
        toppings.append(t1)
        t2 = Topping(hotdog_id=hd2.id, condiment_id=co2.id)
        toppings.append(t2)
        db.session.add_all(toppings)
        db.session.commit()

        drinks = []

        d1 = Drink(name="Sprite(can)", price=1.00, category_id=c3.id)
        drinks.append(d1)
        d2 = Drink(name="Coca-Cola(can)", price=1.00, category_id=c3.id)
        drinks.append(d2)
        d3 = Drink(name="Mountain Dew(can)", price=1.00, category_id=c3.id)
        drinks.append(d3)

        db.session.add_all(drinks)
        db.session.commit()

        snacks = []

        sna1 = Snack(name="Doritos", price=1.00, category_id=c3.id)
        snacks.append(sna1)
        sna2 = Snack(name="Lays Original", price=1.00, category_id=c3.id)
        snacks.append(sna2)
        sna3 = Snack(name="Cheetos", price=1.00, category_id=c3.id)
        snacks.append(sna3)
        db.session.add_all(snacks)

        shaved_ices = []

        si1 = ShavedIce(name="Cherry", image="Cherry_image", ice_size_id=i_s1.id, category_id=c1.id)
        shaved_ices.append(si1)
        si2 = ShavedIce(name="Strawberry", image="Strawberry_image", ice_size_id=i_s1.id, category_id=c1.id)
        shaved_ices.append(si2)
        si3 = ShavedIce(name="Lemon", image="Lemon_image", ice_size_id=i_s1.id, category_id=c1.id)
        shaved_ices.append(si3)
        si4 = ShavedIce(name="Green Apple", image="GreenApple_image", ice_size_id=i_s1.id, category_id=c1.id)
        shaved_ices.append(si4)

        db.session.add_all(shaved_ices)
        db.session.commit()

