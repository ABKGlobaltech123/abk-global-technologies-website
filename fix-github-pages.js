#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Fix index.html to use relative paths for GitHub Pages
const indexPath = path.join(__dirname, 'dist/public/index.html');

if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Replace absolute asset paths with relative paths
  content = content.replace(/src="\/assets\//g, 'src="./assets/');
  content = content.replace(/href="\/assets\//g, 'href="./assets/');
  
  fs.writeFileSync(indexPath, content);
  console.log('✅ Fixed GitHub Pages asset paths in index.html');
} else {
  console.log('❌ index.html not found at', indexPath);
}