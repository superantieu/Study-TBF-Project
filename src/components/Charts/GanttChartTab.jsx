import React from "react";
import { Flex } from "@chakra-ui/react";
import { Chart } from "react-google-charts";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Sup" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "Target Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Current Date" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "2014Spring",
    "Spring 2014",
    "Sup cua",
    new Date(2014, 2, 22),
    new Date(2014, 6, 20),
    null,
    ((new Date(2014, 6, 10) - new Date(2014, 2, 22)) * 100) /
      (new Date(2014, 6, 20) - new Date(2014, 2, 22)),
    null,
  ],
  [
    "2014Summer",
    "Summer 2014",
    "summer",
    new Date(2014, 3, 21),
    new Date(2014, 8, 20),
    null,
    new Date(2014, 6, 10),
    null,
  ],
  [
    "2014Autumn",
    "Autumn 2014",
    "autumn",
    new Date(2014, 4, 21),
    new Date(2014, 11, 20),
    null,
    new Date(2014, 6, 10),
    null,
  ],
  [
    "2014Winter",
    "Winter 2014",
    "winter",
    new Date(2014, 3, 29),
    new Date(2015, 10, 21),
    null,
    new Date(2014, 6, 10),
    null,
  ],
  [
    "2015Spring",
    "Spring 2015",
    "spring",
    new Date(2015, 5, 22),
    new Date(2015, 12, 20),
    null,
    new Date(2014, 6, 10),
    null,
  ],
];

export const data = [columns, ...rows];

export const options = {
  height: 400,
  gantt: {
    trackHeight: 30,
  },
  backgroundColor: {
    fill: "#ccc",
  },
};

const GanttChartTab = () => {
  return (
    <Flex align={"center"} justify={"center"} padding={"20px"}>
      <Chart
        chartType="Gantt"
        width="100%"
        height="50%"
        data={data}
        options={options}
      />
    </Flex>
  );
};
export default GanttChartTab;
