const fs = require("fs");

function writeFileSyncData(date, message, name, type) {
    const fileName = `${name}.${type}`;
    const content = `Date: ${date}\nName: ${name}\nMessage: ${message}\n\n`;

    fs.writeFileSync(fileName, content, { flag: "a" }); // append mode
}

// Example usage
writeFileSyncData(
    new Date().toISOString(),
    "This is a test log",
    "git-basics",
    "txt"
);
