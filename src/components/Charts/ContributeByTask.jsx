import ReactApexChart from "react-apexcharts";
import { useGetTaskQuery } from "../../services/ongoingApi";
import {
  Flex,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars-2";

import RenderThumb from "../../scrollbar/RenderThumb";

const ContributeByTask = (props) => {
  const { taskhour } = props;
  console.log("taskhour", taskhour);
  const taskName = Object.keys(taskhour).map((taskId) => {
    const { data: taskData, error, isLoading } = useGetTaskQuery(taskId);
    if (isLoading) {
      return taskId;
    }
    return taskData.result.name;
  });

  if (Object.keys(taskhour).length > 10) {
    let data = Object.values(taskhour).map((value, index) => {
      return { taskName: taskName[index], taskHour: value };
    });

    console.log("table", data);
    return (
      <Flex
        h="400px"
        direction="column"
        bg={"#08040459"}
        m={"0 20px"}
        borderRadius={"20px"}
        padding={"20px"}
      >
        <TableContainer overflow={"hidden"} flex="1">
          <Table variant={"striped"} colorScheme="whiteAlpha" color={"#fff"}>
            <Thead>
              <Tr>
                <Th px="8px" color={"red.400"} w={"300px"}>
                  Task Name
                </Th>
                <Th px="8px" color={"red.400"}>
                  Task Hour
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="8px" py="0" h="0" borderBottom={0}></Td>
              </Tr>
            </Tbody>
          </Table>
          <Scrollbars
            autoHide={true}
            autoHideTimeout={1000}
            style={{
              backgroundColor: "#272a2f",
              width: "100%",
              height: "calc(100% - 40px)",
            }}
            renderThumbVertical={RenderThumb}
          >
            <Table
              variant={"striped"}
              colorScheme="whiteAlpha"
              color={"#fff"}
              w={"full"}
            >
              <Thead h="0">
                <Tr>
                  <Th h="0" py="0"></Th>
                  <Th h="0" py="0"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((dt, index) => {
                  return (
                    <Tr key={index}>
                      <Td
                        padding={"8px"}
                        maxW={"200px"}
                        overflow={"hidden"}
                        textOverflow={"ellipsis"}
                        whiteSpace={"nowrap"}
                      >
                        {dt["taskName"]}
                      </Td>
                      <Td padding={"8px"}>{dt["taskHour"]}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Scrollbars>
        </TableContainer>
      </Flex>
    );
  }
  const series = [{ name: "Work", data: Object.values(taskhour) }];

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
        columnWidth: "30px",
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
      categories: taskName,
      tickPlacement: "on",
      labels: {
        rotate: -45,
        trim: true,
        hideOverlappingLabels: false,
        style: {
          colors: "#e7dede",
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
      axisBorder: {
        show: true,
        color: "#e7dede",
      },
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
export default ContributeByTask;
