import fs from 'fs';
import PDFParser from 'pdf2json';

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    const rawText = pdfParser.getRawTextContent();
    fs.writeFileSync('./pdf_text.txt', rawText);
    console.log("Extracted to pdf_text.txt");
});

pdfParser.loadPDF('c:/Users/isr-rsilva.ISRETAIL/Desktop/security-/Satender KumarPractice Test 1 - CompTIA Security+ (SY0-701).pdf');
