from flask import Flask, request, render_template
import requests

app = Flask(__name__)

def getHTMLDocument(url):
    response = requests.get(url)
    return response.text

@app.route('/')
def view_form():
    return render_template('main.html')

@app.route('/parameters', methods=['GET','POST'])
def parameters():
    if request.method == "POST":
        for k, v in request.form.items():
            print(k, v)
        return render_template('main.html')
    else:
        return render_template('main.html')

if __name__ == '__main__':
    app.run(debug=True)
