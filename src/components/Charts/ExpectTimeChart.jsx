import ReactApexChart from "react-apexcharts";
import projects from "./Projects";
const ExpectTimeChart = () => {
  const target = projects.map((obj) => {
    return {
      x: obj.name,
      y: obj.totalhours,
      goals: [
        {
          name: "Target Time",
          value: obj.expect,
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
        text: "Time (hours)",
        style: {
          color: "#008FFB",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
};
export default ExpectTimeChart;
