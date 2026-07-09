/**
 * VEO - Video Engine Optimization Components
 * Optimizes for video search and YouTube discovery
 */

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Play,
  Clock,
  Eye,
  ThumbsUp,
  Share2,
  Bookmark,
  ExternalLink,
  Youtube,
  Video,
} from 'lucide-react';

/**
 * VideoObject Schema
 * For embedding and SEO of video content
 */
export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  embedUrl,
  contentUrl,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string; // ISO 8601 format, e.g., "PT5M30S"
  embedUrl?: string;
  contentUrl?: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'VideoObject',
          name,
          description,
          thumbnailUrl,
          uploadDate,
          duration,
          embedUrl,
          contentUrl,
          publisher: {
            '@type': 'Organization',
            name: 'Sproutern',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.sproutern.com/logo.jpg',
            },
          },
        }),
      }}
    />
  );
}

/**
 * YouTube Video Embed Card
 * Optimized video embedding with schema
 */
export function YouTubeEmbed({
  videoId,
  title,
  description,
  thumbnailUrl,
  duration,
  views,
  uploadDate,
  showSchema = true,
}: {
  videoId: string;
  title: string;
  description?: string;
  thumbnailUrl?: string;
  duration?: string;
  views?: number;
  uploadDate?: string;
  showSchema?: boolean;
}) {
  const thumbnail =
    thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      {showSchema && uploadDate && duration && (
        <VideoSchema
          name={title}
          description={description || title}
          thumbnailUrl={thumbnail}
          uploadDate={uploadDate}
          duration={duration}
          embedUrl={embedUrl}
        />
      )}
      <Card className="overflow-hidden">
        <div className="relative aspect-video">
          <iframe
            src={`${embedUrl}?rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="line-clamp-2 font-semibold">{title}</h3>
          {(duration || views) && (
            <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
              {duration && (
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {duration}
                </span>
              )}
              {views && (
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {views.toLocaleString()} views
                </span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

/**
 * Video Thumbnail Card
 * Click-to-play video preview
 */
export function VideoThumbnailCard({
  videoId,
  title,
  duration,
  views,
  channel,
  onClick,
}: {
  videoId: string;
  title: string;
  duration?: string;
  views?: number;
  channel?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-lg border transition-all hover:shadow-lg"
      onClick={onClick}
    >
      <div className="relative aspect-video">
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
        {duration && (
          <Badge className="absolute bottom-2 right-2 bg-black/80">
            {duration}
          </Badge>
        )}
      </div>
      <div className="p-3">
        <h4 className="line-clamp-2 font-semibold group-hover:text-primary">
          {title}
        </h4>
        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          {channel && <span>{channel}</span>}
          {views && <span>• {views.toLocaleString()} views</span>}
        </div>
      </div>
    </div>
  );
}

/**
 * Video Playlist Section
 * Grid of related videos
 */
export function VideoPlaylist({
  title,
  videos,
  youtubeChannelUrl,
}: {
  title: string;
  videos: {
    videoId: string;
    title: string;
    duration?: string;
    views?: number;
  }[];
  youtubeChannelUrl?: string;
}) {
  return (
    <section className="py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <Youtube className="h-6 w-6 text-red-600" />
          {title}
        </h2>
        {youtubeChannelUrl && (
          <Button
            asChild
            variant="outline"
            size="sm"
          >
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Subscribe
            </a>
          </Button>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <a
            key={video.videoId}
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <VideoThumbnailCard {...video} />
          </a>
        ))}
      </div>
    </section>
  );
}

/**
 * Video CTA Banner
 * Promotes video content
 */
export function VideoCTABanner({
  title,
  description,
  videoUrl,
  thumbnailUrl,
  ctaText = 'Watch Now',
}: {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  ctaText?: string;
}) {
  return (
    <Card className="overflow-hidden bg-gradient-to-r from-red-600 to-red-700">
      <div className="flex flex-col md:flex-row">
        <div className="relative aspect-video md:w-1/3">
          <img
            src={thumbnailUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
              <Play className="h-8 w-8 text-red-600" />
            </div>
          </div>
        </div>
        <div className="flex-1 p-6 text-white">
          <Badge className="mb-2 bg-white/20">Video Guide</Badge>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-white/80">{description}</p>
          <Button
            asChild
            className="mt-4 bg-white text-red-600 hover:bg-white/90"
          >
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="mr-2 h-4 w-4" />
              {ctaText}
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default {
  VideoSchema,
  YouTubeEmbed,
  VideoThumbnailCard,
  VideoPlaylist,
  VideoCTABanner,
};
