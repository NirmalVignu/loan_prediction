from flask import Flask, render_template, request
import pickle as pkl
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import BaggingClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn import model_selection


app=Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


def feature_engineering(data):
    with open('powertransformer.pkl', 'rb') as f1:
        pt=pkl.load(f1)
        data['income']=pt.transform([[data['income']]])
        data['ccavg']=pt.transform([[data['ccavg']]])

    with open('standardscaler.pkl', 'rb') as f:
        scaler = pkl.load(f)
        values=list(data.values())
        values_int=list(map(float,values))
        return scaler.transform([values_int])

@app.route('/result', methods=['POST', 'GET'])
def result():
    if request.method == 'POST':
        df = request.form.to_dict()
        new_values=feature_engineering(df)
        with open('bagging_model.pkl', 'rb') as f:
            model = pkl.load(f)
            prediction=model.predict(new_values)
            if prediction[0]==1:
                result=True
            else:
                result=False
            return render_template('result.html', data=result,data2=prediction)
        

if __name__ == '__main__':
    app.run(debug=True)