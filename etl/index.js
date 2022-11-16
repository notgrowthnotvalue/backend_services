const fs = require('fs');
const csv = require('csvtojson');

const csvPath = '../database/raw/healthcare.csv';
const jsonFilePath = '../database/processed/healthcare.json'


csv()
    // Pass csv file path and contructs a JSON object
    .fromFile(csvPath)
    // Sends the JSON to database/processed file
    .then(writeJSON);

function writeJSON(jsonObj) {
    fs.writeFile(jsonFilePath, JSON.stringify(jsonObj));
}

