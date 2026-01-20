const {
    createLog,
    readLog,
    updateLog
  } = require("./function.js");
  
  console.log(createLog(new Date(), "ERROR", "This is an error"));
  console.log(updateLog(new Date(), "INFO", "This is info log"));
  console.log(readLog());
  