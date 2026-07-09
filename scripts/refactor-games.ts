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

function refactorPage(slug: string) {
  const pagePath = path.join(gamesDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf-8');

  // 1. Imports
  if (!content.includes('getGameMetadata')) {
    content =
      `import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
` + content;
  }

  // Remove old utils
  content = content.replace(
    "import { generateMetadata } from '@/lib/seo/seo-utils';",
    '',
  );

  // 2. Metadata
  // Replace export const metadata ... });
  const metadataRegex =
    /export const metadata: Metadata = generateMetadata\(\{[\s\S]*?\}\);/g;
  content = content.replace(
    metadataRegex,
    `export const metadata: Metadata = getGameMetadata('${slug}');`,
  );

  // 3. Component Body
  // Find the component function
  const componentRegex =
    /export default function (\w+)\(\) \{([\s\S]*?)return \(/;
  const match = componentRegex.exec(content);

  if (match) {
    const functionName = match[1];
    const beforeReturn = match[2];

    // Inject enhancedContent variable if not present
    if (!content.includes('const enhancedContent')) {
      const newBeforeReturn =
        `
  const enhancedContent = getEnhancedGameContent('${slug}');
` + beforeReturn;
      content = content.replace(beforeReturn, newBeforeReturn);
    }
  }

  // 4. Return Statement / JSX
  // We want to replace everything after the Game Client component
  // Identify the game client component by looking for the one that ends with 'Client'
  const clientTagRegex = /<(\w+Client)\s*\/>/;
  const clientMatch = clientTagRegex.exec(content);

  if (clientMatch) {
    const clientTag = clientMatch[0]; // <LogicPuzzleClient />

    // Find position of client tag
    const clientIndex = content.indexOf(clientTag);

    if (clientIndex !== -1) {
      // Find the end of the content div (GameSEOContent should go after client)
      // We look for logic: after client tag, remove until the closing </div> of the inner container
      // We assume the structure: <Hero> <Stats> <Client> <Content> <Related> </div> </div>
      // So we want to keep <Client /> and remove subsequent siblings until the last 2 </div> tags.

      // Safer approach: Split by client tag.
      const [preClient, postClient] = content.split(clientTag);

      // In postClient, we want to keep nothing?
      // Actually postClient has "       {/* Content */} ... </div></div> ); }"
      // We want to replace the text between clientTag and the closing divs.

      // Let's look for the last two div closures in the return statement.
      const lastDivsIndex = postClient.lastIndexOf('</div>');
      // This is tricky with regex.
      // Let's assume the standard indentation pattern generally holds or strict structure:
      // Remove "{/* Content */}" and everything after it, inside the main div.

      if (postClient.includes('{/* Content */}')) {
        const postParts = postClient.split('{/* Content */}');
        const keptPost = postParts[0]; // This usually contains newlines or "       "

        // We need to re-add the closing divs.
        // The deleted part is postParts[1] which contains the prose div, related div, and closing divs.
        // Wait, we DO NOT want to delete closing divs.

        // Let's assume the file ends with:
        //       </div>
        //     </div>
        //   );
        // }

        // We can reconstruct the end.
        const replacement = `
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'${slug}'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}`;
        // Now we need to match the START of the return statement to wrap with <>
        // Check if it starts with <>
        if (!content.includes('<>')) {
          content = content.replace('return (', 'return (\n    <>');
          content = content.replace(
            /<GameSchemaScript slug=['"][\w-]+['"] \/>/,
            '',
          ); // Remove if already exists to avoid dup
          content = content.replace(
            '<>',
            `<>\n      <GameSchemaScript slug={'${slug}'} />`,
          );
        }

        // Now replace the content part
        // We find where `{/* Content */}` starts, and replace everything from there to the SECOND TO LAST `</div>`.
        // Finding the Nth from last occurrence is hard.
        // But we know `{/* Content */}` starts the block to be removed.
        // And we know the file ends with nested divs.
        // Let's count how many `</div>` are usually after `Content`.
        // Prose div + Related div + Main div + Container div.
        // So we expect 4 closing divs if we include Related?
        // No, Related is sibling of Prose.
        // Inner container <max-w-3xl> contains Client, Prose, Related.
        // So inside <max-w-3xl> we have Client, Prose, Related.
        // We want Client, GameSEOContent.
        // So we want to close <max-w-3xl>, then <container>, then <fragment>, then );

        // So we can assume the structure after Client is:
        // {some whitespace}
        // {Content block}
        // {Related block}
        // {closing max-w-3xl}
        // {closing container}

        // So we should cut from `{/* Content */}` to the very end of file,
        // and append the closing tags manually.

        const cutStartIndex = content.indexOf('{/* Content */}');
        if (cutStartIndex !== -1) {
          content = content.substring(0, cutStartIndex);
          content += `{enhancedContent && (
            <GameSEOContent
              gameSlug={'${slug}'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}`;
          // Also fix the start to include Fragment and SchemaScript
          // We did that above? No, we did valid regex replace.
          // But if we cut the file, we must ensure we didn't cut the component closing brace if it was outside?
          // Typically component closing brace is `}` at the end.
          content += '\n}\n';
        }
      }
    }
  }

  fs.writeFileSync(pagePath, content);
  console.log(`Refactored ${slug}`);
}

gameSlugs.forEach(refactorPage);
