import { generateSEOReport } from './validate-seo';
import fetch from 'node-fetch';

async function run() {
  console.log('Fetching http://localhost:9002...');
  try {
    const res = await fetch('http://localhost:9002');
    const html = await res.text();
    console.log('HTML fetched. Length:', html.length);

    console.log('Running SEO validation...');
    const report = generateSEOReport(html, 'http://localhost:9002');

    console.log('📊 SEO Report for Homepage:');
    console.log(`Overall Score: ${report.overallScore}/100\n`);

    console.log('Meta Tags Validation:');
    if (report.meta.errors.length > 0) {
      console.log('❌ Errors:');
      report.meta.errors.forEach((error) => console.log(`  - ${error}`));
    }
    if (report.meta.warnings.length > 0) {
      console.log('⚠️  Warnings:');
      report.meta.warnings.forEach((warning) => console.log(`  - ${warning}`));
    }
    if (report.meta.errors.length === 0 && report.meta.warnings.length === 0) {
      console.log('✅ All meta tags valid');
    }

    console.log('\nSchema Validation:');
    if (report.schema.isValid) {
      console.log('✅ Schema valid');
      console.log(
        `Schema types found: ${report.schema.schemaTypes.join(', ')}`,
      );
    } else {
      console.log('❌ Schema errors:');
      report.schema.errors.forEach((error) => console.log(`  - ${error}`));
    }
  } catch (error) {
    console.error('Error fetching page:', error);
  }
}

run();
