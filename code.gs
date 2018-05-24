//
// This script processes reads Sign Up / Check In spreadsheets
// given user First/Last/Phone# for already existing fields
//

var signup_sheet_id = '1nLPmUePCGv1FiJrvKk7JLV_U48RdRsaP3ONI-iPQbdE';
var checkin_sheet_id = '1NGXusGk0ZTePJqOLRZhX4GxLpP642Dhk7cX9iCbKXjc';

//Not needed unless implementing this .gs as API executable
function doPost(e){
  var cs = ContentService.createTextOutput();
  cs.setMimeType(ContentService.MimeType.JSON);
  cs.setContent(JSON.stringify(getDataSignUp(e.parameter)));
  return cs;
}

function doGet(request) {
  return HtmlService.createTemplateFromFile('page')
      .evaluate().setTitle('IAATK Foodies');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function getDataCheckIn(parameters) {
  try {
    var sh = SpreadsheetApp.openById(checkin_sheet_id).getSheetByName('Form Responses 1');
    var values = sh.getDataRange().getValues();
    Logger.log(values);

    var uni = parameters[0] + parameters[1] + parameters[2];
    Logger.log(uni);

    for(var i = 0; i < values.length; i++){
      Logger.log("in for loop");
      var dt = (values[i][1] || '') + (values[i][2] || 0) + (values[i][3] || '');
      Logger.log(dt);
      if(dt == uni) {
        Logger.log(dt + " ==== " + uni);
        return 'ALREADY EXIST';
      }
    }
    Logger.log("finished for loop");
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
    Logger.log(values);

    var uni = parameters[0] + parameters[1] + parameters[2];
    Logger.log(uni);

    for(var i = 0; i < values.length; i++){
      Logger.log("in for loop");
      var dt = (values[i][1] || '') + (values[i][2] || 0) + (values[i][3] || '');
      Logger.log(dt);
      if(dt == uni) {
        Logger.log(dt + " ==== " + uni);
        //return 'ALREADY EXIST';
        //Check if checked in already...
        is_checked_in = getDataCheckIn(parameters);
        if (is_check_in === 'ALREADY EXIST') {
          return 'EXISTS SIGNUP CHECKIN';
        }
        else if (is_check_in === 'DOESNT EXIST') {
          return 'EXISTS SIGNUP';
        }
      }
    }
    Logger.log("finished for loop");
    return 'DOESNT EXIST';
  }
  catch(e) {
    return [[e.message], ['U SENT ' + JSON.stringify(parameters)]];
  }
}
