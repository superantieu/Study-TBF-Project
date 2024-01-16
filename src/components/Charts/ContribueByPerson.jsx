import ReactApexChart from "react-apexcharts";

const ContributeByPerson = (props) => {
  const { personhour } = props;
  console.log("personhour: ", personhour);
  const series = [{ name: "Work", data: Object.values(personhour) }];
  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: true,
        tools: {
          download: false,
          // zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
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
      tickPlacement: "on",
      labels: {
        rotate: -45,
        trim: true,
        hideOverlappingLabels: false,
        style: {
          colors: "#e7dede",
          fontSize: "12px",
        },
      },
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
      title: {
        text: "Working time (hours)",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "#e7dede",
        },
      },
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#e7dede",
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val;
        },
        style: {
          colors: "#e7dede",
        },
      },
    },
  };
  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
};
export default ContributeByPerson;
