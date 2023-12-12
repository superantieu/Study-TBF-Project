import ReactApexChart from "react-apexcharts";

import projects from "../Data/projects";

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
          strokeColor: "#775DD0",
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
    },
    title: {
      text: "PROJECT COMPLETION TIME",
      align: "center",
      style: {
        fontSize: "16px",
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
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Actual", "Target Time"],
      markers: {
        fillColors: ["#00E396", "#775DD0"],
      },
    },
    yaxis: {
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
        text: "Time (days)",
        style: {
          color: "#008FFB",
          fontSize: "14px",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <ReactApexChart options={options} series={series} type="bar" height={450} />
  );
};
export default ExpectTimeChart;
