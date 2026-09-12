const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function removeComments() {
    const srcDir = path.join(__dirname, '../src');
    
    walkDir(srcDir, (filePath) => {
        if (filePath.endsWith('.tsx')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let original = content;
            
            // Remove HTML comments
            content = content.replace(/<!--[\s\S]*?-->/g, '');
            
            if (content !== original) {
                fs.writeFileSync(filePath, content);
                console.log('Removed comments in', filePath);
            }
        }
    });
}

removeComments();
