const fs = require('fs');
const pdf = require('pdf-parse');

// Função de renderização customizada para tentar manter espaços
function render_page(pageData) {
    return pageData.getTextContent()
    .then(function(textContent) {
        let lastY, text = '';
        for (let item of textContent.items) {
            if (lastY == item.transform[5] || !lastY){
                text += item.str;
            } else {
                text += '\n' + item.str;
            }    
            lastY = item.transform[5];
        }
        return text;
    });
}

let options = {
    pagerender: render_page
};

const pdfFile = 'Satender KumarPractice Test 1 - CompTIA Security+ (SY0-701).pdf';

if (fs.existsSync(pdfFile)) {
    let dataBuffer = fs.readFileSync(pdfFile);
    pdf(dataBuffer, options).then(function(data) {
        fs.writeFileSync('test_extraction.txt', data.text);
        console.log('Extração de teste concluída. Verifique test_extraction.txt');
    });
} else {
    console.log('PDF não encontrado:', pdfFile);
}

