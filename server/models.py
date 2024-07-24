from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt

# Models
class User(db.Model, SerializerMixin):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)
    is_admin = db.Column(db.Boolean,default=False)

    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode("utf8"))
        self._password_hash = password_hash.decode("utf8")

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode("utf8"))
    
    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Must have a name')
        return name

    def __repr__(self):
        return f'<id : {self.id}>'
    

class Category(db.Model, SerializerMixin):
    __tablename__ = "categories"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    snacks = db.relationship('Snack', back_populates='category')
    drinks = db.relationship('Drink', back_populates='category')
    hotdogs = db.relationship('Hotdog', back_populates='category')
    shaved_ices = db.relationship('ShavedIce', back_populates='category')
    combo_flavors = db.relationship('ComboFlavor', back_populates='category')

    snack_names = association_proxy('snacks', 'name')
    drink_names = association_proxy('drinks', 'name')
    hotdog_names = association_proxy('hotdogs', 'name')
    shaved_ice_names = association_proxy('shaved_ices', 'name')
    combo_flavor_names = association_proxy('combo_flavors', 'name')

    serialize_rules = ('-snacks.category', '-drinks.category', '-hotdogs.category', '-shaved_ices.category', '-combo_flavors.category')

    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Must have a name')
        return name

    def __repr__(self):
        return f'<id : {self.id}>'


class ShavedIce(db.Model, SerializerMixin):
    __tablename__ = "shaved_ices"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)
    ice_size_id = db.Column(db.Integer, db.ForeignKey('ice_sizes.id'))

    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    category = db.relationship('Category', back_populates='shaved_ices')

    combo_flavors = db.relationship('ComboFlavor', back_populates='shaved_ice')
    ice_size = db.relationship('IceSize', back_populates='shaved_ices')

    combo_flavor_names = association_proxy('combo_flavors', 'name')

    serialize_rules = ('-category.shaved_ices', '-combo_flavors.shaved_ice', '-ice_size.shaved_ices')

    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Must have a name')
        return name


    def __repr__(self):
        return f'<id : {self.id}>'


class Flavor(db.Model, SerializerMixin):
    __tablename__ = "flavors"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    combo_flavors = db.relationship('ComboFlavor', back_populates='flavor')

    combo_flavor_names = association_proxy('combo_flavors', 'name')

    serialize_rules = ('-combo_flavors.flavor',)

    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Must have a name')
        return name

    def __repr__(self):
        return f'<id : {self.id}>'


class AddOn(db.Model, SerializerMixin):
    __tablename__ = "add_ons"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    combo_flavors = db.relationship('ComboFlavor', back_populates='add_on')

    combo_flavor_names = association_proxy('combo_flavors', 'name')

    serialize_rules = ('-combo_flavors.add_on',)

    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Must have a name')
        return name

    def __repr__(self):
        return f'<id : {self.id}>'


class Cream(db.Model, SerializerMixin):
    __tablename__ = "creams"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    combo_flavors = db.relationship('ComboFlavor', back_populates='cream')

    combo_flavor_names = association_proxy('combo_flavors', 'name')

    serialize_rules = ('-combo_flavors.cream',)

    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Must have a name')
        return name

    def __repr__(self):
        return f'<id : {self.id}>'


class ComboFlavor(db.Model, SerializerMixin):
    __tablename__ = "combo_flavors"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    category = db.relationship('Category', back_populates='combo_flavors')

    shaved_ice_id = db.Column(db.Integer, db.ForeignKey('shaved_ices.id'))
    shaved_ice = db.relationship('ShavedIce', back_populates='combo_flavors')

    flavor_id = db.Column(db.Integer, db.ForeignKey('flavors.id'))
    flavor = db.relationship('Flavor', back_populates='combo_flavors')

    add_on_id = db.Column(db.Integer, db.ForeignKey('add_ons.id'))
    add_on = db.relationship('AddOn', back_populates='combo_flavors')

    cream_id = db.Column(db.Integer, db.ForeignKey('creams.id'))
    cream = db.relationship('Cream', back_populates='combo_flavors')

    ice_size_id = db.Column(db.Integer, db.ForeignKey('ice_sizes.id'))
    ice_size = db.relationship('IceSize', back_populates='combo_flavors')

    serialize_rules = ('-category.combo_flavors', '-shaved_ice.combo_flavors', '-flavor.combo_flavors', '-add_on.combo_flavors', '-cream.combo_flavors', '-ice_size.combo_flavors')

    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Must have a name')
        return name

    def __repr__(self):
        return f'<id : {self.id}>'


class Hotdog(db.Model, SerializerMixin):
    __tablename__ = "hotdogs"
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String)
    with_chili = db.Column(db.Boolean)

    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    category = db.relationship('Category', back_populates='hotdogs')

    toppings = db.relationship('Topping', back_populates='hotdog')

    topping_names = association_proxy('toppings', 'name')

    serialize_rules = ('-category.hotdogs', '-toppings.hotdog')

    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Must have a name')
        return name

    def __repr__(self):
        return f'<id : {self.id}>'


class Topping(db.Model, SerializerMixin):
    __tablename__ = "toppings"
    id = db.Column(db.Integer, primary_key=True)

    hotdog_id = db.Column(db.Integer, db.ForeignKey('hotdogs.id'))
    hotdog = db.relationship('Hotdog', back_populates='toppings')

    condiment_id = db.Column(db.Integer, db.ForeignKey('condiments.id'))
    condiment = db.relationship('Condiment', back_populates='toppings')

    serialize_rules = ('-hotdog.toppings', '-condiment.toppings')

    @validates('hotdog_id')
    def validate_hotdog_id(self, key, hotdog_id):
        if not hotdog_id:
            raise ValueError('Must have a hotdog_id')
        return hotdog_id

    def __repr__(self):
        return f'<id : {self.id}>'


class Condiment(db.Model, SerializerMixin):
    __tablename__ = "condiments"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    toppings = db.relationship('Topping', back_populates='condiment')

    serialize_rules = ('-toppings.condiment',)

    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Must have a name')
        return name

    def __repr__(self):
        return f'<id : {self.id}>'


class IceSize(db.Model, SerializerMixin):
    __tablename__ = "ice_sizes"
    id = db.Column(db.Integer, primary_key=True)
    size = db.Column(db.String)
    price = db.Column(db.Float)

    shaved_ices = db.relationship('ShavedIce', back_populates='ice_size')
    combo_flavors = db.relationship('ComboFlavor', back_populates='ice_size')

    serialize_rules = ('-shaved_ices.ice_size', '-combo_flavors.ice_size')

    @validates('size')
    def validate_size(self, key, size):
        if not size:
            raise ValueError('Must have a size')
        return size

    def __repr__(self):
        return f'<id : {self.id}>'


class Drink(db.Model, SerializerMixin):
    __tablename__ = "drinks"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Float)

    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    category = db.relationship('Category', back_populates='drinks')

    serialize_rules = ('-category.drinks',)

    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Must have a name')
        return name

    def __repr__(self):
        return f'<id : {self.id}>'


class Snack(db.Model, SerializerMixin):
    __tablename__ = "snacks"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Float)

    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    category = db.relationship('Category', back_populates='snacks')

    serialize_rules = ('-category.snacks',)

    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Must have a name')
        return name

    def __repr__(self):
        return f'<id : {self.id}>'