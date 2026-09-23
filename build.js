const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'index.html');
const dist = path.join(__dirname, 'dist');

fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(src, path.join(dist, 'index.html'));
console.log('健康生活 App web assets copied to dist/');
