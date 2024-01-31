var sheet = SpreadsheetApp.getActiveSheet();
function calculateDate() {
  var date = new Date(sheet.getRange('B2').getValue());
  var months = 10;
  var result = new Date(date.getFullYear(), date.getMonth() - months, date.getDate());
  sheet.getRange('B3').setValue(result);
}
function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var date = new Date(sheet.getRange('B2').getValue());
  var months = 10;
  var result = new Date(date.getFullYear(), date.getMonth() - months, date.getDate());
  sheet.getRange('B3').setValue(result);
}
// Primera parte

function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var date = new Date(sheet.getRange('B2').getValue());
  
  // Resta 7 días a la fecha en B2 y coloca el resultado en B8
  var sevenDaysBefore = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  sheet.getRange('B8').setValue(sevenDaysBefore);
  
  // Resta 90 días a la fecha en B2 y coloca el resultado en B9
  var ninetyDaysBefore = new Date(date.getTime() - 90 * 24 * 60 * 60 * 1000);
  sheet.getRange('B9').setValue(ninetyDaysBefore);
  
  // Resta 14 días a la fecha en B2 y coloca el resultado en B10
  var fourteenDaysBefore = new Date(date.getTime() - 14 * 24 * 60 * 60 * 1000);
  sheet.getRange('B10').setValue(fourteenDaysBefore);
  
  // Resta 14 días a la fecha en B2 y coloca el resultado en B11
  var fourteenDaysBefore = new Date(date.getTime() - 14 * 24 * 60 * 60 * 1000);
  sheet.getRange('B11').setValue(fourteenDaysBefore);
  
  // Resta 90 días a la fecha en B2 y coloca el resultado en B12
  var ninetyDaysBefore = new Date(date.getTime() - 90 * 24 * 60 * 60 * 1000);
  sheet.getRange('B12').setValue(ninetyDaysBefore);
  
  // Resta 215 días a la fecha en B2 y coloca el resultado en B14
  var twoHundredFiftyDaysBefore = new Date(date.getTime() - 215 * 24 * 60 * 60 * 1000);
  sheet.getRange('B14').setValue(twoHundredFiftyDaysBefore);
}
