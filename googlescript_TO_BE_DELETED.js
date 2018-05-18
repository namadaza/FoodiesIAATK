/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a Sheets API service object and prints the names and majors of
 * students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function install(){}

function getData(parameters){
  //return ['ok'];parameters.sh
  try{
    Logger.log("hellooooo"); 
    var sh = SpreadsheetApp.openById('1nLPmUePCGv1FiJrvKk7JLV_U48RdRsaP3ONI-iPQbdE').getSheetByName('Sheet 1');
    var values = sh.getDataRange().getValues();
                Logger.log(values); 
    var uni = "Aman" + "Azad" + "8184225252";
                Logger.log(uni); 
    // var uni = (parameters.firstName || '') + (parameters.lastName || '') + (parameters.phoneNumber || '');

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
  }catch(e){
    return [[e.message], ['U SENT ' + JSON.stringify(parameters)]];
  }
}
function doPost(e){
  var cs = ContentService.createTextOutput();
  cs.setMimeType(ContentService.MimeType.JSON);
  cs.setContent(JSON.stringify(getData(e.parameter)));
  return cs;
}