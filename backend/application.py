# from operator import truediv
from flask import Flask
# import mysql.connector
import json
# from flask_cors import CORS
import os
import iris
# import numpy as np

application = app = Flask(__name__)

# CORS(application)

#Connection code
hostname="k8s-c1bc749b-a7700a03-9795ff8c89-412048d456f1f671.elb.us-east-1.amazonaws.com"
port=1972
namespace="USER"
connection_string=hostname+':'+str(port)+'/'+namespace
username="SQLAdmin"
password="Database123!"
connection = iris.connect(connection_string, username=username, password=password)
cursor = connection.cursor()


######################
# Create Patient Table #
######################
# CREATE TABLE Patient (profile_url varchar(500), name varchar(255), patient_id varchar(100), practitioner_id varchar(100), gender boolean NOT NULL, weight varchar(10), age varchar(10), weight varchar(10), PRIMARY KEY (patient_id));


@app.route('/api/db/fetch', methods=["GET"])
def test_intersystems():
  
  reactions = [0] * 50
  reactions[6] = 1
  drugs = [0] * 50
  drugs[4] = 1
  patient_input = [32, 1, 100] + reactions + drugs
  cmd1 = f"INSERT INTO predict50reactions50drugs1 VALUES{tuple(patient_input)}"
  cmd2 = "SELECT PREDICT(model50reactions50drugs1) FROM validation50reactions50drugs1"
  cursor.execute(cmd1)
  cursor.execute(cmd2) (edited) 

  x = cursor.fetchall()

  return json.dumps(x)


  # try:
  #   pass  # do something with DB-API calls
  # except Exception as ex:
  #   print(ex)
  # finally:
  #   if cursor:
  #     cursor.close()
  #   if connection:
  #     connection.close()

if __name__ == "__main__":
    application.run(debug=True)