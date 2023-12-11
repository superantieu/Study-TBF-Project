import { Box } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
const ContributeChart = (props) => {
  const { totalhour } = props;
  console.log(totalhour);
  const series = Object.values(totalhour);
  console.log(series);
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
      width={400}
    />
  );
};
export default ContributeChart;
