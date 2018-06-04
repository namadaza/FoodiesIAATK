# FoodiesIAATK

## Features to Implement
* Autocomplete on input form
* Change return values of code.gs to return meaningful data
    *  When a user has already checked in today, show time/date which shows when that was done in a pop up message.
    *  When a user hasn't checked in today but signed up, show meaningful User data eg. Number of members in Family.
    
## Bug Fixes / Improvements
* Fix bugs with reporting Already checked in error
* Fix styling to make site appear cleaner

### Understanding This Project
Login to dedicated foodies Google account.

Code is ran on a project hosted on http://www.script.google.com

Code is put into .html files as workaround for Google App Script limitations.

GAS only runs HTML, thus stylesheets/javascript code wrapped with HTML tags.

Application is hosted on Google App Script, providing many benefits:
* Authentication is enforced via Google sign in
    * IAATK will be provided dedicated Google account to store checkin/signin sheets
* Google App Script will host website for free

### General Resources
* Link to original Post
    * https://productforums.google.com/forum/#!topic/docs/UyLQ-09m6E4
    * https://drive.google.com/drive/folders/0Bztea6vSatozfmU3em9wSU9wTDRTQV9LUXBCNmpyZWhOcjhNWlUyOHc0WjBVdzF6ZWlmU2s
* Link to FOODIES test folder
    * https://drive.google.com/drive/folders/1FlaXnxuyIql7MpYt0swt6CMgxZWSf388?usp=sharing
* Link to updated Features list
    * https://docs.google.com/document/d/1y1GXUGGyYZ-I2o_VelawqkqNbzAb6PVWqj67QSd7ZMc/edit?usp=sharing

### Some Technical Notes
Refer to features list for up-to-date features list.

* Pre-filled URL pointing to checkin app
* https://docs.google.com/forms/d/e/1FAIpQLSddXGl58TEoMi4sGEaDC5R4F7tPcDUuIlf2-Gt03yJVAkR2nA/viewform?usp=pp_url&entry.37100989=*%7CFNAME%7C*&entry.1071438744=*%7CLNAME%7C*&entry.1355554313=*%7CPHONE%7C*
* Replace the following:
    * *%7CFNAME%7C* with First+Name
    * *%7CLNAME%7C* with Last+Name
    * *%7CPHONE%7C* with PhoneNumber

* Pre-filled URL pointing to checkin app
* https://docs.google.com/forms/d/e/1FAIpQLSdj0OV0Axz4wEQIwjOGVZhyqA_NTr_IChGPIcZd4er0rDWAAg/viewform?usp=pp_url&entry.339946888=*%7CFNAME%7C*&entry.259180344=*%7CLNAME%7C*&entry.1768999351=*%7CPHONE%7C*
* Replace the following:
    * *%7CFNAME%7C* with First+Name
    * *%7CLNAME%7C* with Last+Name
    * *%7CPHONE%7C* with PhoneNumber

### Future Plans
* Deploy Google App Script as API executable
* Create full-stack application to host this project
* Access Google App Script via secure REST API request
