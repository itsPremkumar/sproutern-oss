import React from 'react';
import { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Home,
  Wallet,
  Bus,
  Coffee,
  AlertTriangle,
  CheckCircle,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Fresher's Guide to Moving to Bangalore (2025)",
  description:
    'The ultimate survival guide for freshers moving to Bangalore. Best areas to live (HSR, Whitefield, E-City), PG costs, transport tips, and budget hacks.',
};

export default function BangaloreGuidePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge
          variant="outline"
          className="mb-4 border-blue-200 bg-blue-50 text-blue-600"
        >
          City Guides
        </Badge>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">
          The Fresher's Guide to{' '}
          <span className="text-blue-600">Bangalore</span>
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
          So you just got your offer letter for a company in "The Silicon Valley
          of India". Excited? Nervous? Here is everything you need to know about
          survive your first year in Bengaluru without going broke.
        </p>
      </div>

      <Tabs
        defaultValue="areas"
        className="w-full"
      >
        <TabsList className="mb-8 grid h-auto w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <TabsTrigger
            value="areas"
            className="py-3"
          >
            By Work Location
          </TabsTrigger>
          <TabsTrigger
            value="cost"
            className="py-3"
          >
            Cost of Living
          </TabsTrigger>
          <TabsTrigger
            value="transport"
            className="py-3"
          >
            Commute Hacks
          </TabsTrigger>
          <TabsTrigger
            value="scams"
            className="py-3"
          >
            Scams to Void
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Areas */}
        <TabsContent
          value="areas"
          className="space-y-6"
        >
          <div className="mb-6 rounded-xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h3 className="mb-2 flex items-center text-xl font-bold">
              <MapPin className="mr-2 h-5 w-5 text-red-500" />
              Rule #1: Live Near Your Office
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Bangalore traffic is not a meme; it's a lifestyle. Living 5km away
              might mean a 45-minute commute. Always choose a PG within walking
              distance or a direct bus/metro line to your office.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* E-City */}
            <Card>
              <CardHeader>
                <CardTitle>Electronic City (E-City)</CardTitle>
                <CardDescription>
                  Best for: Infosys, Wipro, TCS, HCL
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Vibe:</strong> Very corporate, slightly isolated from
                  proper city.
                </p>
                <p>
                  <strong>PG Cost:</strong> ₹6k - ₹10k (Very Affordable)
                </p>
                <p>
                  <strong>Best Areas:</strong> Phase 1 (Near Neeladri Rd) for
                  food/life.
                </p>
              </CardContent>
            </Card>

            {/* Whitefield */}
            <Card>
              <CardHeader>
                <CardTitle>Whitefield / ITPL</CardTitle>
                <CardDescription>
                  Best for: Tesco, Capgemini, Accenture, startups
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Vibe:</strong> Premium malls, dusty roads, standalone
                  city.
                </p>
                <p>
                  <strong>PG Cost:</strong> ₹8k - ₹15k (Mid-High)
                </p>
                <p>
                  <strong>Best Areas:</strong> Kundalahalli Gate, Brookfield.
                </p>
              </CardContent>
            </Card>

            {/* ORR */}
            <Card>
              <CardHeader>
                <CardTitle>ORR (Marathahalli to Bellandur)</CardTitle>
                <CardDescription>
                  Best for: Wells Fargo, JPMC, Intel, flipkart
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Vibe:</strong> Dusty, crowded, but central.
                </p>
                <p>
                  <strong>PG Cost:</strong> ₹8k - ₹12k (Moderate)
                </p>
                <p>
                  <strong>Best Areas:</strong> Munnekolala (Cheap), Green Glen
                  (Premium).
                </p>
              </CardContent>
            </Card>

            {/* HSR */}
            <Card>
              <CardHeader>
                <CardTitle>HSR Layout</CardTitle>
                <CardDescription>
                  Best for: Startup HQs (Swiggy, Udaan, etc)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Vibe:</strong> Startups, cafes, young crowd, posh.
                </p>
                <p>
                  <strong>PG Cost:</strong> ₹10k - ₹20k (Expensive)
                </p>
                <p>
                  <strong>Best Areas:</strong> Sector 1, 2, 3 (Near Agara).
                </p>
              </CardContent>
            </Card>

            {/* Manyata */}
            <Card>
              <CardHeader>
                <CardTitle>Manyata Tech Park (Hebbal)</CardTitle>
                <CardDescription>
                  Best for: IBM, Philips, Lowe's
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Vibe:</strong> Great connectivity to airport, decent
                  residential.
                </p>
                <p>
                  <strong>PG Cost:</strong> ₹7k - ₹12k (Moderate)
                </p>
                <p>
                  <strong>Best Areas:</strong> Nagawara on the back gate of
                  Manyata.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 2: Cost */}
        <TabsContent
          value="cost"
          className="space-y-6"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 flex items-center text-2xl font-bold">
                <Wallet className="mr-3 h-6 w-6 text-green-600" />
                Estimated Monthly Budget (Fresher)
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded bg-slate-100 p-3 dark:bg-slate-800">
                  <span className="font-semibold">PG Rent (Twin Sharing)</span>
                  <span>₹8,000 - ₹12,000</span>
                </div>
                <div className="flex items-center justify-between rounded bg-slate-100 p-3 dark:bg-slate-800">
                  <span className="font-semibold">
                    Food (Ordering + Weekends)
                  </span>
                  <span>₹4,000 - ₹6,000</span>
                </div>
                <div className="flex items-center justify-between rounded bg-slate-100 p-3 dark:bg-slate-800">
                  <span className="font-semibold">
                    Transport (Bus/Metro/Uber)
                  </span>
                  <span>₹1,500 - ₹3,000</span>
                </div>
                <div className="flex items-center justify-between rounded bg-slate-100 p-3 dark:bg-slate-800">
                  <span className="font-semibold">Mobile/Internet</span>
                  <span>₹500</span>
                </div>
                <div className="flex items-center justify-between rounded bg-slate-100 p-3 dark:bg-slate-800">
                  <span className="font-semibold">Fun/Misc</span>
                  <span>₹3,000</span>
                </div>
                <div className="flex items-center justify-between rounded bg-blue-100 p-4 text-lg font-bold dark:bg-blue-900">
                  <span>TOTAL</span>
                  <span>₹17,000 - ₹25,000</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-500">
                *Note: Most PGs include breakfast and dinner in the rent.
              </p>
            </div>

            <div>
              <h3 className="mb-6 flex items-center text-2xl font-bold">
                <Home className="mr-3 h-6 w-6 text-orange-600" />
                Security Deposit Reality
              </h3>
              <Card>
                <CardContent className="space-y-4 pt-6">
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>For PGs:</strong> Usually 1 month rent. Mostly
                    refundable (minus ₹1k-₹2k maintenance).
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>For Flats:</strong> This is where Bangalore hurts.
                    Landlords ask for <strong>5 to 10 months of rent</strong> as
                    deposit.
                  </p>
                  <div className="rounded border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-900/20">
                    <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
                      Pro Tip: Don't rent a flat immediately. Stay in a PG for
                      3-6 months, find good roommates, save up for the deposit,
                      and THEN move to a flat.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Tab 3: Transport */}
        <TabsContent
          value="transport"
          className="space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bus className="mr-2 h-5 w-5 text-blue-500" /> BMTC Buses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">
                  Cheap but crowded. AC buses (Volvo - Blue color) are
                  comfortable but cost 2x more.
                </p>
                <p className="text-sm font-semibold">
                  App to use:{' '}
                  <span className="text-blue-600">Namma Yatri / Tummoc</span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-purple-500" /> Namma Metro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">
                  Fastest way to travel North-South or East-West. Doesn't cover
                  ORR/E-City well (yet).
                </p>
                <p className="text-sm font-semibold">
                  Card:{' '}
                  <span className="text-purple-600">
                    Buy a Smart Card (₹50)
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="mr-2 h-5 w-5 text-green-500" /> Autos/Cabs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">
                  Never take an auto without an app. They will quote ₹500 for
                  2km.
                </p>
                <p className="text-sm font-semibold">
                  App to use:{' '}
                  <span className="text-green-600">
                    Namma Yatri (Best), Uber, Rapido
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 4: Scams */}
        <TabsContent
          value="scams"
          className="space-y-6"
        >
          <h3 className="mb-6 flex items-center text-2xl font-bold text-red-600">
            <AlertTriangle className="mr-3 h-6 w-6" />
            Common Scams to Avoid
          </h3>

          <div className="space-y-4">
            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <CardTitle>1. The "Token Amount" Scam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">
                  You see a beautiful flat online for cheap. The owner says "lot
                  of demand, GPay me ₹2000 to book it".
                  <strong>NEVER pay without visiting.</strong> The flat usually
                  doesn't exist.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <CardTitle>2. The "Meter Down" Auto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">
                  Autos waiting at bus stops/stations will refuse apps and ask
                  for "Meter + ₹50" or random high prices.
                  <strong>Walk 100m away</strong> and book on Namma Yatri/Uber.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <CardTitle>3. The "Brokerage" Trap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">
                  Brokers might show you bad houses first to make the decent one
                  look amazing.
                  <strong>
                    Always negotiate brokerage (usually 1 month rent) down to
                    15-20 days.
                  </strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Footer CTA */}
      <div className="mt-16 rounded-2xl bg-indigo-50 px-6 py-10 text-center dark:bg-indigo-900/20">
        <h2 className="mb-4 text-2xl font-bold">Moving to another city?</h2>
        <p className="mb-6 text-slate-600 dark:text-slate-400">
          We are building guides for Pune, Hyderabad, and Gurgaon. Stay tuned!
        </p>
        <Button
          variant="outline"
          asChild
        >
          <Link href="/resources/email-templates">
            View Corporate Email Templates
          </Link>
        </Button>
      </div>
    </div>
  );
}
