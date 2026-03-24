from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = [
    {"email": "cyrus@pdpu.ac.in", "password": "123", "name": "Cyrus", "role": "student"},
    {"email": "admin@pdpu.ac.in", "password": "456", "name": "admin", "role": "faculty"}
]

@app.route('/')
def index():
    
    return "Welcome to index page"

@app.route('/login', methods=['POST'])
def login():
    
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    user = next((u for u in users if u["email"] == email and u["password"] == password), None)

    if user:
        return jsonify({"success": True, "user": user}), 200
    else:
        return jsonify({"success": False, "message": "Invalid Credentials"}), 401

if __name__ == '__main__':
    app.run(port=5000, debug=True)