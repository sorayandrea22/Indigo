import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');

// Common image file extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp', '.ico'];

function listImages() {
  try {
    // Check if images directory exists
    if (!fs.existsSync(imagesDir)) {
      console.log('❌ Images directory does not exist at:', imagesDir);
      console.log('📁 Creating images directory...');
      fs.mkdirSync(imagesDir, { recursive: true });
      console.log('✅ Images directory created successfully!');
      return;
    }

    // Read directory contents
    const files = fs.readdirSync(imagesDir);
    
    // Filter only image files
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    console.log('\n🖼️  IMAGES FOUND IN /public/images/');
    console.log('=====================================');
    
    if (imageFiles.length === 0) {
      console.log('❌ No image files found in the directory');
      console.log('📁 Supported formats:', imageExtensions.join(', '));
    } else {
      console.log(`📊 Total images found: ${imageFiles.length}\n`);
      
      // Group by extension
      const groupedImages = {};
      imageFiles.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (!groupedImages[ext]) {
          groupedImages[ext] = [];
        }
        groupedImages[ext].push(file);
      });

      // Display grouped results
      Object.keys(groupedImages).sort().forEach(ext => {
        console.log(`\n${ext.toUpperCase()} FILES (${groupedImages[ext].length}):`);
        console.log('─'.repeat(20));
        groupedImages[ext].forEach((file, index) => {
          console.log(`${index + 1}. ${file}`);
          console.log(`   📍 /images/${file}`);
        });
      });

      console.log('\n📋 COPY-READY PATHS:');
      console.log('─'.repeat(25));
      imageFiles.forEach(file => {
        console.log(`"/images/${file}"`);
      });
    }

  } catch (error) {
    console.error('❌ Error reading images directory:', error.message);
  }
}

// Run the script
listImages();
