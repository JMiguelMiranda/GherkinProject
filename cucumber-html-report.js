const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  hideMetadata: true,
  pageFooter: "<div><p>A custom footer in html</p></div>",
  displayReportTime: true
});