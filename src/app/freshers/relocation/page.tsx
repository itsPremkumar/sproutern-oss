import { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Home,
  Banknote,
  Train,
  Building,
  Coffee,
  Sun,
  ArrowRight,
  CheckCircle,
  Info,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Relocation Guide for Freshers | City Guides India',
  description:
    'Complete relocation guides for freshers moving to Bangalore, Hyderabad, Pune, Chennai for their first job. Accommodation, transport, costs, and tips.',
  keywords:
    'relocation guide freshers, moving to Bangalore job, Hyderabad relocation, Pune for freshers, Chennai living guide',
};

const cities = [
  {
    name: 'Bangalore',
    areas: 'Koramangala, HSR, Whitefield, Electronic City',
    rent: '₹8,000-20,000',
    transport: 'Metro, Bus, Cabs',
    companies: 'Amazon, Google, Flipkart, Infosys',
    pros: ['IT hub of India', 'Pleasant weather', 'Startup ecosystem'],
    cons: ['Traffic congestion', 'High rent', 'Water issues'],
  },
  {
    name: 'Hyderabad',
    areas: 'Gachibowli, HITEC City, Madhapur, Kondapur',
    rent: '₹6,000-15,000',
    transport: 'Metro, Bus, Cabs',
    companies: 'Microsoft, Google, Amazon, TCS',
    pros: [
      'Lower cost than Bangalore',
      'Good infrastructure',
      'Growing tech hub',
    ],
    cons: ['Hot summers', 'Limited nightlife', 'Humidity'],
  },
  {
    name: 'Pune',
    areas: 'Hinjewadi, Kharadi, Magarpatta, Baner',
    rent: '₹7,000-18,000',
    transport: 'Bus, Cabs, Metro (expanding)',
    companies: 'Infosys, TCS, Wipro, Tech Mahindra',
    pros: ['Good weather', 'Active social scene', 'Educational hub'],
    cons: ['Rising traffic', 'Scattered IT parks', 'Metro still expanding'],
  },
  {
    name: 'Chennai',
    areas: 'OMR, Sholinganallur, Perungudi, Thoraipakkam',
    rent: '₹6,000-14,000',
    transport: 'Metro, Bus, Local trains',
    companies: 'Cognizant, TCS, Zoho, Freshworks',
    pros: ['Lower cost of living', 'Beach access', 'Cultural hub'],
    cons: [
      'Hot & humid',
      'Language barrier initially',
      'Fewer late-night options',
    ],
  },
];

const generalTips = [
  'Visit the city before finalizing accommodation',
  'Join Facebook/Telegram groups for city',
  'Keep 2-3 months rent ready as deposit',
  'Prefer PGs near office for first few months',
  'Get local SIM and bank account immediately',
  'Explore the city on weekends',
];

export default function RelocationPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <MapPin className="mr-1 h-3 w-3" />
            City Guides
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Relocation Guide for Freshers
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Everything you need to know about moving to a new city for your
            first job.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-8">
          {cities.map((city) => (
            <Card
              key={city.name}
              className="overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="border-b bg-primary/10 p-4">
                  <h2 className="flex items-center gap-2 text-2xl font-bold">
                    <MapPin className="h-6 w-6" />
                    {city.name}
                  </h2>
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <p className="mb-1 text-sm font-semibold text-muted-foreground">
                      Popular Areas
                    </p>
                    <p>{city.areas}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-muted-foreground">
                      Rent (1BHK/PG)
                    </p>
                    <p>{city.rent}/month</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-muted-foreground">
                      Transport
                    </p>
                    <p>{city.transport}</p>
                  </div>
                  <div className="md:col-span-2 lg:col-span-3">
                    <p className="mb-1 text-sm font-semibold text-muted-foreground">
                      Major Companies
                    </p>
                    <p>{city.companies}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-green-600">
                      Pros
                    </p>
                    <ul className="space-y-1">
                      {city.pros.map((p, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-red-600">
                      Cons
                    </p>
                    <ul className="space-y-1">
                      {city.cons.map((c, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Info className="h-4 w-4 text-red-500" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container bg-muted/30 py-12">
        <h2 className="mb-6 text-center text-2xl font-bold">
          General Relocation Tips
        </h2>
        <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2 lg:grid-cols-3">
          {generalTips.map((tip, i) => (
            <Card key={i}>
              <CardContent className="flex items-center gap-3 p-4">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">{tip}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Home className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">Prepare for Your Move</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                asChild
              >
                <Link href="/freshers/first-job-guide">
                  First Job Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/tools/student-budget-planner">Budget Planner</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
