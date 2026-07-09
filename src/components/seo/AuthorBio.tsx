import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

interface AuthorBioProps {
  name?: string;
  role?: string;
  bio?: string;
  image?: string;
  expertise?: string[];
  credentials?: string;
  linkedIn?: string;
  twitter?: string;
  className?: string;
}

export function AuthorBio({
  name = 'Sproutern Team',
  role = 'Editorial Team',
  bio = 'The Sproutern Team consists of career experts and technologists dedicated to helping students and freshers build successful careers through free tools and resources.',
  image = '/logo.jpg',
  expertise = ['Career Guidance', 'Resume Writing', 'Interview Preparation'],
  credentials = 'Career Experts, Sproutern Editorial Team',
  linkedIn = 'https://www.linkedin.com/company/sproutern',
  twitter,
  className = '',
}: AuthorBioProps) {
  return (
    <div
      className={`author-bio my-8 rounded-lg border bg-gray-50 p-6 ${className}`}
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="flex items-start gap-4">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="rounded-full"
          itemProp="image"
        />
        <div className="flex-1">
          <h3
            className="mb-1 text-xl font-bold text-gray-900"
            itemProp="name"
          >
            About {name}
          </h3>
          <p
            className="mb-3 text-sm text-purple-600"
            itemProp="jobTitle"
          >
            {role}
          </p>
          <p
            className="mb-3 leading-relaxed text-gray-700"
            itemProp="description"
          >
            {bio}
          </p>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-semibold">Expertise:</span>{' '}
              <span itemProp="knowsAbout">{expertise.join(', ')}</span>
            </div>
            <div>
              <span className="font-semibold">Credentials:</span> {credentials}
            </div>
          </div>
          {(linkedIn || twitter) && (
            <div className="mt-4 flex gap-3">
              {linkedIn && (
                <Link
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                  itemProp="sameAs"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              )}
              {twitter && (
                <Link
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500"
                  itemProp="sameAs"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
