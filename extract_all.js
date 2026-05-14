const fs = require('fs');
const pdf = require('pdf-parse');

const files = [
    'Satender KumarPractice Test 1 - CompTIA Security+ (SY0-701).pdf',
    'Satender KumarPractice Test 2 - CompTIA Security+ (SY0-701).pdf',
    'Satender KumarPractice Test 3 - CompTIA Security+ (SY0-701).pdf'
];

async function extract() {
    for (let file of files) {
        if (fs.existsSync(file)) {
            let dataBuffer = fs.readFileSync(file);
            let data = await pdf(dataBuffer);
            fs.writeFileSync(file.replace('.pdf', '.txt'), data.text);
            console.log(`Extracted ${file}`);
        }
    }
}

extract().catch(console.error);
