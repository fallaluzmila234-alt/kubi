import AdmZip from 'adm-zip';
import fs from 'fs';

try {
  const zip = new AdmZip();

  // Create public directory if it doesn't exist
  if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public');
  }

  // Add src folder
  if (fs.existsSync('./src')) {
    zip.addLocalFolder('./src', 'src');
  }

  // Add individual config files
  const filesToInclude = [
    'index.html',
    'package.json',
    'tsconfig.json',
    'vite.config.ts',
    '.env.example',
    '.gitignore',
    'metadata.json'
  ];

  filesToInclude.forEach(file => {
    if (fs.existsSync(file)) {
      zip.addLocalFile(file);
    }
  });

  zip.writeZip('./public/proyecto-kubi.zip');
  console.log('ZIP file created successfully at ./public/proyecto-kubi.zip');
} catch (error) {
  console.error('Error generating ZIP:', error);
}
