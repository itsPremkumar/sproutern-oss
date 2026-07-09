export function decodeCompanyParam(param: string): string {
  let decoded = param;

  try {
    decoded = decodeURIComponent(decoded);
  } catch {
    // Keep original value if decoding fails.
  }

  // Handle doubly encoded inputs such as "HCL%2520Technologies".
  try {
    decoded = decodeURIComponent(decoded);
  } catch {
    // Keep best-effort decoded value.
  }

  return decoded.replace(/\+/g, ' ').trim();
}

export function toCompanySlug(company: string): string {
  return company
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
}
