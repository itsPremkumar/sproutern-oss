/**
 * PWA Icon Generation Script
 *
 * This script generates all required PWA icons from a source image.
 * Run: npx ts-node scripts/generate-pwa-icons.ts
 *
 * Required: Install sharp - npm install sharp
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SOURCE_IMAGE = path.join(__dirname, '../public/logo.jpg');
const OUTPUT_DIR = path.join(__dirname, '../public/icons');

// Icon sizes needed for PWA
const ICON_SIZES = [72, 96, 128, 144, 152, 167, 180, 192, 384, 512];

// Splash screen sizes for iOS
const SPLASH_SIZES = [
  { width: 640, height: 1136, name: 'splash-640x1136.png' },
  { width: 750, height: 1334, name: 'splash-750x1334.png' },
  { width: 1125, height: 2436, name: 'splash-1125x2436.png' },
  { width: 1536, height: 2048, name: 'splash-1536x2048.png' },
  { width: 1668, height: 2224, name: 'splash-1668x2224.png' },
  { width: 2048, height: 2732, name: 'splash-2048x2732.png' },
];

async function generateIcons() {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('🎨 Generating PWA icons...\n');

  // Generate standard icons
  for (const size of ICON_SIZES) {
    const outputPath = path.join(OUTPUT_DIR, `icon-${size}x${size}.png`);
    await sharp(SOURCE_IMAGE)
      .resize(size, size, { fit: 'cover' })
      .png()
      .toFile(outputPath);
    console.log(`✅ Generated: icon-${size}x${size}.png`);
  }

  // Generate Apple Touch Icon
  await sharp(SOURCE_IMAGE)
    .resize(180, 180, { fit: 'cover' })
    .png()
    .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));
  console.log('✅ Generated: apple-touch-icon.png');

  // Generate maskable icon (with padding for safe area)
  const maskableSize = 512;
  const padding = Math.floor(maskableSize * 0.1);
  const innerSize = maskableSize - padding * 2;

  await sharp(SOURCE_IMAGE)
    .resize(innerSize, innerSize, { fit: 'cover' })
    .extend({
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      background: { r: 124, g: 58, b: 237, alpha: 1 }, // Purple background
    })
    .png()
    .toFile(path.join(OUTPUT_DIR, 'maskable-icon-512x512.png'));
  console.log('✅ Generated: maskable-icon-512x512.png');

  console.log('\n🚀 All icons generated successfully!');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
}

// Generate splash screens (optional - requires more processing)
async function generateSplashScreens() {
  console.log('\n🖼️  Generating splash screens...\n');

  for (const splash of SPLASH_SIZES) {
    const outputPath = path.join(OUTPUT_DIR, splash.name);

    // Create a splash screen with centered logo
    const logoSize = Math.min(splash.width, splash.height) * 0.3;
    const logo = await sharp(SOURCE_IMAGE)
      .resize(Math.floor(logoSize), Math.floor(logoSize), { fit: 'cover' })
      .toBuffer();

    await sharp({
      create: {
        width: splash.width,
        height: splash.height,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      },
    })
      .composite([
        {
          input: logo,
          gravity: 'center',
        },
      ])
      .png()
      .toFile(outputPath);

    console.log(`✅ Generated: ${splash.name}`);
  }

  console.log('\n🎉 All splash screens generated!');
}

// Run the script
async function main() {
  try {
    await generateIcons();
    await generateSplashScreens();
  } catch (error) {
    console.error('❌ Error generating icons:', error);
    process.exit(1);
  }
}

main();
