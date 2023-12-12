import { Box, Divider, Flex, Text } from "@chakra-ui/react";

import Contribution from "../Charts/Contribution";
import groupbykey from "../../utility/groupbykey";
import ContributeChart from "../Charts/ContributeChart";

const ProjectDetail = (props) => {
  const { project } = props;
  const users = project.ListMember;
  const totalHours = Object.values(project.TotalHours);
  const teams = groupbykey(users, "Discipline");

  return (
    <Box>
      <Flex
        w={"full"}
        h={"50px"}
        bg={"linear-gradient(135deg, #8BC6EC 50%, #9599E2 100%)"}
        align={"center"}
        fontSize={"24px"}
        padding={"10px"}
      >
        {project.ProjectName.toUpperCase()}
      </Flex>
      <Flex justify={"flex-start"} gap={"20px"} mt={"20px"}>
        <Flex
          justify={"space-between"}
          align={"center"}
          border={"2px solid purple"}
          gap={"10px"}
          padding={"4px"}
          fontSize={"20px"}
          borderRadius={"99px"}
          color={"purple"}
        >
          <Text>USED</Text>
          <Box>
            {totalHours.reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            )}{" "}
            HOURS{" "}
          </Box>
        </Flex>
        <Flex
          justify={"space-between"}
          align={"center"}
          border={"2px solid purple"}
          gap={"10px"}
          padding={"4px"}
          fontSize={"20px"}
          borderRadius={"99px"}
          color={"purple"}
        >
          <Text>STARTED</Text>
          <Box>
            {project.StartDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}{" "}
          </Box>
        </Flex>
        <Flex
          justify={"space-between"}
          align={"center"}
          border={"2px solid purple"}
          gap={"10px"}
          padding={"4px"}
          fontSize={"20px"}
          borderRadius={"99px"}
          color={"purple"}
        >
          <Text>FINISHED</Text>
          <Box>
            {project.CompletedDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}{" "}
          </Box>
        </Flex>
      </Flex>

      <Flex
        justify={"space-evenly"}
        align={"center"}
        gap={"40px"}
        mr={"20px"}
        mt={"40px"}
      >
        <Contribution teams={teams} />

        <Box w={"50%"}>
          <Flex flexDirection={"column"} align={"center"} justify={"center"}>
            <ContributeChart totalhour={project.TotalHours} />
            <Text mt={"30px"} fontWeight={"bold"} fontSize={"20PX"}>
              THE CONTRIBUTION OF THE TEAMS (HOURS)
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Divider mt={"20px"} mb={"20px"}></Divider>
    </Box>
  );
};
export default ProjectDetail;
