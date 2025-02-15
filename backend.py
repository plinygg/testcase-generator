from flask import Flask, request, render_template
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

def getHTMLDocument(url):
    response = requests.get(url)
    return response.text

@app.route('/')
def view_form():
    return render_template('index.html')

@app.route('/welcome', methods=['GET','POST'])
def welcome():
    if request.method == "POST":
        url = request.form['url']
        txt = getHTMLDocument(url)
        return txt
    else:
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
