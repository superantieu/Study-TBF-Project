import ReactApexChart from "react-apexcharts";

const ExpectTimeChart = (props) => {
  const { data } = props;
  const target = data.map((obj) => {
    return {
      x: obj.projectName,
      y: Math.round(
        (new Date(obj.targetDate).getTime() -
          new Date(obj.startDate).getTime()) /
          (1000 * 24 * 3660)
      ),
      goals: [
        {
          name: "Actual Time",
          value: Math.round(
            (new Date(obj.completedDate).getTime() -
              new Date(obj.startDate).getTime()) /
              (1000 * 24 * 3660)
          ),
          strokeHeight: 6,
          strokeColor: "#ebeb07",
        },
      ],
    };
  });

  const overtarget = data.map((obj) => {
    return {
      x: obj.projectName,
      y:
        Math.round(
          (new Date(obj.completedDate).getTime() -
            new Date(obj.targetDate).getTime()) /
            (1000 * 24 * 3660)
        ) > 0
          ? Math.round(
              (new Date(obj.completedDate).getTime() -
                new Date(obj.targetDate).getTime()) /
                (1000 * 24 * 3660)
            )
          : 0,
    };
  });

  const series = [
    {
      name: "Target",
      data: target,
    },
    {
      name: "Exceed",
      data: overtarget,
    },
  ];
  const options = {
    chart: {
      height: 350,
      stacked: true,
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
      line: {
        strokeWidth: 3, // Kích thước của vạch

        showMarkers: false, // Ẩn điểm đánh dấu nếu không muốn hiển thị
      },
    },
    colors: ["#00E396", "#e53e3e"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      labels: {
        colors: "#fff",
      },
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Actual", "Exceed", "Target Time"],
      markers: {
        fillColors: ["#ebeb07", "#e53e3e", "#00E396"],
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: data.map(() => {
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
