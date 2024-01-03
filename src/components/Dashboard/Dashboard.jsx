import { Scrollbars } from "react-custom-scrollbars-2";
import { Divider, AbsoluteCenter, Flex, Spinner, Box } from "@chakra-ui/react";

import { useGetOngoingProjectQuery } from "../../services/ongoingApi";
import TotalProjectChart from "../Charts/TotalProjectChart";
import ExpectTimeChart from "../Charts/ExpectTimeChart";
import OngoingProject from "./OngoingProject";
import RenderThumb from "../../scrollbar/RenderThumb";
import StatsOverall from "./StatsOverall";

const Dashboard = () => {
  const {
    data: Projects,
    error,
    isLoading,
  } = useGetOngoingProjectQuery({
    Completed: true,
    pageSize: 50,
  });
  if (isLoading) {
    return (
      <Flex align={"center"} justify={"center"} mt={"36px"}>
        <Spinner color="red.500" size="lg" />
      </Flex>
    );
  }
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
            <TotalProjectChart data={Projects.result} />
          </Box>
          <Box w="full" bg={"#08040459"} borderRadius={"20px"}>
            <ExpectTimeChart data={Projects.result} />
          </Box>
        </Flex>
        <StatsOverall />
        <OngoingProject />
      </Box>
    </Scrollbars>
  );
};

export default Dashboard;
