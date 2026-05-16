const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('c:/Users/isr-rsilva.ISRETAIL/Desktop/security-/Satender KumarPractice Test 1 - CompTIA Security+ (SY0-701).pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text.substring(0, 5000));
});
