const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'index.html');
const dist = path.join(__dirname, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(src, path.join(dist, 'index.html'));
console.log('Web App build complete:', path.join(dist, 'index.html'));
