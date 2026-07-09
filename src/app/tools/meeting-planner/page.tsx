import { Metadata } from 'next';
import MeetingPlannerClient from './MeetingPlannerClient';

export const metadata: Metadata = {
  title: 'Meeting Planner | Schedule Meeting Times',
  description:
    'Find the best meeting times across time zones. Schedule meetings with participants from around the world easily.',
  keywords:
    'meeting planner, meeting scheduler, time zone meeting, schedule meeting, meeting time finder',
  alternates: { canonical: 'https://www.sproutern.com/tools/meeting-planner' },
};

export default function MeetingPlannerPage() {
  return <MeetingPlannerClient />;
}
