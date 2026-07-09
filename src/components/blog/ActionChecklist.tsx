import { CheckSquare, Calendar, Repeat } from 'lucide-react';

interface ChecklistItem {
  task: string;
  description?: string;
}

interface ChecklistWeek {
  week: string;
  tasks: ChecklistItem[];
}

interface ActionChecklistProps {
  title?: string;
  weeks: ChecklistWeek[];
  ongoingTasks?: ChecklistItem[];
}

export function ActionChecklist({
  title = 'Your Action Checklist: Start Today',
  weeks,
  ongoingTasks = [],
}: ActionChecklistProps) {
  return (
    <section className="not-prose my-10">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
        <CheckSquare className="h-6 w-6 text-primary" />
        {title}
      </h2>

      <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
        <p className="mb-6 text-sm text-muted-foreground">
          Copy this checklist and start taking action:
        </p>

        <div className="space-y-6">
          {weeks.map((week, weekIndex) => (
            <div
              key={weekIndex}
              className="space-y-3"
            >
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <Calendar className="h-5 w-5 text-primary" />
                {week.week}:
              </h3>
              <ul className="ml-7 space-y-2">
                {week.tasks.map((task, taskIndex) => (
                  <li
                    key={taskIndex}
                    className="flex items-start gap-3"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <div>
                      <span className="text-sm font-medium">{task.task}</span>
                      {task.description && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {task.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {ongoingTasks.length > 0 && (
            <div className="space-y-3">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <Repeat className="h-5 w-5 text-primary" />
                Ongoing:
              </h3>
              <ul className="ml-7 space-y-2">
                {ongoingTasks.map((task, taskIndex) => (
                  <li
                    key={taskIndex}
                    className="flex items-start gap-3"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <div>
                      <span className="text-sm font-medium">{task.task}</span>
                      {task.description && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {task.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-6 rounded-lg bg-green-100 p-4 dark:bg-green-900">
          <p className="text-sm">
            <strong>💡 Pro Tip:</strong> Print this checklist or save it to your
            phone. Check off items as you complete them to track your progress!
          </p>
        </div>
      </div>
    </section>
  );
}
