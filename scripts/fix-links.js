const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function fixLinks() {
    const srcDir = path.join(__dirname, '../src');
    
    walkDir(srcDir, (filePath) => {
        if (filePath.endsWith('.tsx')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;
            
            // Replace href="index.html" with href="/"
            if (content.match(/href="index\.html"/g)) {
                content = content.replace(/href="index\.html"/g, 'href="/"');
                modified = true;
            }
            
            // Replace href="index-dark.html" with href="/index-dark"
            if (content.match(/href="([^"]+)\.html"/g)) {
                content = content.replace(/href="([^"]+)\.html"/g, 'href="/$1"');
                modified = true;
            }
            
            // Fix Link imports if we used them in standard components
            
            if (modified) {
                fs.writeFileSync(filePath, content);
                console.log('Fixed links in', filePath);
            }
        }
    });
}

fixLinks();
