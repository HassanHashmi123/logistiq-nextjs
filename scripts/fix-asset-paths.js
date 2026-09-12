const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

function fixAssetPaths() {
    const srcDir = path.join(__dirname, '../src');
    let totalFixed = 0;
    
    walkDir(srcDir, (filePath) => {
        if (!filePath.endsWith('.tsx')) return;
        
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;
        
        // Fix src="assets/ to src="/assets/
        content = content.replace(/src="assets\//g, 'src="/assets/');
        
        // Fix url(assets/ to url(/assets/ in inline styles
        content = content.replace(/url\(assets\//g, 'url(/assets/');
        
        // Fix href="assets/ to href="/assets/ (for links to assets)
        content = content.replace(/href="assets\//g, 'href="/assets/');
        
        // Fix action="assets/ to action="/assets/
        content = content.replace(/action="assets\//g, 'action="/assets/');

        // Fix data-src="assets/ to data-src="/assets/
        content = content.replace(/data-src="assets\//g, 'data-src="/assets/');
        
        // Fix data-bg="assets/ to data-bg="/assets/
        content = content.replace(/data-bg="assets\//g, 'data-bg="/assets/');

        // Fix data-jarallax-original-styles with assets/
        content = content.replace(/data-img="assets\//g, 'data-img="/assets/');

        if (content !== original) {
            fs.writeFileSync(filePath, content);
            const count = (original.match(/="assets\//g) || []).length + (original.match(/url\(assets\//g) || []).length;
            totalFixed += count;
            console.log(`Fixed ${count} paths in ${path.relative(srcDir, filePath)}`);
        }
    });
    
    console.log(`\nTotal: ${totalFixed} asset paths fixed.`);
}

fixAssetPaths();
