const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "log.txt");

function createLog(date, type, message) {

    fs.readFile(logFile, "utf-8", (err, data) => {
        if (err && err.code !== "ENOENT") {
            throw err;
        }
        console.log("File read successfully");
    });

    fs.writeFileSync(
        logFile,
        `Date: ${date}Type: ${type}Message: ${message}`,
    );

    return "Log created successfully";

}

// 🔽 CALL THE FUNCTION
const result = createLog(
    new Date().toString(),
    "ERROR",
    "This is an error message"
);

console.log(result);
