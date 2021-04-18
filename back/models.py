from flask import  Flask,jsonify
from flask_mongoengine import MongoEngine

app=Flask(__name__)
app.config['MONGODB_HOST']="mongodb+srv://pcd:pcd123456789@cluster0.5lsgq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
db=MongoEngine()
db.init_app(app)

class Patient(db.Document):
    name = db.StringField()
    lastname = db.StringField()
    room=db.IntField()
    doctor=db.StringField
    age=db.IntField()
    ID=db.ObjectIdField()
    picture=db.ImageField()
    def to_json(self):
        return jsonify({"name": self.name,
                "last_name": self.lastname,
                'room':self.room,
                'doctor':self.doctor,
                'age':self.age,
                'id':self.id,
                'picture':self.picture})




class Anomaly(db.Document):
    patient=db.
    instant=db.DateTimeField()

class Doctors(db.Document):
    emai=db.EmailField()
    pwd=db.StringField()
