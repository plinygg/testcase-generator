from flask import Flask, request
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    url = request.form['url']
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Example: Extract the title of the page
    title = soup.title.string if soup.title else 'No title found'
    
    return f'Title of the page: {title}'

if __name__ == '__main__':
    app.run(debug=True)
