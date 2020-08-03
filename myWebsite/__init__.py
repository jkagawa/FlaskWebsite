from flask import Flask, render_template
app = Flask(__name__)
app.debug = True

@app.route("/")
def index():
    return render_template('home.html')

@app.route("/art")
def art_page():
    return render_template('art.html')

if __name__ == "__main__":
    app.run()
