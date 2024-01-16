import ReactApexChart from "react-apexcharts";
import { Flex, Spinner } from "@chakra-ui/react";

import groupbykey from "../../utility/groupbykey";
import { useGetOngoingProjectQuery } from "../../services/ongoingApi";

const ChartWithOutFloorArea = () => {
  const {
    data: ongoProjects,
    error,
    isLoading,
  } = useGetOngoingProjectQuery({
    MinFloorArea: 0,
    MaxFloorArea: 1,
    Completed: false,
    pageSize: 8,
  });
  if (isLoading) {
    return (
      <Flex align={"center"} justify={"center"} mt={"36px"}>
        <Spinner color="red.500" size="lg" />
      </Flex>
    );
  }

  const memb = ongoProjects.result.map((obj) => {
    return (
      (obj.listmember.match(/\([^)]+\)/g) || []).length +
      (obj.listLeader.match(/\([^)]+\)/g) || []).length +
      (obj.listManager.match(/\([^)]+\)/g) || []).length
    );
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
      type: "bar",
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
        columnWidth: "55%",
        endingShape: "rounded",
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
      text: "PROJECTS WITHOUT FLOOR AREAS",
      align: "center",
      offsetX: 0,
      style: {
        fontSize: "16px",
        color: "#fff",
      },
    },
    colors: ["#ffff00", "#de7818"],
    legend: {
      labels: {
        colors: "#fff",
      },
    },
    xaxis: {
      categories: ongoProjects.result.map((obj) => {
        return obj.projectName;
      }),
      // tickPlacement: "on",
      labels: {
        trim: true,
        style: {
          colors: "#fff",
          fontSize: "10px",
        },
      },
    },
    yaxis: [
      {
        seriesName: "Members",
        opposite: false,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#ffff00",
        },
        labels: {
          style: {
            colors: "#ffff00",
          },
        },
        title: {
          text: "Number of Participants",
          style: {
            color: "#ffff00",
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
    <ReactApexChart options={options} series={series} type="bar" height={500} />
  );
};

export default ChartWithOutFloorArea;
