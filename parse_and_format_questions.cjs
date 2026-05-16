const fs = require('fs');
const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const options = {}; 

async function processPdf(filename, testNum) {
    return new Promise((resolve, reject) => {
        pdfExtract.extract(filename, options, (err, data) => {
            if (err) return reject(err);
            
            let lines = [];
            data.pages.forEach(page => {
                // Group items by approximate Y coordinate to form lines
                let rows = {};
                page.content.forEach(item => {
                    let y = Math.round(item.y);
                    if (!rows[y]) rows[y] = [];
                    rows[y].push(item);
                });
                
                // Sort by Y, then by X
                let sortedY = Object.keys(rows).sort((a, b) => parseFloat(a) - parseFloat(b));
                sortedY.forEach(y => {
                    let rowItems = rows[y].sort((a, b) => a.x - b.x);
                    let lineStr = '';
                    let lastX = 0;
                    rowItems.forEach(item => {
                        if (lastX > 0 && item.x - lastX > 5) {
                            lineStr += ' '; // Add space
                        }
                        lineStr += item.str;
                        lastX = item.x + item.width;
                    });
                    lines.push(lineStr.trim());
                });
            });

            // Now parse lines into Perguntas_Test_X.md format
            let md = '';
            let qNum = 1;
            let i = 0;
            
            // basic parsing loop
            while (i < lines.length) {
                let line = lines[i];
                if (line.match(/^\d+\.\s*(.*)/)) {
                    // Match "1. Question text"
                    let match = line.match(/^(\d+)\.\s*(.*)/);
                    if (parseInt(match[1]) === qNum) {
                        md += `**${qNum}.** ${match[2]}\n`;
                        i++;
                        
                        // collect options
                        while (i < lines.length && !lines[i].match(/^\d+\.\s*/)) {
                            let optLine = lines[i];
                            // skip header/footers or empty lines
                            if (optLine.includes('Satender Kumar') || optLine.includes('Page (')) {
                                i++;
                                continue;
                            }
                            if (optLine.match(/^[A-D]\)/) || optLine.match(/^[●○]\s*[A-D]\)/)) {
                                let opt = optLine.replace(/^[●○]\s*/, '');
                                md += `${opt}\n`;
                            } else if (optLine.trim() !== '') {
                                // continuation of question text or option
                                md += `${optLine}\n`;
                            }
                            i++;
                        }
                        md += '\n';
                        qNum++;
                        continue;
                    }
                }
                i++;
            }
            
            fs.writeFileSync(`Perguntas_Test_${testNum}.md`, md);
            console.log(`Test ${testNum} extracted with ${qNum - 1} questions.`);
            resolve();
        });
    });
}

async function main() {
    await processPdf('Satender KumarPractice Test 1 - CompTIA Security+ (SY0-701).pdf', 1);
    await processPdf('Satender KumarPractice Test 2 - CompTIA Security+ (SY0-701).pdf', 2);
    await processPdf('Satender KumarPractice Test 3 - CompTIA Security+ (SY0-701).pdf', 3);
}

main().catch(console.error);
