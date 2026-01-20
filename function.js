const fs = require("fs");

function createLog(date, type, data) {
  fs.writeFileSync(
    "log.txt",
    `Date: ${date}\nType: ${type}\nMessage: ${data}\n\n`
  );
  return "Log created successfully";
}

function readLog() {
  if (!fs.existsSync("log.txt")) {
    return "File does not exist";
  }
  return fs.readFileSync("log.txt", "utf-8");
}

function updateLog(date, type, data) {
  fs.appendFileSync(
    "log.txt",
    `Date: ${date}\nType: ${type}\nMessage: ${data}\n\n`
  );
  return "Log updated successfully";
}

function deleteLog() {
  if (!fs.existsSync("log.txt")) {
    return "File already deleted";
  }
  fs.unlinkSync("log.txt");
  return "Log deleted successfully";
}

function writeLog() {
  fs.appendFileSync(
    "log.txt",
    `Time: ${new Date()}\nMessage: Log created\n-----------------\n`
  );
}

/* ✅ CORRECT EXPORT */
module.exports = {
  createLog,
  readLog,
  updateLog,
  deleteLog,
  writeLog
};
