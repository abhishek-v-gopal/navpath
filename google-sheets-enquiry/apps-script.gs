// NavPath Academy — enquiry popup collector for Google Sheets
//
// DEPLOY (one time, ~2 minutes):
//   1. Go to https://script.google.com and create a NEW project.
//   2. Paste this whole file over the default "Code.gs" content and save.
//   3. Deploy > New deployment > Web app.
//      - Execute as: Me
//      - Who has access: Anyone
//   4. Click Deploy, authorize, copy the "Web app URL".
//   5. Put that URL in the repo as .env.local:
//        NEXT_PUBLIC_ENQUIRY_SHEET_URL=https://script.google.com/macros/s/...
//   6. Rebuild the site so Next.js picks up the new env value.
//
// UPGRADE (if you already deployed an older version that errored):
//   1. Replace Code.gs with this file and save.
//   2. Deploy > Manage deployments > Edit (pencil icon) > Save, then
//      "New version" > Deploy.  This publishes the updated code at the
//      SAME web app URL — no .env.local change needed.
//
// The first successful submission auto-creates a spreadsheet named
// "NavPath Academy Enquiries" in the Google Drive of the account that
// owns this script. Every later submission appends a new row to it.
//
// OPTIONAL: to use YOUR OWN existing spreadsheet instead of the
// auto-created one, paste its ID below (the long string in the sheet URL
// between /d/ and /edit). Otherwise leave it empty.

var EXISTING_SPREADSHEET_ID = "1-ZjBTBPbHSg7r5534rab5s-ngcVuZOuywA38PfHcw1g";

var SHEET_NAME = "Enquiries";
var PROP_KEY = "NAVPATH_SHEET_ID";
var PROP_ROW_COUNT = "NAVPATH_ROW_COUNT";

var HEADERS = [
  "Submitted At",
  "Name",
  "Phone",
  "Email",
  "+2 Passed Year",
  "Age",
  "Marks Above 60%",
  "Preferred Course",
  "State",
  "Message",
  "Enquiry Type",
  "Source Page",
];

function getSpreadsheet() {
  if (EXISTING_SPREADSHEET_ID) {
    return SpreadsheetApp.openById(EXISTING_SPREADSHEET_ID);
  }
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty(PROP_KEY);
  if (id) {
    return SpreadsheetApp.openById(id);
  }
  var ss = SpreadsheetApp.create("NavPath Academy Enquiries");
  props.setProperty(PROP_KEY, ss.getId());
  return ss;
}

function ensureSheet(ss) {
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sheet;
}

function doPost(e) {
  var ss = getSpreadsheet();
  var sheet = ensureSheet(ss);
  var p = e.parameter || {};
  sheet.appendRow([
    new Date(),
    p.name || "",
    p.phone || "",
    p.email || "",
    p.passed_year || "",
    p.age || "",
    p.marks_above_60 || "",
    p.preferred_course || "",
    p.state || "",
    p.message || "",
    p.enquiry_type || "",
    p.source_page || "",
  ]);
  return ContentService.createTextOutput(
    "OK\nspreadsheet=" + ss.getId() + "\nurl=" + ss.getUrl() + "\nsheet=" +
      sheet.getSheetName() + "\nrow=" + sheet.getLastRow() + "\ntime=" + new Date()
  ).setMimeType(ContentService.MimeType.TEXT);
}

function doGet() {
  return ContentService.createTextOutput(
    "Enquiry collector is live. POST form-encoded fields to this URL to log an enquiry."
  );
}
