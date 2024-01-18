import ReactApexChart from "react-apexcharts";
import { Flex, Spinner, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState } from "react";

import groupbykey from "../../utility/groupbykey";
import { useGetOngoingProjectQuery } from "../../services/ongoingApi";
import { chooseSelector } from "../../redux/chooseSlice";
import BasicModal from "../GanttChartForOngoing/BasicModal";

const TotalProjectChart = (props) => {
  const filter = useSelector(chooseSelector);
  const valueFilter = filter.value.toString();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [direct, setDirect] = useState();
  const [name, setName] = useState("");

  const { orderBy } = props;
  const {
    data: ongoProjects,
    error,
    isLoading,
  } = useGetOngoingProjectQuery({
    Completed: false,
    ChooseProject: valueFilter,
    pageSize: filter.value.length < 10 ? 10 : filter.value.length,
    orderBy,
  });
  if (isLoading) {
    return (
      <Flex align={"center"} justify={"center"} mt={"36px"}>
        <Spinner color="red.500" size="lg" />
      </Flex>
    );
  }
  console.log("ongo", ongoProjects);
  const memb = ongoProjects.result.map((obj) => {
    return obj.filterMembers.length;
  });
  const targethours = ongoProjects.result.map((obj) => {
    return obj.totalHours;
  });
  const listMem = ongoProjects.result.map((obj) => {
    var numberofteam = groupbykey(obj.filterMembers, "discipline");
    return numberofteam;
  });
  const detailMember = listMem.map((array) => {
    return Object.keys(array).map((arr) => {
      return `${arr} : ${array[arr].length}`;
    });
  });

  const series = [
    // {
    //   name: "Floor Area",
    //   data: ongoProjects.result.map((obj) => {
    //     return obj.floorAreas;
    //   }),
    // },
    {
      name: "Tasks",
      data: ongoProjects.result.map((obj) => {
        return obj.tasks;
      }),
    },
    {
      name: "Members",
      data: memb,
    },
    {
      name: "Target Hours",
      data: targethours,
    },
  ];
  const options = {
    chart: {
      height: 450,
      width: 300,
      type: "bar",
      events: {
        dataPointSelection: (event, chartContext, config) => {
          if (event.button === 2) {
            const wantDirect =
              ongoProjects.result[config.dataPointIndex]["projectId"];
            const wantName =
              ongoProjects.result[config.dataPointIndex]["projectName"];
            setDirect(wantDirect);
            setName(wantName);
            onOpen();
          }
        },
      },
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
      },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "65%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    title: {
      text: "FLOOR AREAS AND PARTICIPANTS",
      align: "center",
      offsetX: 0,
      style: {
        fontSize: "16px",
        color: "#fff",
      },
    },
    colors: ["#008FFB", "#ffff00", "#de7818"],
    legend: {
      labels: {
        colors: "#fff",
        hideOverlappingLabels: false,
      },
    },
    xaxis: {
      categories: ongoProjects.result.map((obj) => {
        return obj.projectName;
      }),

      tickPlacement: "between",
      // tickPlacement: "on",
      labels: {
        trim: true,
        rotate: -45,
        hideOverlappingLabels: false,
        style: {
          colors: "#fff",
          fontSize: "10px",
        },
      },
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#008FFB",
        },
        labels: {
          style: {
            colors: "#008FFB",
          },
        },
        title: {
          // text: "Floor Areas (square meter)",
          text: "Number of Tasks",
          style: {
            color: "#008FFB",
            fontSize: "14px",
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      {
        seriesName: "Members",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "yellow",
        },
        labels: {
          style: {
            colors: "yellow",
          },
        },
        title: {
          text: "Number of Participants",
          style: {
            color: "yellow",
            fontSize: "14px",
          },
        },
      },
      {
        seriesName: "Target Hours",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#de7818",
        },
        labels: {
          style: {
            colors: "#de7818",
          },
        },
        title: {
          text: "Target Hours",
          style: {
            color: "#de7818",
            fontSize: "14px",
          },
        },
      },
      ,
    ],
    fill: {
      opacity: 1,
    },

    tooltip: {
      enabled: true,
      shared: false,
      fixed: {
        enabled: false,
        position: "topLeft",
        offsetX: 0,
        offsetY: 0,
      },
      y: [
        "",
        {
          formatter: function (
            value,
            { series, seriesIndex, dataPointIndex, w }
          ) {
            const addingValue = detailMember[dataPointIndex].reduce(
              (arr, cur) => arr + cur + `<br>`,
              ""
            );
            return `  Total: ` + value + `<br>` + addingValue;
          },
        },
      ],
    },
  };

  return (
    <>
      <BasicModal
        isOpen={isOpen}
        onClose={onClose}
        direct={direct}
        name={name}
      />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        // width={"200%"}
        height={500}
      />
    </>
  );
};

export default TotalProjectChart;
