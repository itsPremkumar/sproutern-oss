'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Plus,
  Trash2,
  Briefcase,
  Calendar,
  Building2,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  FileText,
  ExternalLink,
} from 'lucide-react';

interface Application {
  id: string;
  company: string;
  position: string;
  location: string;
  status:
    | 'applied'
    | 'screening'
    | 'interview'
    | 'offer'
    | 'rejected'
    | 'withdrawn';
  appliedDate: string;
  notes: string;
  link: string;
  salary: string;
}

const statusConfig = {
  applied: {
    label: 'Applied',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    icon: Clock,
  },
  screening: {
    label: 'Screening',
    color:
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    icon: AlertCircle,
  },
  interview: {
    label: 'Interview',
    color:
      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    icon: Briefcase,
  },
  offer: {
    label: 'Offer',
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    icon: CheckCircle,
  },
  rejected: {
    label: 'Rejected',
    color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    icon: XCircle,
  },
  withdrawn: {
    label: 'Withdrawn',
    color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
    icon: XCircle,
  },
};

export default function ApplicationTrackerClient() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<string>('all');
  const [newApp, setNewApp] = useState<Partial<Application>>({
    company: '',
    position: '',
    location: '',
    status: 'applied',
    appliedDate: new Date().toISOString().split('T')[0],
    notes: '',
    link: '',
    salary: '',
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('sproutern_applications');
    if (saved) {
      setApplications(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      'sproutern_applications',
      JSON.stringify(applications),
    );
  }, [applications]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addApplication = () => {
    if (!newApp.company || !newApp.position) return;

    const app: Application = {
      id: generateId(),
      company: newApp.company || '',
      position: newApp.position || '',
      location: newApp.location || '',
      status: (newApp.status as Application['status']) || 'applied',
      appliedDate: newApp.appliedDate || new Date().toISOString().split('T')[0],
      notes: newApp.notes || '',
      link: newApp.link || '',
      salary: newApp.salary || '',
    };

    setApplications([app, ...applications]);
    setNewApp({
      company: '',
      position: '',
      location: '',
      status: 'applied',
      appliedDate: new Date().toISOString().split('T')[0],
      notes: '',
      link: '',
      salary: '',
    });
    setShowForm(false);
  };

  const updateStatus = (id: string, status: Application['status']) => {
    setApplications(
      applications.map((app) => (app.id === id ? { ...app, status } : app)),
    );
  };

  const deleteApplication = (id: string) => {
    setApplications(applications.filter((app) => app.id !== id));
  };

  const filteredApplications =
    filter === 'all'
      ? applications
      : applications.filter((app) => app.status === filter);

  // Stats
  const stats = {
    total: applications.length,
    applied: applications.filter((a) => a.status === 'applied').length,
    interview: applications.filter((a) => a.status === 'interview').length,
    offer: applications.filter((a) => a.status === 'offer').length,
    rejected: applications.filter((a) => a.status === 'rejected').length,
  };

  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-primary">{stats.total}</div>
          <p className="text-sm text-muted-foreground">Total Applications</p>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-blue-600">
            {stats.applied}
          </div>
          <p className="text-sm text-muted-foreground">Applied</p>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-purple-600">
            {stats.interview}
          </div>
          <p className="text-sm text-muted-foreground">Interview Stage</p>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-green-600">{stats.offer}</div>
          <p className="text-sm text-muted-foreground">Offers</p>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-red-600">
            {stats.rejected}
          </div>
          <p className="text-sm text-muted-foreground">Rejected</p>
        </Card>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <Select
            value={filter}
            onValueChange={setFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="applied">Applied</SelectItem>
              <SelectItem value="screening">Screening</SelectItem>
              <SelectItem value="interview">Interview</SelectItem>
              <SelectItem value="offer">Offer</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="withdrawn">Withdrawn</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="mr-2 h-4 w-4" /> Add Application
        </Button>
      </div>

      {/* Add Application Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Application</CardTitle>
            <CardDescription>
              Track a new job or internship application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Label>Company Name *</Label>
                <Input
                  placeholder="TCS"
                  value={newApp.company}
                  onChange={(e) =>
                    setNewApp({ ...newApp, company: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Position *</Label>
                <Input
                  placeholder="Software Engineer"
                  value={newApp.position}
                  onChange={(e) =>
                    setNewApp({ ...newApp, position: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Location</Label>
                <Input
                  placeholder="Bangalore, India"
                  value={newApp.location}
                  onChange={(e) =>
                    setNewApp({ ...newApp, location: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Salary/Stipend</Label>
                <Input
                  placeholder="₹6 LPA"
                  value={newApp.salary}
                  onChange={(e) =>
                    setNewApp({ ...newApp, salary: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Applied Date</Label>
                <Input
                  type="date"
                  value={newApp.appliedDate}
                  onChange={(e) =>
                    setNewApp({ ...newApp, appliedDate: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Status</Label>
                <Select
                  value={newApp.status}
                  onValueChange={(value) =>
                    setNewApp({
                      ...newApp,
                      status: value as Application['status'],
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="applied">Applied</SelectItem>
                    <SelectItem value="screening">Screening</SelectItem>
                    <SelectItem value="interview">Interview</SelectItem>
                    <SelectItem value="offer">Offer</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="withdrawn">Withdrawn</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-full">
                <Label>Job Link (Optional)</Label>
                <Input
                  placeholder="https://..."
                  value={newApp.link}
                  onChange={(e) =>
                    setNewApp({ ...newApp, link: e.target.value })
                  }
                />
              </div>
              <div className="col-span-full">
                <Label>Notes</Label>
                <Textarea
                  placeholder="Any details about the application..."
                  value={newApp.notes}
                  onChange={(e) =>
                    setNewApp({ ...newApp, notes: e.target.value })
                  }
                  rows={2}
                />
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <Button onClick={addApplication}>Add Application</Button>
              <Button
                variant="outline"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.length === 0 ? (
          <Card className="py-12 text-center">
            <CardContent>
              <Briefcase className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="mb-2 text-lg font-semibold">
                No Applications Yet
              </h3>
              <p className="mb-4 text-muted-foreground">
                Start tracking your job applications by clicking "Add
                Application" above.
              </p>
              <Button onClick={() => setShowForm(true)}>
                <Plus className="mr-2 h-4 w-4" /> Add Your First Application
              </Button>
            </CardContent>
          </Card>
        ) : (
          filteredApplications.map((app) => {
            const StatusIcon = statusConfig[app.status].icon;
            return (
              <Card
                key={app.id}
                className="transition-shadow hover:shadow-md"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <h3 className="text-lg font-semibold">
                          {app.position}
                        </h3>
                        <Badge className={statusConfig[app.status].color}>
                          <StatusIcon className="mr-1 h-3 w-3" />
                          {statusConfig[app.status].label}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {app.company}
                        </span>
                        {app.location && (
                          <span className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            {app.location}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(app.appliedDate).toLocaleDateString(
                            'en-IN',
                          )}
                        </span>
                        {app.salary && (
                          <span className="font-medium text-green-600">
                            {app.salary}
                          </span>
                        )}
                      </div>
                      {app.notes && (
                        <p className="mt-2 text-sm text-muted-foreground">
                          {app.notes}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Select
                        value={app.status}
                        onValueChange={(value) =>
                          updateStatus(app.id, value as Application['status'])
                        }
                      >
                        <SelectTrigger className="w-[130px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="applied">Applied</SelectItem>
                          <SelectItem value="screening">Screening</SelectItem>
                          <SelectItem value="interview">Interview</SelectItem>
                          <SelectItem value="offer">Offer</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                          <SelectItem value="withdrawn">Withdrawn</SelectItem>
                        </SelectContent>
                      </Select>
                      {app.link && (
                        <Button
                          variant="outline"
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
                        className="text-destructive"
                        onClick={() => deleteApplication(app.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>

      {/* Tips */}
      {applications.length > 0 && (
        <Card className="bg-primary/5">
          <CardContent className="pt-6">
            <h4 className="mb-3 font-semibold">💡 Application Tips</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Follow up on applications after 1-2 weeks if you haven't heard
                back
              </li>
              <li>
                • Keep your status updated to track your progress accurately
              </li>
              <li>• Add notes about interview dates, contacts, and feedback</li>
              <li>• Aim to apply to 10-15 relevant positions per week</li>
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
