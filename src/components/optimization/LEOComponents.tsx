/**
 * LEO - Local Engine Optimization Components
 * Optimizes for local/geo-targeted search results
 */

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  MapPin,
  Building2,
  Briefcase,
  Users,
  TrendingUp,
  Clock,
  Star,
} from 'lucide-react';
import Link from 'next/link';

// Indian cities with job market data
export const indianCities = {
  bangalore: {
    name: 'Bangalore',
    state: 'Karnataka',
    tier: 1,
    techHub: true,
    avgSalary: '₹12-45 LPA',
    topCompanies: ['Google', 'Amazon', 'Microsoft', 'Flipkart'],
  },
  hyderabad: {
    name: 'Hyderabad',
    state: 'Telangana',
    tier: 1,
    techHub: true,
    avgSalary: '₹10-40 LPA',
    topCompanies: ['Google', 'Amazon', 'Microsoft', 'Infosys'],
  },
  pune: {
    name: 'Pune',
    state: 'Maharashtra',
    tier: 1,
    techHub: true,
    avgSalary: '₹8-35 LPA',
    topCompanies: ['Infosys', 'TCS', 'Wipro', 'Tech Mahindra'],
  },
  chennai: {
    name: 'Chennai',
    state: 'Tamil Nadu',
    tier: 1,
    techHub: true,
    avgSalary: '₹8-35 LPA',
    topCompanies: ['TCS', 'Infosys', 'Cognizant', 'HCL'],
  },
  mumbai: {
    name: 'Mumbai',
    state: 'Maharashtra',
    tier: 1,
    techHub: false,
    avgSalary: '₹10-40 LPA',
    topCompanies: ['TCS', 'Reliance', 'JPMorgan', 'Goldman Sachs'],
  },
  delhi: {
    name: 'Delhi NCR',
    state: 'Delhi',
    tier: 1,
    techHub: true,
    avgSalary: '₹10-40 LPA',
    topCompanies: ['Google', 'Adobe', 'Microsoft', 'Zomato'],
  },
  gurugram: {
    name: 'Gurugram',
    state: 'Haryana',
    tier: 1,
    techHub: true,
    avgSalary: '₹12-45 LPA',
    topCompanies: ['Google', 'Microsoft', 'Uber', 'PhonePe'],
  },
  noida: {
    name: 'Noida',
    state: 'Uttar Pradesh',
    tier: 1,
    techHub: true,
    avgSalary: '₹8-30 LPA',
    topCompanies: ['HCL', 'TCS', 'Infosys', 'Samsung'],
  },
  kolkata: {
    name: 'Kolkata',
    state: 'West Bengal',
    tier: 2,
    techHub: false,
    avgSalary: '₹6-25 LPA',
    topCompanies: ['TCS', 'Cognizant', 'Wipro', 'IBM'],
  },
  ahmedabad: {
    name: 'Ahmedabad',
    state: 'Gujarat',
    tier: 2,
    techHub: false,
    avgSalary: '₹6-25 LPA',
    topCompanies: ['TCS', 'Infosys', 'Adani', 'Reliance'],
  },
};

/**
 * LocalBusiness Schema Generator
 * For pages with location-specific content
 */
export function LocalBusinessSchema({
  name,
  description,
  address,
  city,
  state,
  country = 'India',
  phone,
  url,
  openingHours,
}: {
  name: string;
  description: string;
  address?: string;
  city: string;
  state: string;
  country?: string;
  phone?: string;
  url: string;
  openingHours?: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name,
          description,
          address: {
            '@type': 'PostalAddress',
            addressLocality: city,
            addressRegion: state,
            addressCountry: country,
            streetAddress: address,
          },
          telephone: phone,
          url,
          openingHours,
        }),
      }}
    />
  );
}

/**
 * City Job Market Card
 * Shows job market info for a specific city
 */
export function CityJobMarketCard({
  cityKey,
  showLink = true,
}: {
  cityKey: keyof typeof indianCities;
  showLink?: boolean;
}) {
  const city = indianCities[cityKey];

  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">{city.name}</CardTitle>
          </div>
          <div className="flex gap-1">
            <Badge variant="outline">Tier {city.tier}</Badge>
            {city.techHub && (
              <Badge className="bg-green-100 text-green-800">Tech Hub</Badge>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{city.state}</p>
      </CardHeader>
      <CardContent>
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-green-600" />
          <span className="font-semibold text-green-600">{city.avgSalary}</span>
          <span className="text-sm text-muted-foreground">avg tech salary</span>
        </div>
        <div className="mb-3">
          <p className="mb-1 text-sm font-medium">Top Companies:</p>
          <div className="flex flex-wrap gap-1">
            {city.topCompanies.map((company) => (
              <Badge
                key={company}
                variant="secondary"
                className="text-xs"
              >
                {company}
              </Badge>
            ))}
          </div>
        </div>
        {showLink && (
          <Link
            href={`/jobs/${cityKey}`}
            className="text-sm text-primary hover:underline"
          >
            View jobs in {city.name} →
          </Link>
        )}
      </CardContent>
    </Card>
  );
}

/**
 * City Comparison Table
 * Compare job markets across cities
 */
export function CityComparisonTable({
  cities,
}: {
  cities: (keyof typeof indianCities)[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted">
            <th className="p-3 text-left font-semibold">City</th>
            <th className="p-3 text-left font-semibold">State</th>
            <th className="p-3 text-center font-semibold">Tier</th>
            <th className="p-3 text-center font-semibold">Tech Hub</th>
            <th className="p-3 text-left font-semibold">Avg Salary</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((cityKey) => {
            const city = indianCities[cityKey];
            return (
              <tr
                key={cityKey}
                className="border-b"
              >
                <td className="p-3 font-medium">
                  <Link
                    href={`/jobs/${cityKey}`}
                    className="hover:text-primary"
                  >
                    {city.name}
                  </Link>
                </td>
                <td className="p-3 text-muted-foreground">{city.state}</td>
                <td className="p-3 text-center">
                  <Badge variant="outline">Tier {city.tier}</Badge>
                </td>
                <td className="p-3 text-center">
                  {city.techHub ? (
                    <Star className="mx-auto h-4 w-4 text-yellow-500" />
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </td>
                <td className="p-3 font-medium text-green-600">
                  {city.avgSalary}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Geo-Targeted Content Block
 * Shows different content based on detected/selected location
 */
export function GeoTargetedContent({
  defaultCity = 'bangalore',
  children,
}: {
  defaultCity?: keyof typeof indianCities;
  children: (
    city: (typeof indianCities)[keyof typeof indianCities],
  ) => React.ReactNode;
}) {
  // In a real implementation, this would detect user location
  const city = indianCities[defaultCity];
  return <>{children(city)}</>;
}

/**
 * Popular Cities Grid
 * Grid of top cities for job seekers
 */
export function PopularCitiesGrid({
  title = 'Explore Jobs by City',
  limit = 8,
}: {
  title?: string;
  limit?: number;
}) {
  const cityKeys = Object.keys(indianCities).slice(
    0,
    limit,
  ) as (keyof typeof indianCities)[];

  return (
    <section className="py-12">
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cityKeys.map((cityKey) => (
          <Link
            key={cityKey}
            href={`/jobs/${cityKey}`}
            className="group flex items-center gap-3 rounded-lg border p-4 transition-all hover:border-primary hover:shadow-md"
          >
            <MapPin className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold group-hover:text-primary">
                {indianCities[cityKey].name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {indianCities[cityKey].avgSalary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default {
  LocalBusinessSchema,
  CityJobMarketCard,
  CityComparisonTable,
  GeoTargetedContent,
  PopularCitiesGrid,
  indianCities,
};
