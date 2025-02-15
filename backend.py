from flask import Flask, request, render_template
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/')
def view_form():
    return render_template('index.html')

@app.route('/handle_post', methods=['GET','POST'])
def handle_post():
    if request.method == "POST":
        url = request.form['url']
        response = requests.get(url)
        return '<h1>Welcome!!!</h1>'
    else:
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
