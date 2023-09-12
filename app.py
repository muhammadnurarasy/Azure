from flask import Flask, jsonify, request
import joblib

app = Flask(__name__)

# Load the model
model = joblib.load('finalized_model.sav')

@app.route('/')
def index():
    return "Welcome to the House Price Predictor!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    prediction = model.predict([data['features']])
    return jsonify(prediction=float(prediction[0]))
