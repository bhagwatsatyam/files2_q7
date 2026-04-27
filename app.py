from flask import Flask

app = Flask(__name__)
# trigger
@app.route("/")
def home():
    return "DevOps Pipeline Running on Port 3005!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3005)