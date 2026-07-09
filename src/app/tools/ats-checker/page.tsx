import { getToolMetadata } from '@/lib/seo/get-tool-metadata';
import ATSCheckerClient from './client';

export const metadata = getToolMetadata('ats-checker');

export default function ATSCheckerPage() {
  return <ATSCheckerClient />;
}
