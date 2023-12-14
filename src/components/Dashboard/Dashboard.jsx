import { Flex, Box } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Divider, AbsoluteCenter } from "@chakra-ui/react";

import TotalProjectChart from "../Charts/TotalProjectChart";
import ExpectTimeChart from "../Charts/ExpectTimeChart";
import OngoingProject from "./OngoingProject";
import Filter from "../Filter/Filter";

const Dashboard = () => {
  return (
    <Scrollbars autoHide={true} autoHideTimeout={1000}>
      <Box>
        <Filter />
      </Box>
      <Box w={"full"} h={"full"} mt={"20px"}>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter
            bg="purple"
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
          w={"full"}
          gap={"40px"}
        >
          <Box w={"full"}>
            <TotalProjectChart />
          </Box>
          <Box w="full">
            <ExpectTimeChart />
          </Box>
        </Flex>

        <OngoingProject></OngoingProject>
      </Box>
    </Scrollbars>
  );
};

export default Dashboard;
