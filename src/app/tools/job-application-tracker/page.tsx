'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Plus,
  Trash2,
  Edit2,
  ExternalLink,
  Filter,
} from 'lucide-react';
import Link from 'next/link';

type ApplicationStatus =
  | 'applied'
  | 'screening'
  | 'interview'
  | 'offer'
  | 'rejected'
  | 'accepted';

interface JobApplication {
  id: string;
  company: string;
  position: string;
  status: ApplicationStatus;
  dateApplied: string;
  salary?: string;
  notes?: string;
  link?: string;
}

const statusConfig: Record<
  ApplicationStatus,
  { label: string; color: string; bgColor: string }
> = {
  applied: {
    label: 'Applied',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-950',
  },
  screening: {
    label: 'Screening',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100 dark:bg-yellow-950',
  },
  interview: {
    label: 'Interview',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-950',
  },
  offer: {
    label: 'Offer',
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-950',
  },
  rejected: {
    label: 'Rejected',
    color: 'text-red-600',
    bgColor: 'bg-red-100 dark:bg-red-950',
  },
  accepted: {
    label: 'Accepted',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100 dark:bg-emerald-950',
  },
};

export default function JobApplicationTrackerClient() {
  const [applications, setApplications] = useState<JobApplication[]>([
    {
      id: '1',
      company: 'Google',
      position: 'Software Engineer',
      status: 'interview',
      dateApplied: '2024-12-20',
      salary: '₹30L',
      notes: 'Technical round scheduled',
    },
    {
      id: '2',
      company: 'Microsoft',
      position: 'Frontend Developer',
      status: 'applied',
      dateApplied: '2024-12-22',
    },
    {
      id: '3',
      company: 'Amazon',
      position: 'SDE 2',
      status: 'screening',
      dateApplied: '2024-12-18',
      salary: '₹35L',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState<ApplicationStatus | 'all'>(
    'all',
  );
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    company: '',
    position: '',
    status: 'applied' as ApplicationStatus,
    dateApplied: new Date().toISOString().split('T')[0],
    salary: '',
    notes: '',
    link: '',
  });

  const addApplication = () => {
    if (!formData.company || !formData.position) return;

    if (editingId) {
      setApplications(
        applications.map((app) =>
          app.id === editingId ? { ...formData, id: editingId } : app,
        ),
      );
      setEditingId(null);
    } else {
      setApplications([
        ...applications,
        { ...formData, id: Date.now().toString() },
      ]);
    }

    setFormData({
      company: '',
      position: '',
      status: 'applied',
      dateApplied: new Date().toISOString().split('T')[0],
      salary: '',
      notes: '',
      link: '',
    });
    setShowForm(false);
  };

  const editApplication = (app: JobApplication) => {
    setFormData({
      company: app.company,
      position: app.position,
      status: app.status,
      dateApplied: app.dateApplied,
      salary: app.salary || '',
      notes: app.notes || '',
      link: app.link || '',
    });
    setEditingId(app.id);
    setShowForm(true);
  };

  const deleteApplication = (id: string) => {
    setApplications(applications.filter((app) => app.id !== id));
  };

  const updateStatus = (id: string, status: ApplicationStatus) => {
    setApplications(
      applications.map((app) => (app.id === id ? { ...app, status } : app)),
    );
  };

  const filteredApplications =
    filterStatus === 'all'
      ? applications
      : applications.filter((app) => app.status === filterStatus);

  const stats = {
    total: applications.length,
    active: applications.filter(
      (a) => !['rejected', 'accepted'].includes(a.status),
    ).length,
    interviews: applications.filter((a) => a.status === 'interview').length,
    offers: applications.filter((a) => ['offer', 'accepted'].includes(a.status))
      .length,
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Briefcase className="h-4 w-4" />
            Free Career Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Job Application Tracker
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Track your job applications, interviews, and offers in one place.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="py-4 text-center">
              <div className="text-3xl font-bold">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4 text-center">
              <div className="text-3xl font-bold text-blue-600">
                {stats.active}
              </div>
              <div className="text-sm text-muted-foreground">Active</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4 text-center">
              <div className="text-3xl font-bold text-purple-600">
                {stats.interviews}
              </div>
              <div className="text-sm text-muted-foreground">Interviews</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4 text-center">
              <div className="text-3xl font-bold text-green-600">
                {stats.offers}
              </div>
              <div className="text-sm text-muted-foreground">Offers</div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={filterStatus}
              onChange={(e) =>
                setFilterStatus(e.target.value as ApplicationStatus | 'all')
              }
              className="rounded-lg border bg-background px-3 py-2"
            >
              <option value="all">All Status</option>
              {Object.entries(statusConfig).map(([key, config]) => (
                <option
                  key={key}
                  value={key}
                >
                  {config.label}
                </option>
              ))}
            </select>
          </div>
          <Button
            onClick={() => {
              setShowForm(true);
              setEditingId(null);
            }}
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Application
          </Button>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">
                {editingId ? 'Edit' : 'Add'} Application
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Company Name *"
                  className="rounded-lg border bg-muted/50 p-3 outline-none"
                />
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                  placeholder="Position *"
                  className="rounded-lg border bg-muted/50 p-3 outline-none"
                />
                <input
                  type="date"
                  value={formData.dateApplied}
                  onChange={(e) =>
                    setFormData({ ...formData, dateApplied: e.target.value })
                  }
                  className="rounded-lg border bg-muted/50 p-3 outline-none"
                />
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as ApplicationStatus,
                    })
                  }
                  className="rounded-lg border bg-background p-3"
                >
                  {Object.entries(statusConfig).map(([key, config]) => (
                    <option
                      key={key}
                      value={key}
                    >
                      {config.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={formData.salary}
                  onChange={(e) =>
                    setFormData({ ...formData, salary: e.target.value })
                  }
                  placeholder="Expected Salary"
                  className="rounded-lg border bg-muted/50 p-3 outline-none"
                />
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) =>
                    setFormData({ ...formData, link: e.target.value })
                  }
                  placeholder="Job Link"
                  className="rounded-lg border bg-muted/50 p-3 outline-none"
                />
              </div>
              <textarea
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                placeholder="Notes..."
                className="w-full rounded-lg border bg-muted/50 p-3 outline-none"
                rows={2}
              />
              <div className="flex gap-2">
                <Button onClick={addApplication}>
                  {editingId ? 'Update' : 'Add'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Applications List */}
        <div className="space-y-3">
          {filteredApplications.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Briefcase className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <p className="text-muted-foreground">
                  No applications yet. Start tracking your job search!
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredApplications.map((app) => (
              <Card key={app.id}>
                <CardContent className="flex items-center justify-between py-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{app.company}</h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusConfig[app.status].bgColor} ${statusConfig[app.status].color}`}
                      >
                        {statusConfig[app.status].label}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{app.position}</p>
                    <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>
                        Applied:{' '}
                        {new Date(app.dateApplied).toLocaleDateString()}
                      </span>
                      {app.salary && <span>Salary: {app.salary}</span>}
                    </div>
                    {app.notes && <p className="mt-2 text-sm">{app.notes}</p>}
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={app.status}
                      onChange={(e) =>
                        updateStatus(
                          app.id,
                          e.target.value as ApplicationStatus,
                        )
                      }
                      className="rounded border bg-background px-2 py-1 text-sm"
                    >
                      {Object.entries(statusConfig).map(([key, config]) => (
                        <option
                          key={key}
                          value={key}
                        >
                          {config.label}
                        </option>
                      ))}
                    </select>
                    {app.link && (
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                      >
                        <a
                          href={app.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => editApplication(app)}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteApplication(app.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Resume Builder',
                href: '/tools/resume-builder',
                desc: 'Create your resume',
              },
              {
                title: 'Career Quiz',
                href: '/tools/career-quiz',
                desc: 'Find your career path',
              },
              {
                title: 'Salary Calculator',
                href: '/tools/salary-calculator',
                desc: 'Calculate your salary',
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
