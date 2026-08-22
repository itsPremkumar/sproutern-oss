import Link from 'next/link';

interface LanguageSwitcherProps {
  /** Current page path without locale prefix, e.g. '/tools/cgpa-converter' */
  basePath: string;
  /** Locale of the page this instance is rendered on */
  current: 'en' | 'de' | 'zh';
}

const VARIANTS = [
  { code: 'en', label: 'English', prefix: '' },
  { code: 'de', label: 'Deutsch', prefix: '/de' },
  { code: 'zh', label: '中文', prefix: '/zh' },
] as const;

/**
 * Visible, server-rendered language cross-links.
 *
 * Complements hreflang metadata: crawlers get same-page anchor-text signals
 * in the target language, and human visitors can actually find the variants.
 * Only pages that HAVE all three variants should render this.
 */
export function LanguageSwitcher({ basePath, current }: LanguageSwitcherProps) {
  return (
    <nav
      aria-label="Language"
      className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
    >
      <span>🌍</span>
      {VARIANTS.map(({ code, label, prefix }) =>
        code === current ? (
          <span key={code} className="font-semibold text-foreground" aria-current="true">
            {label}
          </span>
        ) : (
          <Link
            key={code}
            href={`${prefix}${basePath}`}
            className="underline-offset-2 hover:text-foreground hover:underline"
            hrefLang={code === 'en' ? 'en' : code}
          >
            {label}
          </Link>
        ),
      )}
    </nav>
  );
}
