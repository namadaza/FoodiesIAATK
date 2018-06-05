//
// This script processes reads Sign Up / Check In spreadsheets
// given user First/Last/Phone# for already existing fields
//

var signup_sheet_id = '1nLPmUePCGv1FiJrvKk7JLV_U48RdRsaP3ONI-iPQbdE';
var checkin_sheet_id = '1NGXusGk0ZTePJqOLRZhX4GxLpP642Dhk7cX9iCbKXjc';

var signupColumns = {
  timeStamp: 0,
  firstName: 1,
  lastName: 2,
  phoneNumber: 3,
  familySize: 4
};


//Not needed unless implementing this .gs as API executable
function doPost(e){
  var cs = ContentService.createTextOutput();
  cs.setMimeType(ContentService.MimeType.JSON);
  cs.setContent(JSON.stringify(getDataSignUp(e.parameter)));
  return cs;
}

function doGet(request) {
  return HtmlService.createTemplateFromFile('page')
      .evaluate().setTitle('IAATK Foodies').addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function getDataCheckIn(parameters) {
  try {
    var sh = SpreadsheetApp.openById(checkin_sheet_id).getSheetByName('Form Responses 1');
    var values = sh.getDataRange().getValues();

    var uni = parameters[0] + parameters[1] + parameters[2];
    Logger.log("Checking check in sheet for query: " + uni);

    var d = new Date();
    var currentDate = d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear();

    for(var i = values.length-1; i >= 0; i--){
      var dt = (values[i][1] || '') + (values[i][2] || 0) + (values[i][3] || '');
      Logger.log("Query against: " + dt);
      if (values[i][0] == "Timestamp") {
        //If row is timestamp, break, no entries
        break;
      }
      Logger.log("Current Date: " + currentDate);
      var valueD = values[i][0];
      var valueDate = valueD.getDay() + "/" + valueD.getMonth() + "/" + valueD.getFullYear();
      Logger.log("Value's Date: " + valueDate);
      if (currentDate != valueDate) {
        //Not current date, stop checking
        break;
      }
      //if(dt == uni) {
      if ((values[i][1] == parameters[0] && values[i][2] == parameters[1]) || values[i][3] == parameters[2]) { //match (firstname lastname) OR number
        Logger.log(dt + " ==== " + uni);
        return 'ALREADY EXIST';
      }
    }
    Logger.log(uni + " not checked in");
    return 'DOESNT EXIST';
  }
  catch(e) {
    return [[e.message], ['U SENT ' + JSON.stringify(parameters)]];
  }
}

function getDataSignUp(parameters){
  try {
    var sh = SpreadsheetApp.openById(signup_sheet_id).getSheetByName('Sheet 1');
    var values = sh.getDataRange().getValues();

    var uni = parameters[0] + parameters[1] + parameters[2];
    Logger.log("Checking sign up sheet for query: " + uni);

    for(var i = 0; i < values.length; i++){
      var dt = (values[i][1] || '') + (values[i][2] || 0) + (values[i][3] || '');
      Logger.log("Query against: " + dt);
      if ((values[i][signupColumns.firstName] == parameters[0] && 
           values[i][signupColumns.lastName] == parameters[1]) || 
           values[i][signupColumns.phoneNumber] == parameters[2]) { 
        //match (firstname lastname) OR number
        Logger.log(dt + " ==== " + uni);
        //return 'ALREADY EXIST';
        //Check if checked in already...
        is_checked_in = getDataCheckIn(parameters);
        Logger.log("getDataCheckIn returned with: " + is_checked_in);
        if (is_checked_in == 'ALREADY EXIST') {
          return '2';
        }
        else if (is_checked_in == 'DOESNT EXIST') {
          return '1 ' + values[i][signupColumns.familySize];
        }
      }
    }
    Logger.log("finished for loop");
    return '0';
  }
  catch(e) {
    return [[e.message], ['U SENT ' + JSON.stringify(parameters)]];
  }
}

function getAutocomplete() {
  try {
    var sh = SpreadsheetApp.openById(signup_sheet_id).getSheetByName('Sheet 1');
    var values = sh.getDataRange().getValues();

    var firstNames = [];
    var lastNames = [];
    var phoneNumbers = [];
    for(var i = 1; i < values.length; i++){
      firstNames.push(values[i][1]);
      lastNames.push(values[i][2]);
      phoneNumbers.push(values[i][3].toString());
    }
    
    toReturn = [firstNames, lastNames, phoneNumbers];
    Logger.log(toReturn);
    return toReturn;
  }
  catch(e) {
    return [[e.message], ['U SENT ' + JSON.stringify(parameters)]];
  }
}

