import { useState, useEffect, useLayoutEffect, useMemo } from "react";

export function initTasks() {
  const [data, setData] = useState([]);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5103/api/Projects?Completed=true&pageSize=50"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const results = await response.json();
        setData(results.result);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  let rs = data.map((dt, index) => {
    return {
      start: new Date(dt.startDate),
      target: new Date(dt.targetDate),
      name: dt.projectName,
      id: dt.projectId,
      progress: Math.round(
        (100 * (new Date().getTime() - new Date(dt.startDate).getTime())) /
          (new Date(dt.targetDate).getTime() - new Date(dt.startDate).getTime())
      ),
      type: "project",
      hideChildren: false,
      displayOrder: index + 1, // Vị trí hàng trên gantt chart
    };
  });
  console.log("rs", rs);
  //   useLayoutEffect(() => {
  //     const tasksData = data.map((dt, index) => {
  //       return {
  //         start: new Date(dt.startDate),
  //         target: new Date(dt.targetDate),
  //         name: dt.projectName,
  //         id: dt.projectId,
  //         progress: Math.round(
  //           (100 * (new Date().getTime() - new Date(dt.startDate).getTime())) /
  //             (new Date(dt.targetDate).getTime() -
  //               new Date(dt.startDate).getTime())
  //         ),
  //         type: "project",
  //         hideChildren: false,
  //         displayOrder: index + 1, // Vị trí hàng trên gantt chart
  //       };
  //     });
  //     setTasks(tasksData);
  //   }, [data]);

  console.log(tasks);
  return tasks;
}

// export function getStartEndDateForProject(tasks, projectId) {
//   const projectTasks = tasks.filter((t) => t.project === projectId);
//   let start = projectTasks[0].start;
//   let end = projectTasks[0].end;

//   for (let i = 0; i < projectTasks.length; i++) {
//     const task = projectTasks[i];
//     if (start.getTime() > task.start.getTime()) {
//       start = task.start;
//     }
//     if (end.getTime() < task.end.getTime()) {
//       end = task.end;
//     }
//   }
//   return [start, end];
// }
