from flask import Flask,jsonify
from flask_mongoengine import MongoEngine

app = Flask(__name__)
app.config['MONGODB_HOST']="mongodb+srv://pcd:pcd123456789@cluster0.5lsgq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
db = MongoEngine()
db.init_app(app)

class Patient(db.Document):
    name = db.StringField()
    last_name = db.StringField()
    room=db.IntField()
    dr=db.StringField()
    age=db.IntField()
    num=db.IntField()

    def to_json(self):
        return jsonify({"name": self.name,
                "last_name": self.last_name,
                'room':self.room,
                'dr':self.dr,
                'age':self.age,
                'num':self.num}
               )




class Doctors(db.Document):
    email=db.EmailField()
    pwd=db.StringField()
    def tojson(self):
        return {"pwd": self.pwd,
                "email": self.email}