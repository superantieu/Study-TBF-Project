import ReactApexChart from "react-apexcharts";

import projects from "../data/projects";

const ExpectTimeChart = () => {
  const target = projects.map((obj) => {
    return {
      x: obj.ProjectName,
      y: Math.round(
        (obj.CompletedDate.getTime() - obj.StartDate.getTime()) /
          (1000 * 24 * 3660)
      ),
      goals: [
        {
          name: "Target Time",
          value: Math.round(
            (obj.TargetDate.getTime() - obj.StartDate.getTime()) /
              (1000 * 24 * 3660)
          ),
          strokeHeight: 5,
          strokeColor: "#e53e3e",
        },
      ],
    };
  });
  const series = [
    {
      name: "Actual",
      data: target,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "PROJECT COMPLETION TIME",
      align: "center",
      style: {
        fontSize: "16px",
        color: "#fff",
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
    colors: ["#00E396"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      labels: {
        colors: "#fff",
      },
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Actual", "Target Time"],
      markers: {
        fillColors: ["#00E396", "#e53e3e"],
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: projects.map((obj) => {
            return "#fff";
          }),
        },
      },
    },

    yaxis: {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#fff",
      },
      labels: {
        style: {
          colors: "#fff",
        },
      },
      title: {
        text: "Time (days)",
        style: {
          color: "#fff",
          fontSize: "14px",
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  return (
    <ReactApexChart options={options} series={series} type="bar" height={450} />
  );
};
export default ExpectTimeChart;
