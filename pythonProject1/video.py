import cv2
from imutils.video import WebcamVideoStream
import numpy as np
import tensorflow as tf
from keras_vggface.vggface import VGGFace
import pickle
from scipy.spatial import distance
from keras_vggface import utils



def get_faces(fr):
    cascade = cv2.CascadeClassifier('haarcascade_frontalface_alt2.xml')
    faces = cascade.detectMultiScale(cv2.cvtColor(fr, cv2.COLOR_BGR2GRAY), 1.1, 7)
    return faces
class Camera(object):
    def __init__(self):
        self.video = WebcamVideoStream(src=0).start()
        with open('faces.pkl', 'rb') as file:
            self.faces = pickle.load(file)
        self.model=tf.keras.models.load_model('Xception.h5')
        self.vgg =  VGGFace(model='resnet50',include_top=False,input_shape=(224,224,3), pooling='max')
        print(" * Model loaded!")

    def __del__(self):
        self.video.stop()

    def process(self,x):
        x = tf.keras.preprocessing.image.img_to_array(x)
        x = np.expand_dims(x, axis=0)
        x = utils.preprocess_input(x, version=2)  # or version=2
        x = self.vgg(x)
        return x

    def predict(self,x):
        x = tf.keras.preprocessing.image.img_to_array(x)
        x = np.expand_dims(x, axis=0)
        p = self.model.predict(x)

        return np.argmax(p[0])


    def getperson(self, im):
        im=self.process(im)
        dist = []
        for i in self.faces.values():
            dist.append(distance.cosine(im, i))
        m = min(dist)
        if m < 0.4:
            i = dist.index(m)
            person = list(self.faces.keys())[i]
        else:
            person = 'no match found'
        return person


    def get_frame(self):
        frame = self.video.read()
        data = []
        faces= get_faces(frame)
        for x,y,z,w in faces:
            cv2.rectangle(frame, (x,y), (x+z, w+y), (255, 0, 0), 2)
            img=frame[y:y+z,x:x+w]
            img=cv2.resize(img,(224,224))
            person=self.getperson(img)
            p=self.predict(img)
            print(p)
            cv2.putText(frame, person, (x, y), cv2.FONT_HERSHEY_PLAIN, 1.5, (0, 255, 0), 2)
        ret,jpg = cv2.imencode('.jpg', frame)
        data.append(jpg.tobytes())
        return data
