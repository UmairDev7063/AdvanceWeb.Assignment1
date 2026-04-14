const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'node_modules', 'react-dev-utils', 'checkRequiredFiles.js');
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/fs\.F_OK/g, 'fs.constants.F_OK');
fs.writeFileSync(filePath, content);
console.log('Patched fs.F_OK in checkRequiredFiles.js');