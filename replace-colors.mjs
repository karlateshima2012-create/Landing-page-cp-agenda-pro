import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoriesToSearch = [
    path.join(__dirname, 'components'),
    path.join(__dirname, 'App.tsx'),
    path.join(__dirname, 'index.css')
];

const replacements = {
    'brand-blue': 'brand-pink',
    'brand-yellow': 'brand-pink',
    'btn-glow-blue': 'btn-glow-pink',
    'btn-glow-yellow': 'btn-glow-pink',
    'text-glow-blue': 'text-glow-pink',
    'shadow-\\[0_0_15px_rgba\\(56,182,255,0\\.4\\)\\]': 'shadow-[0_0_15px_rgba(229,21,122,0.4)]',
    'shadow-\\[0_0_10px_rgba\\(56,182,255,0\\.5\\)\\]': 'shadow-[0_0_10px_rgba(229,21,122,0.5)]',
};

function processDirectory(directory) {
    if (!fs.existsSync(directory)) return;
    
    if (fs.statSync(directory).isFile()) {
        processFile(directory);
        return;
    }

    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
            processFile(fullPath);
        }
    }
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    for (const [search, replace] of Object.entries(replacements)) {
        const regex = new RegExp(search, 'g');
        content = content.replace(regex, replace);
    }
    
    // Specifically handle .gradient-text in index.css
    if (filePath.endsWith('index.css')) {
        content = content.replace(
            /background: linear-gradient\(90deg, #38b6ff 0%, #E5157A 100%\);/g,
            'background: linear-gradient(90deg, #E5157A 0%, #FFFFFF 100%);'
        );
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

directoriesToSearch.forEach(dir => processDirectory(dir));
console.log('Done replacing colors.');
