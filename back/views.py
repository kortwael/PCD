from models import app




@app.route('/')
def index():
    return('connected')
if __name__ == "__main__":
    app.run(debug=True)