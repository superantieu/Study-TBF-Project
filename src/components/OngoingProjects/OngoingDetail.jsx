import {
  Box,
  Button,
  Divider,
  Flex,
  Select,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";

import groupbykey from "../../utility/groupbykey";
import Contribution from "../Charts/Contribution";
import ContributeChart from "../Charts/ContributeChart";
import ContributeByPerson from "../Charts/ContribueByPerson";
import ContributeByTask from "../Charts/ContributeByTask";

const OngiongDetail = (props) => {
  const { ongoingProject } = props;
  const users = ongoingProject.ListMember;
  const totalHours = Object.values(ongoingProject.TotalHours.TSHours);
  const teams = groupbykey(users, "Discipline");

  const ref = useRef();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsSelectOpen(false),
  });

  const [contributechart, setContribute] = useState(
    <ContributeChart totalhour={ongoingProject.TotalHours.TSHours} />
  );
  const handleChart = (e) => {
    console.log(e.target.value);
    e.target.value === "team"
      ? setContribute(
          <ContributeChart totalhour={ongoingProject.TotalHours.TSHours} />
        )
      : e.target.value === "person"
      ? setContribute(
          <ContributeByPerson personhour={ongoingProject.TotalHours.TSPerson} />
        )
      : setContribute(
          <ContributeByTask taskhour={ongoingProject.TotalHours.TSTasks} />
        );
  };
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
        {ongoingProject.ProjectName.toUpperCase()}
      </Flex>
      <Flex justify={"flex-start"} gap={"20px"} mr={"20px"} mt={"20px"}>
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
          <Text>USING</Text>
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
            {ongoingProject.StartDate.toLocaleDateString("en-US", {
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
          <Text>TARGET</Text>
          <Box>
            {ongoingProject.TargetDate.toLocaleDateString("en-US", {
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
        minHeight={"425px"}
      >
        <Contribution teams={teams} />

        <Box w={"50%"} position={"relative"}>
          <Button
            position={"absolute"}
            top={0}
            right={0}
            w={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            _hover={"none"}
            bg={"transparent"}
            onClick={() => setIsSelectOpen(true)}
          >
            <HamburgerIcon />
          </Button>
          <Select
            ref={ref}
            icon={"none"}
            mt={4}
            position={"absolute"}
            right={0}
            top={"20px"}
            bg={"#c9d2dd"}
            border={"1px solid purple"}
            w={"120px"}
            height={"30px"}
            zIndex={"2"}
            onChange={handleChart}
            display={isSelectOpen ? "block" : "none"}
          >
            <option value="team">TEAM</option>
            <option value="person">PERSON</option>
            <option value="task">TASK</option>
          </Select>
          <Flex
            flexDirection={"column"}
            align={"flex-start"}
            justify={"center"}
          >
            <Box w={"80%"}>{contributechart}</Box>
            <Text
              mt={"30px"}
              fontWeight={"bold"}
              fontSize={"20PX"}
              alignSelf={"center"}
            >
              THE CONTRIBUTION (HOURS)
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Divider mt={"20px"} mb={"20px"}></Divider>
    </Box>
  );
};
export default OngiongDetail;
