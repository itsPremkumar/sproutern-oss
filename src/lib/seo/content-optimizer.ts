export function generateTLDR(content: string, maxLength: number = 200): string {
  const sentences = content.split(/[.!?]+/).filter((s) => s.trim().length > 20);
  let tldr = '';
  let count = 0;

  for (const sentence of sentences) {
    if (tldr.length + sentence.length > maxLength) break;
    tldr += sentence.trim() + '. ';
    count++;
    if (count >= 3) break;
  }

  return tldr.trim();
}

export function extractKeyTakeaways(
  content: string,
  count: number = 5,
): string[] {
  const takeaways: string[] = [];
  const lines = content.split('\n');

  for (const line of lines) {
    if (line.match(/^[-•*]\s+/) || line.match(/^\d+\.\s+/)) {
      const cleaned = line.replace(/^[-•*\d.]\s+/, '').trim();
      if (cleaned.length > 20 && cleaned.length < 150) {
        takeaways.push(cleaned);
        if (takeaways.length >= count) break;
      }
    }
  }

  return takeaways;
}

export const commonEntities = {
  Sproutern: 'Organization',
  'Anna University': 'EducationalOrganization',
  VTU: 'EducationalOrganization',
  JNTU: 'EducationalOrganization',
  Google: 'Corporation',
  Microsoft: 'Corporation',
  Amazon: 'Corporation',
  TCS: 'Corporation',
  Infosys: 'Corporation',
  Wipro: 'Corporation',
};
