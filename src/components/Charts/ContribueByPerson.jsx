import ReactApexChart from "react-apexcharts";

const ContributeByPerson = (props) => {
  const { personhour } = props;
  const series = [{ name: "Work", data: Object.values(personhour) }];
  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "20px",
        dataLabels: {
          position: "top", // top, center, bottom
        },
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
    xaxis: {
      categories: Object.keys(personhour),
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      title: {
        text: "Working time (hours)",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val;
        },
      },
    },
  };
  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
};
export default ContributeByPerson;
