import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('public/assets');

async function compressImages() {
  const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
  for (const file of files) {
    const inputPath = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, file.replace(/\.(png|jpg)$/, '.webp'));
    console.log(`Compressing ${file}...`);
    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true }) // reasonable web size
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Compressed to ${outputPath}`);
  }
}
compressImages().catch(console.error);
