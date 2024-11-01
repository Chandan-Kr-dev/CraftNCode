import joblib


from flask import Flask,request,jsonify

model=joblib.load('LangDetect.joblib')

app=Flask(__name__)

@app.route("/predict",methods=["POST"])

def predictLang():
    data=request.json
    input_data=data["input"]


    prediction=model.predict([input_data])

    return jsonify({"prediction":prediction.tolist()})

if __name__=="__main__":
    app.run(host="0.0.0.0",port=5000)