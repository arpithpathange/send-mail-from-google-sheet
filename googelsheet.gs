function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Send Mail')
      .addItem('Execute', 'menuItem1')
      .addSeparator()
      .addToUi();
}

function menuItem1() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     //.alert('You clicked the first menu item!');
  sendEmails();
  
}

function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var numRows = 8;   // Number of rows to process
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 1, numRows, 6)
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (i in data) {
    var row = data[i];
    var date = row[5].toString();;
    
    if(date <= 2 && date >= 0){
      Logger.log("date :"+date);
          var emailAddress = row[3];  // First column
          var message = "Your task in the subject line is pending from your side. Please update the status accordingly. Please call out if there any delays.";       // Second column
          var subject = "Task nearing the due date :"+row[0];
          MailApp.sendEmail({to:emailAddress,subject:subject, htmlBody:message});  }
          Logger.log("date :"+date);
  }
}


