import { Flex, Box } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Divider, AbsoluteCenter } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import TotalProjectChart from "../Charts/TotalProjectChart";
import ExpectTimeChart from "../Charts/ExpectTimeChart";
import OngoingProject from "./OngoingProject";
import RenderThumb from "../../scrollbar/RenderThumb";
import StatsOverall from "./StatsOverall";

const Dashboard = () => {
  const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5103/api/Projects");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const results = await response.json();
  //       setData(results.result);
  //     } catch (error) {
  //       console.error("There was a problem with the fetch operation:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <Scrollbars
      autoHide={true}
      autoHideTimeout={1000}
      style={{
        backgroundColor: "#272a2f",
      }}
      renderThumbVertical={RenderThumb}
    >
      <Box w={"full"} h={"full"} mt={"20px"} mb={"20px"}>
        <Box position="relative" padding="10">
          <Divider borderColor={"red.500"} />
          <AbsoluteCenter
            bg="red.500"
            color={"white"}
            px="8"
            borderRadius={"99px"}
          >
            COMPLETED PROJECTS
          </AbsoluteCenter>
        </Box>
        <Flex
          justify={"space-between"}
          align={"center"}
          gap={"40px"}
          ml={"20px"}
          mr={"20px"}
        >
          <Box w={"full"} bg={"#08040459"} borderRadius={"20px"}>
            <TotalProjectChart />
          </Box>
          <Box w="full" bg={"#08040459"} borderRadius={"20px"}>
            <ExpectTimeChart />
          </Box>
        </Flex>
        <StatsOverall />
        <OngoingProject />
      </Box>
    </Scrollbars>
  );
};

export default Dashboard;
