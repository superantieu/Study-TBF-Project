import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

import { Flex } from "@chakra-ui/react";

const tasks = [
  {
    start: new Date(2020, 1, 1),
    end: new Date(2020, 1, 2),
    name: "Idea",
    id: "Task 0",
    type: "task",
    progress: 45,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 1),
    end: new Date(2020, 1, 2),
    name: "Idea",
    id: "Task 1",
    type: "task",
    progress: 55,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
];
const TestGanttChart = () => {
  return (
    <Flex align={"center"} justify={"center"} padding={"20px"}>
      <Gantt tasks={tasks} />
    </Flex>
  );
};
export default TestGanttChart;
