from flask import Flask, render_template
app = Flask(__name__)
app.debug = True

@app.route("/")
def index():
    return render_template('home.html')

@app.route("/projects")
def projects_page():
    return render_template('projects.html')

@app.route("/art")
def art_page():
    return render_template('art.html')

@app.route("/contact")
def contact_page():
    return render_template('contact.html')

if __name__ == "__main__":
    app.run()
