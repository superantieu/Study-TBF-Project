import { useState } from "react";
import { ViewMode, Gantt } from "gantt-task-react";
import { Box, Stack } from "@chakra-ui/react";
import { Flex, Spinner } from "@chakra-ui/react";

import { useGetOngoingProjectQuery } from "../../services/ongoingApi";
import { ViewSwitcher } from "./component/ViewSwitcher";
import CustomizeTooltip from "./component/CustomizeTooltip";
import TaskListTable from "./component/TaskListTable";
import TaskListHeader from "./component/TaskListHeader";

// Init
const TestGantt = () => {
  const [view, setView] = useState(ViewMode.Week);
  const [isChecked, setIsChecked] = useState(true);
  let columnWidth = 65;
  if (view === ViewMode.Year) {
    columnWidth = 350;
  } else if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const {
    data: ganttChart,
    error,
    isLoading,
  } = useGetOngoingProjectQuery({
    Completed: false,
    pageSize: 50,
  });

  if (!ganttChart) {
    return (
      <Flex align={"center"} justify={"center"} mt={"36px"}>
        <Spinner color="red.500" size="lg" />
      </Flex>
    );
  } else {
    const tasks = ganttChart.result.map((dt, index) => {
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
        member: dt.filterMembers,
      };
    });

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
      console.log(
        task.name + " has " + (isSelected ? "selected" : "unselected")
      );
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
  }
};
export default TestGantt;
