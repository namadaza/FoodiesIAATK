# FoodiesIAATK

### General Resources
* Link to original Post
    * https://productforums.google.com/forum/#!topic/docs/UyLQ-09m6E4
* Link to folder with relevant code:
    * https://drive.google.com/drive/folders/0Bztea6vSatozfmU3em9wSU9wTDRTQV9LUXBCNmpyZWhOcjhNWlUyOHc0WjBVdzF6ZWlmU2s
* Link to FOODIES test folder
    * https://drive.google.com/drive/folders/1FlaXnxuyIql7MpYt0swt6CMgxZWSf388?usp=sharing
* Link to updated Features list
    * https://docs.google.com/document/d/1y1GXUGGyYZ-I2o_VelawqkqNbzAb6PVWqj67QSd7ZMc/edit?usp=sharing

### Flow of App
* Take user First Name, Last Name, and Phone #
    * Perform POST to Google App Script to check Sign Up Sheet
        * If user already exists:
            * Check check in sheet
                * If exists, return "You've Already Checked In"
                * Else, continue
            * Point to check in form
            * Redirect to form with pre-fill URL
            * https://docs.google.com/forms/d/e/1FAIpQLSddXGl58TEoMi4sGEaDC5R4F7tPcDUuIlf2-Gt03yJVAkR2nA/viewform?usp=pp_url&entry.37100989=*%7CFNAME%7C*&entry.1071438744=*%7CLNAME%7C*&entry.1355554313=*%7CPHONE%7C*
            * Replace the following:
                * *%7CFNAME%7C* with First+Name
                * *%7CLNAME%7C* with Last+Name
                * *%7CPHONE%7C* with PhoneNumber
        * If user does not exist:
            * Point to sign up form
            * Redirect to form with pre-fill URL
            * https://docs.google.com/forms/d/e/1FAIpQLSdj0OV0Axz4wEQIwjOGVZhyqA_NTr_IChGPIcZd4er0rDWAAg/viewform?usp=pp_url&entry.339946888=*%7CFNAME%7C*&entry.259180344=*%7CLNAME%7C*&entry.1768999351=*%7CPHONE%7C*
            * Replace the following:
                * *%7CFNAME%7C* with First+Name
                * *%7CLNAME%7C* with Last+Name
                * *%7CPHONE%7C* with PhoneNumber
