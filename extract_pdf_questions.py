import pdfplumber
import re

def extract_test(file_path, output_md):
    with pdfplumber.open(file_path) as pdf:
        full_text = ""
        for page in pdf.pages:
            text = page.extract_text(x_tolerance=1, y_tolerance=1)
            if text:
                full_text += text + "\n"

    # Now let's try to parse the text cleanly
    lines = full_text.split('\n')
    md = ""
    q_num = 1
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        # Skip headers / footers
        if "Satender Kumar" in line or line.isdigit() or "Page (" in line:
            i += 1
            continue
            
        # Match "1. " or "100. "
        match = re.match(r'^(\d+)\.\s*(.*)', line)
        if match:
            num = int(match.group(1))
            if num == q_num:
                md += f"**{q_num}.** {match.group(2)}\n"
                
                # Check next lines for continuation of question or options
                i += 1
                while i < len(lines):
                    sub_line = lines[i].strip()
                    if "Satender Kumar" in sub_line or sub_line.isdigit():
                        i += 1
                        continue
                    if re.match(r'^\d+\.\s*', sub_line):
                        break # Next question
                    
                    # Match options A) B) C) D) or with circle markers
                    opt_match = re.match(r'^[\u25cf\u25cb●○]?\s*([A-D]\)\s*.*)', sub_line)
                    if opt_match:
                        md += opt_match.group(1) + "\n"
                    elif sub_line != "":
                        md += sub_line + "\n"
                        
                    i += 1
                md += "\n"
                q_num += 1
                continue
        i += 1
        
    with open(output_md, 'w', encoding='utf-8') as f:
        f.write(md)
    print(f"Written {q_num-1} questions to {output_md}")

extract_test('Satender KumarPractice Test 1 - CompTIA Security+ (SY0-701).pdf', 'Perguntas_Test_1.md')
extract_test('Satender KumarPractice Test 2 - CompTIA Security+ (SY0-701).pdf', 'Perguntas_Test_2.md')
extract_test('Satender KumarPractice Test 3 - CompTIA Security+ (SY0-701).pdf', 'Perguntas_Test_3.md')
