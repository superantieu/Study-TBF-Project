export function initTasks() {
  const currentDate = new Date();
  const tasks = [
    {
      start: new Date(2023, 5, 1),
      end: new Date(2023, 7, 1),
      name: "Some Project",
      id: "ProjectSample",
      progress: 25,
      type: "project",
      hideChildren: false,
      displayOrder: 1, // Vị trí hàng trên gantt chart
    },
    {
      start: new Date(2023, 5, 1),
      end: new Date(2023, 5, 16),
      name: "Idea",
      id: "Task 0",
      progress: 45,
      type: "task",
      project: "ProjectSample",
      displayOrder: 2,
    },
    {
      start: new Date(2023, 5, 16),
      end: new Date(2023, 5, 26),
      name: "Research",
      id: "Task 1",
      progress: 25,
      dependencies: ["Task 0"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 3,
    },
    {
      start: new Date(2023, 5, 26),
      end: new Date(2023, 6, 26),
      name: "Discussion with team",
      id: "Task 2",
      progress: 10,
      dependencies: ["Task 1"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 4,
    },
    {
      start: new Date(2023, 6, 26),
      end: new Date(2023, 6, 30),
      name: "Release",
      id: "Task 3",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: ["Task 2"],
      project: "ProjectSample",
      displayOrder: 5,
    },
    {
      start: new Date(2023, 7, 2),
      end: new Date(2023, 7, 3),
      name: "Party Time",
      id: "Task 9",
      progress: 0,
      isDisabled: true,
      type: "task",
    },
    {
      start: new Date(2023, 5, 1),
      end: new Date(2023, 7, 1),
      name: "Sup Project",
      id: "ProjectSample2",
      progress: 25,
      type: "project",
      hideChildren: false,
      displayOrder: 8,
    },
    {
      start: new Date(2023, 5, 1),
      end: new Date(2023, 5, 16),
      name: "Idea",
      id: "Sup 0",
      progress: 45,
      type: "task",
      project: "ProjectSample2",
      displayOrder: 9,
    },
    {
      start: new Date(2023, 5, 16),
      end: new Date(2023, 5, 26),
      name: "Research",
      id: "Sup 1",
      progress: 25,
      dependencies: ["Sup 0"],
      type: "task",
      project: "ProjectSample2",
      displayOrder: 10,
    },
    {
      start: new Date(2023, 5, 26),
      end: new Date(2023, 6, 26),
      name: "Discussion with team",
      id: "Sup 2",
      progress: 10,
      dependencies: ["Sup 1"],
      type: "task",
      project: "ProjectSample2",
      displayOrder: 12,
    },

    {
      start: new Date(2023, 6, 26),
      end: new Date(2023, 6, 30),
      name: "Release",
      id: "Sup 3",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: ["Sup 2"],
      project: "ProjectSample2",
      displayOrder: 14,
    },
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks, projectId) {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
