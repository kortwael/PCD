import json
import jwt
from models import app, Doctors , Patient
from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash


@app.route('/')
def index():
    return 'connected'


@app.route('/add', methods=['POST'])
def add_doctor():
    compte = json.loads(request.data)
    doctor = Doctors(email=compte['email'], pwd=generate_password_hash(compte['pwd']))
    doctor.save()
    return jsonify(doctor.tojson())


@app.route('/delete', methods=['DELETE'])
def delete_doctor():
    compte = json.loads(request.data)
    if Doctors.objects(email=compte['email']).first() :
        aux = Doctors.objects(email=compte['email']).first()
        aux.delete()
        return " deleted"
    else:
        return "error"


@app.route('/get', methods=['POST'])
def get_doctor():
    compte = json.loads(request.data)
    if Doctors.objects(email=compte['email']).first():
        p=Doctors.objects(email=compte['email']).first()
        if check_password_hash(p['pwd'],compte['pwd']):
            token = jwt.encode(p.tojson(), "secret", algorithm="HS256")
            return jsonify(token)
        else :
            return "wrong pwd"
    else :
        return "wrong email"


@app.route('/add_patient',methods=['POST'])
def add_patient():

    data = json.loads(request.data)
    patient = Patient(name=data['name'],last_name=data['last_name'], room=data['room'], dr=data['dr'], age=data['age'], num=data['num'])
    patient.save()
    return (patient.to_json())


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


if __name__ == "__main__":
    app.run(debug=True)