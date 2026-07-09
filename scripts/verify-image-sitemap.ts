import fs from 'fs';
import path from 'path';

async function verify() {
  console.log('Verifying public/sitemap-images.xml...');

  const filePath = path.join(process.cwd(), 'public', 'sitemap-images.xml');
  if (!fs.existsSync(filePath)) {
    console.error('❌ File not found:', filePath);
    process.exit(1);
  }

  const text = fs.readFileSync(filePath, 'utf-8');

  console.log('\n--- Generated XML ---');
  console.log(text);
  console.log('---------------------\n');

  const checks = [
    { name: 'Root element', regex: /<urlset/ },
    {
      name: 'Image namespace',
      regex:
        /xmlns:image="http:\/\/www\.google\.com\/schemas\/sitemap-image\/1\.1"/,
    },
    {
      name: 'Logo Image',
      regex: /<image:loc>https:\/\/www\.sproutern\.com\/logo\.jpg<\/image:loc>/,
    },
    {
      name: 'Founder Image',
      regex:
        /<image:loc>https:\/\/www\.sproutern\.com\/premkumar\.jpeg<\/image:loc>/,
    },
    {
      name: 'Payment Image',
      regex:
        /<image:loc>https:\/\/www\.sproutern\.com\/payment\.jpeg<\/image:loc>/,
    },
  ];

  let allPassed = true;
  for (const check of checks) {
    if (check.regex.test(text)) {
      console.log(`✅ ${check.name} check passed.`);
    } else {
      console.error(`❌ ${check.name} check FAILED.`);
      allPassed = false;
    }
  }

  if (allPassed) {
    console.log(
      '\n✅ VERIFICATION SUCCESSFUL: Sitemap structure contains multiple images.',
    );
  } else {
    console.error('\n❌ VERIFICATION FAILED: Missing expected content.');
    process.exit(1);
  }
}

verify();
