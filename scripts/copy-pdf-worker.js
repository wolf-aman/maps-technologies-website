#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Possible locations and formats for the worker file
const possiblePaths = [
  path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'build', 'pdf.worker.min.mjs'),
  path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'build', 'pdf.worker.mjs'),
  path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'build', 'pdf.worker.min.js'),
  path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'legacy', 'build', 'pdf.worker.min.js'),
];

// Destination file in public folder
const destDir = path.join(__dirname, '..', 'public', 'pdfjs');
const destFile = path.join(destDir, 'pdf.worker.min.js');

let sourceFile = null;

// Find which path exists
for (const candidate of possiblePaths) {
  if (fs.existsSync(candidate)) {
    sourceFile = candidate;
    break;
  }
}

if (!sourceFile) {
  console.error('Error: PDF worker file not found in any expected location');
  console.warn('Warning: PDF worker file will be loaded from CDN on first use');
  process.exit(0);
}

try {
  // Ensure destination directory exists
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Copy the file
  fs.copyFileSync(sourceFile, destFile);
  console.log(`✓ PDF worker copied from ${path.basename(sourceFile)} to ${destFile}`);
} catch (error) {
  console.error('Error copying PDF worker:', error.message);
  console.warn('Warning: PDF worker file will be loaded from CDN on first use');
  process.exit(0);
}


