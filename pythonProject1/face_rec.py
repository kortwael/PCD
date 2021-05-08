from scipy.spatial import distance

from keras_vggface.vggface import VGGFace
import tensorflow as tf
import numpy as np

import pickle

class face_rec:
    def __init__(self):
        self.vgg=VGGFace(model='resnet50', include_top=False, input_shape=(224, 224, 3),
                               pooling='avg')
        with open('faces.pkl', 'rb') as file:
            self.faces = pickle.load(file)
    def process(self,x):
        x = tf.keras.preprocessing.image.img_to_array(x)
        x = np.expand_dims(x, axis=0)
        x = self.vgg(x)
        return x

    def getperson(self, im):
        im=self.process(im)
        dist = []
        for i in self.faces.values():
            dist.append(distance.cosine(im, i))
        m = min(dist)
        if m < 0.45:
            i = dist.index(m)
            person = list(self.faces.keys())[i]
        else:
            person = 'no match found'
        return person


