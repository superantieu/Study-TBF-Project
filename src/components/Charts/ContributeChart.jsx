import ReactApexChart from "react-apexcharts";

const ContributeChart = (props) => {
  const { totalhour } = props;
  const series = Object.values(totalhour);
  const options = {
    chart: {
      width: 480,

      type: "donut",
    },
    labels: Object.keys(totalhour).map((arr) => {
      return "team " + arr;
    }),
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      width={493}
    />
  );
};
export default ContributeChart;
