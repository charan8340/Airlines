const fs = require('fs');
const path = require('path');

const jsFolder = './converted-js';
const outputFolder = './html-files';

// Ensure the output directory exists
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

// Function to create an HTML file for each JS file
function createHTMLFile(jsFilePath) {
    const fileName = path.basename(jsFilePath, '.js');
    const relativePath = path.relative(outputFolder, jsFilePath);

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${fileName}</title>
</head>
<body>
    <h1>JavaScript File: ${fileName}.js</h1>
    <script src="${relativePath}"></script>
</body>
</html>`;

    fs.writeFileSync(path.join(outputFolder, `${fileName}.html`), htmlContent);
    console.log(`Generated: ${fileName}.html`);
}

// Recursively scan the `converted-js` folder and generate HTML files
function processDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath); // Recursively process subdirectories
        } else if (file.endsWith('.js')) {
            createHTMLFile(fullPath);
        }
    });
}

// Start processing
processDirectory(jsFolder);
console.log("HTML file generation complete!");
