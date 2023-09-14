from flask import Flask, jsonify, request, render_template
import joblib

app = Flask(__name__, static_folder=".", static_url_path="", template_folder=".")

# Load the model
model = joblib.load('finalized_model.sav')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    prediction = model.predict([data['features']])
    return jsonify(prediction=float(prediction[0]))

@app.route('/<path:path>')
def serve_static(path):
    return app.send_static_file(path)

if __name__ == '__main__':
    app.run(debug=True)
