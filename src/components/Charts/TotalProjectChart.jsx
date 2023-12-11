import ReactApexChart from "react-apexcharts";
import projects from "./Projects";

const memb = projects.map((obj, index) => {
  return obj.ListMember.length;
});
const TotalProjectChart = () => {
  const series = [
    {
      name: "Floor Area",
      data: projects.map((obj) => {
        return obj.FloorAreas;
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
      },
    },
    colors: ["#008FFB", "#892494"],
    xaxis: {
      categories: projects.map((obj) => {
        return obj.ProjectName;
      }),
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
          enabled: true,
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
          color: "#892494",
        },
        labels: {
          style: {
            colors: "#892494",
          },
        },
        title: {
          text: "Number of Participants",
          style: {
            color: "#892494",
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
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };
  return (
    <ReactApexChart options={options} series={series} type="bar" height={450} />
  );
};

export default TotalProjectChart;
