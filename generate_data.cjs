const fs = require('fs');
const path = require('path');

const tests = [1, 2, 3];
const outputData = { tests: [] };

function parseQuestionsMd(testNum) {
    const filePath = path.join(__dirname, `Perguntas_Test_${testNum}.md`);
    if (!fs.existsSync(filePath)) return null;
    
    const content = fs.readFileSync(filePath, 'utf-8');
    // Split by double asterisks followed by number and dot, e.g., **1.**
    const questionBlocks = content.split(/\n(?=\*\*\d+\.)/);
    
    return questionBlocks.map(block => {
        const lines = block.trim().split('\n');
        const firstLine = lines[0];
        const match = firstLine.match(/^\*\*(\d+)\.\*\*\s*(.*)/);
        if (!match) return null;
        
        const number = parseInt(match[1]);
        let text = match[2].trim();
        
        const options = {};
        let currentOption = null;
        
        let linesToProcess = lines.slice(1);
        for (let line of linesToProcess) {
            line = line.trim();
            if (!line) continue;
            
            const optMatch = line.match(/^([A-D])\)\s*(.*)/);
            if (optMatch) {
                currentOption = optMatch[1];
                options[currentOption] = optMatch[2].trim();
            } else if (currentOption) {
                options[currentOption] += ' ' + line;
            } else {
                text += ' ' + line;
            }
        }
        
        return { number, text, options };
    }).filter(q => q !== null);
}

function parseExplanationsMd(testNum) {
    const filePath = path.join(__dirname, `Respostas_Practice_Test_${testNum}.md`);
    if (!fs.existsSync(filePath)) return null;
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const blocks = content.split(/\n(?=\*\*\d+\.)/);
    
    const explanations = {};
    
    blocks.forEach(block => {
        const match = block.match(/^\*\*(\d+)\.\s*([A-D])\*\*/);
        if (!match) return;
        
        const num = parseInt(match[1]);
        const letter = match[2];
        
        const parts = block.split('- **Por que as outras estão erradas:**');
        const correctPart = parts[0].split('- **Motivo (Certa):**')[1] || '';
        const wrongPart = parts[1] || '';
        
        explanations[num] = {
            answer: letter,
            reason: correctPart.trim(),
            distractors: wrongPart.trim()
        };
    });
    
    return explanations;
}

tests.forEach(num => {
    console.log(`Processing Test ${num}...`);
    const questions = parseQuestionsMd(num);
    const explanations = parseExplanationsMd(num);
    
    if (questions && explanations) {
        const merged = questions.map(q => ({
            ...q,
            answer: explanations[q.number]?.answer || '',
            reason: explanations[q.number]?.reason || '',
            distractors: explanations[q.number]?.distractors || ''
        }));
        
        outputData.tests.push({
            id: num,
            title: `Practice Test ${num}`,
            questions: merged
        });
        console.log(`Merged ${merged.length} questions for Test ${num}`);
    } else {
        console.warn(`Missing data for Test ${num}. Questions: ${!!questions}, Explanations: ${!!explanations}`);
    }
});

fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(outputData, null, 2));
console.log('Success: data.json created with perfectly formatted text!');
