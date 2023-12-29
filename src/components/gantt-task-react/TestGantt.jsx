import { useState, useEffect, useMemo } from "react";
import { ViewMode, Gantt } from "gantt-task-react";
import { Box, Stack } from "@chakra-ui/react";

import { ViewSwitcher } from "./component/ViewSwitcher";
import CustomizeTooltip from "./component/CustomizeTooltip";
import TaskListTable from "./component/TaskListTable";
import TaskListHeader from "./component/TaskListHeader";

// Init
const TestGantt = () => {
  const [view, setView] = useState(ViewMode.Week);
  const [data, setData] = useState([]);
  const [tasks, setTasks] = useState([
    {
      start: new Date(2023, 5, 1),
      end: new Date(2023, 7, 1),
      name: "Sample Project",
      id: "ProjectSample",
      progress: 25,
      type: "project",
      hideChildren: false,
      displayOrder: 1, // Vị trí hàng trên gantt chart
      totalhours: 100,
    },
  ]);
  const [isChecked, setIsChecked] = useState(true);
  let columnWidth = 65;
  if (view === ViewMode.Year) {
    columnWidth = 350;
  } else if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }
  console.log(data);
  useMemo(() => {
    const tsks = data.map((dt, index) => {
      return {
        start: new Date(dt.startDate),
        end: new Date(dt.targetDate),
        name: dt.projectName,
        id: dt.projectId,
        progress: Math.round(
          (100 * (new Date().getTime() - new Date(dt.startDate).getTime())) /
            (new Date(dt.targetDate).getTime() -
              new Date(dt.startDate).getTime())
        ),
        type: "project",
        hideChildren: false,
        displayOrder: index + 1, // Vị trí hàng trên gantt chart
        totalhours: dt.totalHours,
        member: dt.members,
      };
    });
    console.log("ts", tsks);
    tsks.length > 0 && setTasks(tsks);
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5103/api/Projects?Completed=false&pageSize=50"
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

  const getStartEndDateForProject = (tasks, projectId) => {
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
  };

  const handleTaskChange = (task) => {
    console.log("On date change Id:" + task.id);
    let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project =
        newTasks[newTasks.findIndex((t) => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map((t) =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter((t) => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleClick = (task) => {
    console.log("On Click event Id:" + task.id);
  };

  const handleSelect = (task, isSelected) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <Stack>
      <ViewSwitcher
        onViewModeChange={(viewMode) => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
        view={view}
      />
      <Box>
        <Gantt
          tasks={tasks}
          viewMode={view}
          onDateChange={handleTaskChange}
          onDelete={handleTaskDelete}
          onProgressChange={handleProgressChange}
          onDoubleClick={handleDblClick}
          onClick={handleClick}
          onSelect={handleSelect}
          onExpanderClick={handleExpanderClick}
          listCellWidth={isChecked ? "100px" : ""}
          columnWidth={columnWidth}
          barProgressColor={"#f56565"}
          TooltipContent={CustomizeTooltip}
          TaskListTable={TaskListTable}
          TaskListHeader={TaskListHeader}
        />
      </Box>
    </Stack>
  );
};

export default TestGantt;
