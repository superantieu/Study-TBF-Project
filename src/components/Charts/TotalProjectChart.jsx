import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from "react";

import groupbykey from "../../utility/groupbykey";

const TotalProjectChart = () => {
  const [data, setData] = useState([]);
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
  const memb = data.map((obj) => {
    return obj.members.length;
  });
  const listMem = data.map((obj) => {
    var numberofteam = groupbykey(obj.members, "discipline");
    return numberofteam;
  });

  const detailMember = listMem.map((array) => {
    return Object.keys(array).map((arr) => {
      return `team ${arr} : ${array[arr].length}`;
    });
  });
  // console.log(detailMember);
  const series = [
    {
      name: "Floor Area",
      data: data.map((obj) => {
        return obj.floorAreas;
      }),
    },
    {
      name: "Members",
      data: memb,
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 450,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
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
      text: "PROJECTS FLOOR AREAS AND PARTICIPANTS",
      align: "center",
      offsetX: 10,
      style: {
        fontSize: "16px",
        color: "#fff",
      },
    },
    colors: ["#008FFB", "#ffff00"],
    legend: {
      labels: {
        colors: "#fff",
      },
    },
    xaxis: {
      categories: data.map((obj) => {
        return obj.projectName;
      }),
      labels: {
        style: {
          colors: data.map((obj) => {
            return "#fff";
          }),
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
          text: "Floor Areas (square meter)",
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

  // const memb = projects.map((obj, index) => {
  //   return obj.ListMember.length;
  // });
  // const listMem = projects.map((obj) => {
  //   var numberofteam = groupbykey(obj.ListMember, "Discipline");
  //   return numberofteam;
  // });
  // const detailMember = listMem.map((array) => {
  //   return Object.keys(array).map((arr) => {
  //     return `team ${arr} : ${array[arr].length}`;
  //   });
  // });
  // console.log(detailMember);

  return (
    <ReactApexChart options={options} series={series} type="bar" height={450} />
  );
};

export default TotalProjectChart;
