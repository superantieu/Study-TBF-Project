import ReactApexChart from "react-apexcharts";

import groupbykey from "../../utility/groupbykey";

const TotalProjectChart = (props) => {
  const { data } = props;

  const memb = data.map((obj) => {
    return obj.filterMembers.length;
  });
  const listMem = data.map((obj) => {
    var numberofteam = groupbykey(obj.filterMembers, "discipline");
    return numberofteam;
  });

  const detailMember = listMem.map((array) => {
    return Object.keys(array).map((arr) => {
      return `team ${arr} : ${array[arr].length}`;
    });
  });

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

  return (
    <ReactApexChart options={options} series={series} type="bar" height={450} />
  );
};

export default TotalProjectChart;
