const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Satender KumarPractice Test 1 - CompTIA Security+ (SY0-701).pdf');

pdf(dataBuffer).then(function(data) {
    let text = data.text;
    console.log("Total length:", text.length);
    let answerIndex = text.toLowerCase().lastIndexOf('answer');
    if (answerIndex !== -1) {
        console.log("Found 'answer' near end. Text around it:");
        console.log(text.substring(Math.max(0, answerIndex - 100), Math.min(text.length, answerIndex + 1000)));
    } else {
        console.log("No 'answer' found in text.");
    }
}).catch(err => console.error(err));
