from flask import Flask, request, render_template,  redirect, url_for,
import model
import jinja2
import os

app = Flask(__name__)
app.jinja_env.undefined = jinja2.StrictUndefined


@app.route("/")
def index():
    """This is the 'cover' page of the ubermelon site"""
    return render_template("index.html")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, port=port)