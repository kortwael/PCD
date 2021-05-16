import json
import jwt

from flask import request, jsonify,Flask
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import cross_origin
from flask_mongoengine import MongoEngine
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['MONGODB_HOST']="mongodb+srv://pcd:pcd123456789@cluster0.5lsgq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
db = MongoEngine()
db.init_app(app)



class Patient(db.Document):
    name = db.StringField()
    last_name = db.StringField()
    room = db.IntField()
    dr = db.StringField()
    age = db.IntField()
    num = db.IntField()
    img = db.StringField()

    def to_json(self):
        return jsonify({"name": self.name,
                "last_name": self.last_name,
                'room':self.room,
                'dr':self.dr,
                'age':self.age,
                'img':self.img,
                'num':self.num}
               )



class Doctors(db.Document):
    email=db.EmailField()
    pwd=db.StringField()
    name=db.StringField()
    lastname=db.StringField()
    num=db.IntField()
    spec=db.StringField()
    def to_json(self):
        return {"pwd": self.pwd,
                "email": self.email,
                "name":self.name,
                "lastname":self.lastname,
                "num":self.num,
                "spec": self.spec
                }

class Anomaly(db.Document):
    patient=db.IntField()
    show=db.IntField()
    instant=db.StringField()
    def to_json(self):
        return jsonify ({'patient': self.patient,
                         'instant': self.instant,
                         'show': self.show,
                         })
    












@app.route('/')
def index():
    return 'connected'

@app.route('/get_anomaly', methods=['GET'])
def get_anomaly():
        l = []
        for dr in Anomaly.objects():
            d = dict()
            if Patient.objects(num=dr.patient).first():
                p = Patient.objects(num=dr.patient).first()
                d['patient']=p.num
                d['name']=p.name
                d['last_name']=p.last_name
                d['room']=p.room
            d['instance'] = dr.instant
            d['show'] = dr.show
            if(d['show']) :
                l.append(d)
        return (jsonify({'data': l}), 200)

@app.route('/add_anomaly', methods=['POST'])
def add_anomaly():
    compte = json.loads(request.data)
    anomaly = Anomaly(patient=compte['patient'], instant=compte['instant'],show=compte['show'])
    anomaly.save()
    '''notification'''
    return 'ok'

@app.route('/update_anomaly/<e>',methods=['PUT'])
def update_anomaly(e):
    data= json.loads(request.data)
    p=Anomaly.objects(patient=e).first().update(patient=data['patient'],instant=data['instance'], show=data['show'])
    return "updated"

@app.route('/add_doctor', methods=['POST'])
def add_doctor():
    compte = json.loads(request.data)
    doctor = Doctors(email=compte['email'], pwd=generate_password_hash(compte['pwd']),name=compte['name'],lastname=compte['lastname'],num=compte['num'],spec=compte['spec'])
    doctor.save()
    return 'ok'


@app.route('/delete_doctor/<e>', methods=['DELETE'])
def delete_doctor(e):

    if Doctors.objects(num=e).first() :
        aux = Doctors.objects(num=e).first()
        aux.delete()
        return " deleted"
    else:
        return "error"








@app.route('/get_doctor', methods=['POST'])
def get_doctor():
    compte = json.loads(request.data)
    if Doctors.objects(email=compte['email']).first():
        p=Doctors.objects(email=compte['email']).first()
        if check_password_hash(p['pwd'],compte['pwd']):
            token = jwt.encode(p.to_json(), "secret", algorithm="HS256")
            return jsonify(token)
        else :
            return jsonify({"msg": "wrong pwd"})
    else :
        return jsonify({"msg": "wrong email"})

@app.route('/get_docs', methods=['GET'])
def get_docs():

        l = []
        for dr in Doctors.objects():
            d = dict()
            d['num'] = dr.num
            d['name'] = dr.name
            d['lastname'] = dr.lastname
            d['spec'] =dr.spec
            l.append(d)
        return (jsonify({'data': l}), 200)


@app.route('/update_doctor/<e>',methods=['PUT'])
def update_doctor(e):
    data = json.loads(request.data)
    p = Doctors.objects(num=e).first().update(name=data['name'],lastname=data['lastname'], num=data['num'], spec=data['spec'])

    return jsonify("updated")


@app.route('/add_patient',methods=['POST'])
@cross_origin()

def add_patient():

    data = json.loads(request.data)
    patient = Patient(name=data['name'],last_name=data['last_name'], room=data['room'], dr=data['dr'], age=data['age'], num=data['num'],img=data['img'])
    patient.save()
    response=patient.to_json()
    response.headers.add("Access-Control-Allow-Origin", "*")
    return (response)


@app.route('/get_patient/<id>',methods=['GET'])
def get_patient(id):

    if Patient.objects(num=id).first():
        return Patient.objects(num=id).first().to_json()
    else:
        return "Patient does not exists please check the ID"


@app.route('/delete_patient/<id>',methods=['DELETE'])
def delete_patient(id):

    if Patient.objects(num=id).first():
        p=Patient.objects(num=id).first()
        p.delete()
        return (p.to_json())
    else :
        return "Error"


@app.route('/get_patients',methods=['GET'])
def get_patients():

    l=[]
    for patient in Patient.objects():
        d = dict()
        d['id']=patient.num
        d['name']=patient.name
        d['last_name'] = patient.last_name
        d['dr'] = patient.dr
        d['room'] = patient.room
        d['age'] = patient.age
        l.append(d)
    return (jsonify({'data':l}),200)

@app.route('/update_patient/<e>',methods=['PUT'])
def update_patient(e):
    data= json.loads(request.data)
    p=Patient.objects(num=e).first().update(name=data['name'],last_name=data['last_name'], room=data['room'], dr=data['dr'], age=data['age'], num=data['num'])
    p.save()
    return "updated"




if __name__ == "__main__":
    app.run(debug=True)