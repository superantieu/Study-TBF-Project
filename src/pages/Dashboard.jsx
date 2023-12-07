import { Container, Flex, HStack, Text, Box } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { member } from "../components/Charts/Projects";
import projects from "../components/Charts/Projects";
import TotalProjectChart from "../components/Charts/TotalProjectChart";
import ExpectTimeChart from "../components/Charts/ExpectTimeChart";
const Dashboard = () => {
  console.log(
    projects.map((obj) => {
      return obj.listmember.length;
    })
  );
  return (
    <Scrollbars autoHide={true} autoHideTimeout={1000}>
      <Box w={"full"} h={"full"}>
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
      </Box>
    </Scrollbars>
  );
};

export default Dashboard;
