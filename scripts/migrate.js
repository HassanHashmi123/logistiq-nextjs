const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../../logistiq-laravel.mnsithub.com');
const destAppDir = path.join(__dirname, '../src/app');

// Exclude these files
const excludeFiles = [
    'index.html',
    '404.html',
    'Edge.html',
    'Firefox.html',
    'Gecko.html',
    'Trident.html',
    'Version.html',
    'version-2.html'
];

function convertHtmlToJsx(html) {
    let jsx = html;
    
    // Convert class to className, for to htmlFor
    jsx = jsx.replace(/class="/g, 'className="');
    jsx = jsx.replace(/for="/g, 'htmlFor="');
    
    // Self close tags
    jsx = jsx.replace(/<img([^>]*?)(?<!\/)>/ig, '<img$1 />');
    jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/ig, '<input$1 />');
    jsx = jsx.replace(/<br\s*\/?>/ig, '<br />');
    jsx = jsx.replace(/<hr\s*\/?>/ig, '<hr />');
    
    // Inline styles
    jsx = jsx.replace(/style="background-image:\s*url\((.*?)\);?"/ig, 'style={{ backgroundImage: "url($1)" }}');
    jsx = jsx.replace(/style="animation-duration:\s*(.*?);?"/ig, 'style={{ animationDuration: "$1" }}');
    jsx = jsx.replace(/style="animation-delay:\s*(.*?);?"/ig, 'style={{ animationDelay: "$1" }}');
    
    // Boolean attributes and camelCase conversions
    jsx = jsx.replace(/novalidate="novalidate"/ig, 'noValidate={true}');
    jsx = jsx.replace(/required=""/ig, 'required={true}');
    jsx = jsx.replace(/readonly/ig, 'readOnly={true}');
    jsx = jsx.replace(/selected="selected"/ig, 'selected={true}');
    jsx = jsx.replace(/checked="checked"/ig, 'defaultChecked={true}');
    jsx = jsx.replace(/tabindex/ig, 'tabIndex');
    jsx = jsx.replace(/maxlength/ig, 'maxLength');
    jsx = jsx.replace(/autoplay/ig, 'autoPlay');
    
    // Fix value="" on inputs
    jsx = jsx.replace(/<input([^>]*?)value="([^"]*)"([^>]*?)\/?>/ig, '<input$1defaultValue="$2"$3 />');
    
    jsx = jsx.replace(/<!--[\\s\\S]*?-->/g, '');
    // Clean up empty style tags that might have been left
    jsx = jsx.replace(/style=""/ig, '');
    
    // Remove stricky-header entirely because it's in our layout or we don't want it duplicated
    jsx = jsx.replace(/<div className="stricky-header[\s\S]*?<!-- \/\.stricky-header -->/ig, '');
    
    return jsx;
}

function processFiles() {
    const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html') && !excludeFiles.includes(f));
    
    files.forEach(file => {
        const filePath = path.join(srcDir, file);
        const html = fs.readFileSync(filePath, 'utf8');
        
        let startIndex = html.indexOf('</header>');
        if (startIndex !== -1) startIndex += 9; // Skip </header>
        
        let endIndex = html.indexOf('<footer');
        
        if (startIndex === -1 || endIndex === -1) {
            console.log(`Skipping ${file}: Could not find start/end markers.`);
            return;
        }
        
        let mainContent = html.substring(startIndex, endIndex);
        mainContent = convertHtmlToJsx(mainContent);
        
        // Remove trailing comment and stricky header just in case it was outside
        mainContent = mainContent.replace(/<!--End Main Header.*-->/i, '');
        mainContent = mainContent.replace(/<div className="stricky-header.*?<\/div>/is, ''); // naive removal if comments missed
        
        // Remove search-popup and scroll-to-top and mobile-nav because they are in our MobileMenu component!
        // We will just do a rough replace for them if they are at the end of the file
        // Actually, they are after the footer in the original HTML! So our indexOf('<footer') excludes them automatically! Perfect.

        const routeName = file.replace('.html', '');
        const routeDir = path.join(destAppDir, routeName);
        
        if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
        }
        
        const componentName = routeName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
        
        const pageCode = `import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";

export default function ${componentName}() {
  return (
    <>
      <Header />
      ${mainContent}
      <Footer />
      <MobileMenu />
    </>
  );
}
`;
        
        fs.writeFileSync(path.join(routeDir, 'page.tsx'), pageCode);
        console.log(`Created route: /${routeName}`);
    });
}

processFiles();

