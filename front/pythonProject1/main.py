import cv2
from flask import Flask , Response , render_template
from video import Camera
cam = cv2.VideoCapture(0)
app = Flask(__name__)

def stream(camera):
    while 1 :
       data = camera.get_frame()
       frame=data[0]
       yield (b'--frame\r\n'b'Content-Type: text/plain\r\n\r\n'+frame+b'\r\n')

@app.route('/video')
def video():
    return Response(stream(Camera()),mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/')
def main():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)