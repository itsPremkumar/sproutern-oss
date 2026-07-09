import fs from 'fs';
import path from 'path';

const gamesDir = path.join(process.cwd(), 'src/app/games');

const gameSlugs = fs.readdirSync(gamesDir).filter((file) => {
  const stat = fs.statSync(path.join(gamesDir, file));
  return (
    stat.isDirectory() &&
    !file.startsWith('[') &&
    !file.startsWith('(') &&
    file !== 'memory-matrix'
  );
});

function standardizePage(slug: string) {
  const pagePath = path.join(gamesDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf-8');

  // Check if GameSEOContent is already used
  if (content.includes('<GameSEOContent')) return;

  console.log(`Standardizing ${slug}...`);

  // 1. Identify Client Component
  const clientTagRegex = /<(\w+Client|.*Game)\s*\/>/;
  const clientMatch = clientTagRegex.exec(content);

  if (!clientMatch) {
    console.error(`No client tag found for ${slug}`);
    return;
  }

  const clientTag = clientMatch[0];
  const clientIndex = content.indexOf(clientTag);
  const clientEndIndex = clientIndex + clientTag.length;

  // 2. Identify Trailing Closing Tags
  // We expect the file to end with something like:
  //       </div>
  //     </div>
  //   );
  // }
  // We want to preserve the last two divs (closing container and max-w-3xl)
  // Let's search for the LAST occurrence of `</div>` and the one before it.

  const lastDiv = content.lastIndexOf('</div>');
  const secondLastDiv = content.lastIndexOf('</div>', lastDiv - 1);

  if (lastDiv === -1 || secondLastDiv === -1) {
    console.error(`Cannot find closing divs for ${slug}`);
    return;
  }

  // 3. Construct Replacement

  // We replace from clientEndIndex to secondLastDiv (exclusive? inclusive?)
  // We want to insert AFTER client, and BEFORE secondLastDiv starts.
  // Actually, secondLastDiv matches the `</div>`. We want to keep it.

  const preClient = content.substring(0, clientEndIndex);
  const postContainer = content.substring(secondLastDiv); // Starts with </div>...

  const newContentSection = `
        {/* Enhanced SEO Content */}
        {enhancedContent && (
          <GameSEOContent
            gameSlug={'${slug}'}
            enhancedContent={enhancedContent}
          />
        )}`;

  let newBody = preClient + newContentSection + postContainer;

  // 4. Wrap in Fragment and Add Schema if missing
  if (!newBody.includes('<GameSchemaScript')) {
    // Find return (
    if (newBody.includes('return (\n    <>')) {
      // Already has fragment, just inject
      newBody = newBody.replace(
        '<>',
        `<>\n      <GameSchemaScript slug={'${slug}'} />`,
      );
    } else {
      newBody = newBody.replace('return (', 'return (\n    <>');
      newBody = newBody.replace(
        '<>\n',
        `<>\n      <GameSchemaScript slug={'${slug}'} />\n`,
      );

      // We need to close the fragment too!
      // It should be before the last `);`
      const lastParen = newBody.lastIndexOf(');');
      if (lastParen !== -1) {
        newBody =
          newBody.slice(0, lastParen) +
          '\n    </>\n  ' +
          newBody.slice(lastParen);
      }
    }
  }

  fs.writeFileSync(pagePath, newBody);
  console.log(`Fixed content for ${slug}`);
}

gameSlugs.forEach(standardizePage);
