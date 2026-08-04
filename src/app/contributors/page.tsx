import { Metadata } from 'next';
import {
  ContributorsGrid,
  Contributor,
} from '@/components/contributors/contributors-grid';
import { Users, Github, Heart, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MANUAL_CONTRIBUTORS, ManualContributor } from '@/data/contributors';

export const metadata: Metadata = {
  title: 'Contributors | Sproutern',
  description:
    'Meet the amazing people who have contributed to Sproutern. An open-source project building free career tools for students worldwide.',
  openGraph: {
    title: 'Our Contributors | Sproutern',
    description: 'Meet the amazing people who have contributed to Sproutern.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/contributors',
  },
};

const FALLBACK_CONTRIBUTORS: Contributor[] = [
  {
    id: 1,
    login: 'sproutern-team',
    avatar_url: '/logo.jpg',
    html_url: 'https://github.com/itsPremkumar/sproutern',
    contributions: 5000,
    type: 'User',
  },
];

async function getContributors(): Promise<Contributor[]> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/itsPremkumar/sproutern/contributors?per_page=100',
      { next: { revalidate: 3600 } }, // Cache for 1 hour
    );

    if (!response.ok) {
      console.warn(
        'Failed to fetch contributors (using fallback):',
        response.statusText,
      );
      return FALLBACK_CONTRIBUTORS;
    }

    const data = await response.json();
    return Array.isArray(data) ? data : FALLBACK_CONTRIBUTORS;
  } catch (error) {
    console.warn('Error fetching contributors (using fallback):', error);
    return FALLBACK_CONTRIBUTORS;
  }
}

// Helper to merge GitHub data with Manual data
function mergeContributors(
  githubContributors: Contributor[],
  manualContributors: ManualContributor[],
): Contributor[] {
  const manualMap = new Map(
    manualContributors.map((c) => [c.login.toLowerCase(), c]),
  );

  // Process GitHub contributors
  const merged = githubContributors.map((gh) => {
    const manual = manualMap.get(gh.login.toLowerCase());
    if (manual) {
      return {
        ...gh,
        role: manual.role,
        bio: manual.bio,
        socials: manual.socials,
        // Override avatar if specified
        avatar_url: manual.customAvatar || gh.avatar_url,
        // Override contributions if specified
        contributions: manual.contributions || gh.contributions,
        // Add category for filtering later
        _category: manual.category,
      };
    }
    return { ...gh, _category: 'contributor' };
  });

  // Add manual-only contributors (those not found in GitHub fetch, e.g., if they haven't committed yet but are team members)
  // For now, we assume they should match, but let's be robust.
  // actually, let's just stick to enhancing matching users for now to avoid duplicates if ID is missing.
  // If a manual user isn't in GitHub list, we could add them if we had a dummy ID.
  // Let's keep it simple: Enhance existing list.

  return merged;
}

export default async function ContributorsPage() {
  let contributors = await getContributors();

  // Apply Fallback logic if needed (already in getContributors, but let's ensure specific user avatar override happens if it's the fallback list)
  if (
    contributors === FALLBACK_CONTRIBUTORS &&
    contributors[0].login === 'sproutern-team'
  ) {
    contributors[0].avatar_url = '/logo.jpg';
  }

  // Merge with Manual Data
  const enhancedContributors = mergeContributors(
    contributors,
    MANUAL_CONTRIBUTORS,
  );

  // Categorize
  const coreTeam = enhancedContributors.filter(
    (c) => (c as any)._category === 'core',
  );
  const community = enhancedContributors.filter(
    (c) =>
      (c as any)._category !== 'core' && (c as any)._category !== 'maintainer',
  ); // Default others to community

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-background pt-20">
        {/* Background Effects */}
        <div className="gradient-mesh absolute inset-0" />
        <div className="float absolute left-10 top-20 h-[300px] w-[300px] rounded-full bg-primary/20 opacity-60 blur-3xl" />
        <div className="float absolute right-10 top-20 h-[300px] w-[300px] rounded-full bg-secondary/20 opacity-60 blur-3xl" />

        <div className="container relative z-10 py-12 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Heart className="mr-1 h-3 w-3" />
            Community First
          </Badge>

          <h1 className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl">
            Meet Our <span className="text-gradient">Contributors</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Sproutern is built by students, for students. We are proud to be an
            open-source project supported by these amazing individuals who
            dedicate their time to help others succeed.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://github.com/itsPremkumar/sproutern"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-background transition-all hover:bg-foreground/90 hover:shadow-lg"
            >
              <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="font-bold">Contribute on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      {coreTeam.length > 0 && (
        <section className="container py-12">
          <div className="mb-8 flex items-center gap-2">
            <div className="h-8 w-1 rounded-full bg-primary" />
            <h2 className="text-2xl font-bold">Core Team</h2>
          </div>
          <ContributorsGrid contributors={coreTeam} />
        </section>
      )}

      {/* Community Section */}
      <section className="container py-12 md:pb-20">
        <div className="mb-8 flex items-center gap-2">
          <div className="h-8 w-1 rounded-full bg-secondary" />
          <h2 className="text-2xl font-bold">Community Contributors</h2>
        </div>

        {/* Divider if needed, or just the header */}
        {community.length > 0 ? (
          <ContributorsGrid contributors={community} />
        ) : (
          <p className="text-muted-foreground">
            No community contributors found yet.
          </p>
        )}
      </section>
    </div>
  );
}
