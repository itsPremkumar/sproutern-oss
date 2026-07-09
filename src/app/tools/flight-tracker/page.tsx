'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Plane,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Search,
  ExternalLink,
  Globe,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';

const popularAirlines = [
  {
    name: 'Air India',
    code: 'AI',
    url: 'https://www.airindia.in/flight-status.htm',
  },
  {
    name: 'IndiGo',
    code: '6E',
    url: 'https://www.goindigo.in/flight-status.html',
  },
  {
    name: 'SpiceJet',
    code: 'SG',
    url: 'https://www.spicejet.com/flight-status',
  },
  {
    name: 'Vistara',
    code: 'UK',
    url: 'https://www.airvistara.com/in/en/travel-info/flight-status',
  },
  {
    name: 'Emirates',
    code: 'EK',
    url: 'https://www.emirates.com/in/english/manage-booking/flight-status/',
  },
  {
    name: 'Qatar Airways',
    code: 'QR',
    url: 'https://www.qatarairways.com/en-in/travel-info/flight-status.html',
  },
  {
    name: 'Singapore Airlines',
    code: 'SQ',
    url: 'https://www.singaporeair.com/en_UK/in/travel-info/flight-status/',
  },
  {
    name: 'Lufthansa',
    code: 'LH',
    url: 'https://www.lufthansa.com/in/en/flight-status',
  },
];

const trackingServices = [
  {
    name: 'FlightAware',
    url: 'https://flightaware.com/',
    desc: 'Real-time flight tracking worldwide',
  },
  {
    name: 'Flightradar24',
    url: 'https://www.flightradar24.com/',
    desc: 'Live flight tracking with 3D view',
  },
  {
    name: 'FlightStats',
    url: 'https://www.flightstats.com/',
    desc: 'Flight status and delay information',
  },
];

const airports = [
  { city: 'Delhi', code: 'DEL' },
  { city: 'Mumbai', code: 'BOM' },
  { city: 'Bangalore', code: 'BLR' },
  { city: 'Chennai', code: 'MAA' },
  { city: 'Hyderabad', code: 'HYD' },
  { city: 'Kolkata', code: 'CCU' },
];

export default function FlightTrackerClient() {
  const [flightNumber, setFlightNumber] = useState('');
  const [selectedAirline, setSelectedAirline] = useState('');

  const handleTrack = () => {
    if (flightNumber) {
      window.open(
        `https://www.flightaware.com/live/flight/${flightNumber}`,
        '_blank',
      );
    }
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Plane className="h-4 w-4" />
            Free Travel Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Flight Tracker
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Track flights in real-time. Get status, delays, and arrival
            information.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            {
              icon: CheckCircle,
              text: '100% Free',
              bg: 'bg-green-50 dark:bg-green-950',
              color: 'text-green-600',
            },
            {
              icon: Clock,
              text: 'Real-time',
              bg: 'bg-blue-50 dark:bg-blue-950',
              color: 'text-blue-600',
            },
            {
              icon: Users,
              text: '8 Airlines',
              bg: 'bg-purple-50 dark:bg-purple-950',
              color: 'text-purple-600',
            },
            {
              icon: Globe,
              text: 'Global Coverage',
              bg: 'bg-orange-50 dark:bg-orange-950',
              color: 'text-orange-600',
            },
          ].map(({ icon: Icon, text, bg, color }) => (
            <div
              key={text}
              className={`flex items-center gap-2 rounded-lg ${bg} p-3`}
            >
              <Icon className={`h-5 w-5 ${color}`} />
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Track by Flight Number</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <input
                type="text"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                placeholder="e.g., AI302, 6E2341"
                className="flex-1 rounded-lg border bg-muted/50 p-4 text-xl font-bold uppercase outline-none"
              />
              <Button
                onClick={handleTrack}
                disabled={!flightNumber}
                size="lg"
                className="gap-2"
              >
                <Search className="h-4 w-4" />
                Track Flight
              </Button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter the airline code + flight number (e.g., AI302 for Air India
              302)
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Track by Airline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-4">
              {popularAirlines.map((airline) => (
                <a
                  key={airline.code}
                  href={airline.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border p-3 transition-shadow hover:shadow-md"
                >
                  <div>
                    <div className="font-medium">{airline.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {airline.code}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">
              Live Flight Tracking Services
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {trackingServices.map((service) => (
              <a
                key={service.name}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border p-4 transition-shadow hover:shadow-md"
              >
                <div className="mb-1 flex items-center gap-2 font-semibold">
                  {service.name} <ExternalLink className="h-4 w-4" />
                </div>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </a>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Indian Airport Codes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 md:grid-cols-3">
              {airports.map((ap) => (
                <div
                  key={ap.code}
                  className="flex items-center gap-2 rounded-lg bg-muted/50 p-3"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">{ap.city}</span>
                  <span className="ml-auto font-mono text-muted-foreground">
                    {ap.code}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Time Calculator',
                href: '/tools/time-calculator',
                desc: 'Calculate time',
              },
              {
                title: 'Meeting Planner',
                href: '/tools/meeting-planner',
                desc: 'Plan across timezones',
              },
              {
                title: 'Currency Converter',
                href: '/tools/currency-converter',
                desc: 'Convert currencies',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
