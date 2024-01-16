import {
  Box,
  Button,
  Divider,
  Flex,
  Select,
  Stack,
  Text,
  useOutsideClick,
  Spinner,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MdOutlineDateRange } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import { LuAlignHorizontalJustifyStart } from "react-icons/lu";
import { GiFinishLine, GiTargetShot } from "react-icons/gi";
import { useState, useRef } from "react";

import Contribution from "../Charts/Contribution";
import ContributeChart from "../Charts/ContributeChart";
import ContributeByPerson from "../Charts/ContribueByPerson";
import ContributeByTask from "../Charts/ContributeByTask";
import { useGetTimeSheetQuery } from "../../services/ongoingApi";

const ProjectDetail = (props) => {
  const { project } = props;

  const [contribute, setContribute] = useState("team");
  const ref = useRef();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsSelectOpen(false),
  });
  let tshours, tsperson, tstask;
  var teams = {};
  const {
    data: timeSheetData,
    error,
    isLoading,
  } = useGetTimeSheetQuery({
    ProjectId: project.projectId,
    pageSize: 5000,
  });

  if (!isLoading) {
    tshours = timeSheetData.result.reduce((acc, cur) => {
      var needHours = acc[cur["userDiscipline"]]
        ? acc[cur["userDiscipline"]]
        : 0;
      acc[cur["userDiscipline"]] = needHours + cur["tshour"];
      return acc;
    }, {});

    tstask = timeSheetData.result.reduce((acc, cur) => {
      var needHours = acc[cur["taskId"]] ? acc[cur["taskId"]] : 0;
      acc[cur["taskId"]] = needHours + cur["tshour"];
      return acc;
    }, {});
    tsperson = timeSheetData.result.reduce((acc, cur) => {
      var needHours = acc[cur["userName"]] ? acc[cur["userName"]] : 0;
      acc[cur["userName"]] = needHours + cur["tshour"];
      return acc;
    }, {});
    teams = timeSheetData.result.reduce((acc, cur) => {
      var needArr = acc[cur["userDiscipline"]]
        ? acc[cur["userDiscipline"]]
        : [];
      acc[cur["userDiscipline"]] = needArr.includes(cur["userName"])
        ? needArr
        : [...needArr, cur["userName"]];
      return acc;
    }, {});
  }
  const handleChart = (e) => {
    e.target.value === "team"
      ? setContribute("team")
      : e.target.value === "task"
      ? setContribute("task")
      : setContribute("person");
  };

  return (
    <Box>
      <Flex
        w={"full"}
        h={"50px"}
        bg={"#404040"}
        color={"#fff"}
        align={"center"}
        fontSize={"24px"}
        padding={"10px"}
      >
        {project.projectName.toUpperCase()}
      </Flex>
      <Flex justify={"space-between"} mr={"10px"} gap={"20px"} mt={"20px"}>
        <Flex
          ml={"10px"}
          justify={"space-between"}
          align={"center"}
          border={"2px solid #e7dede"}
          minW={"300px"}
          h={"80px"}
          padding={"4px"}
          fontSize={"20px"}
          borderRadius={"20px"}
          color={"#e7dede"}
          bg={"#060d16"}
        >
          <Stack gap={0} ml={"6px"}>
            <Text fontSize={"20px"} color={"#8b8f93"}>
              Used
            </Text>
            <Box fontSize={"24px"} fontWeight={"bold"} color={"#b7b3b3"}>
              {project.usedHours} HOURS{" "}
            </Box>
          </Stack>
          <Flex
            w={"50px"}
            h={"50px"}
            mr={"10px"}
            bg={"red.500"}
            align={"center"}
            justify={"center"}
            borderRadius={"15px"}
          >
            <IoTimer fontSize={"36px"} />
          </Flex>
        </Flex>
        <Flex
          ml={"10px"}
          justify={"space-between"}
          align={"center"}
          border={"2px solid #e7dede"}
          minW={"300px"}
          h={"80px"}
          padding={"4px"}
          fontSize={"20px"}
          borderRadius={"20px"}
          color={"#e7dede"}
          bg={"#060d16"}
        >
          <Stack gap={0} ml={"6px"}>
            <Text fontSize={"20px"} color={"#8b8f93"}>
              StartDate
            </Text>
            <Box fontSize={"24px"} fontWeight={"bold"} color={"#b7b3b3"}>
              {new Date(project.startDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}{" "}
            </Box>
          </Stack>
          <Flex
            w={"50px"}
            h={"50px"}
            mr={"10px"}
            bg={"red.500"}
            align={"center"}
            justify={"center"}
            borderRadius={"15px"}
          >
            <LuAlignHorizontalJustifyStart fontSize={"36px"} />
          </Flex>
        </Flex>

        {project.completedDate ? (
          <Flex
            ml={"10px"}
            justify={"space-between"}
            align={"center"}
            border={"2px solid #e7dede"}
            minW={"300px"}
            h={"80px"}
            padding={"4px"}
            fontSize={"20px"}
            borderRadius={"20px"}
            color={"#e7dede"}
            bg={"#060d16"}
          >
            <Stack gap={0} ml={"6px"}>
              <Text fontSize={"20px"} color={"#8b8f93"}>
                FinishDate
              </Text>
              <Box fontSize={"24px"} fontWeight={"bold"} color={"#b7b3b3"}>
                {new Date(project.completedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}{" "}
              </Box>
            </Stack>
            <Flex
              w={"50px"}
              h={"50px"}
              mr={"10px"}
              bg={"red.500"}
              align={"center"}
              justify={"center"}
              borderRadius={"15px"}
            >
              <GiFinishLine fontSize={"36px"} />
            </Flex>
          </Flex>
        ) : (
          <Flex
            ml={"10px"}
            justify={"space-between"}
            align={"center"}
            border={"2px solid #e7dede"}
            minW={"300px"}
            h={"80px"}
            padding={"4px"}
            fontSize={"20px"}
            borderRadius={"20px"}
            color={"#e7dede"}
            bg={"#060d16"}
          >
            <Stack gap={0} ml={"6px"}>
              <Text fontSize={"20px"} color={"#8b8f93"}>
                TargetDate
              </Text>
              <Box fontSize={"24px"} fontWeight={"bold"} color={"#b7b3b3"}>
                {new Date(project.targetDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}{" "}
              </Box>
            </Stack>
            <Flex
              w={"50px"}
              h={"50px"}
              mr={"10px"}
              bg={"red.500"}
              align={"center"}
              justify={"center"}
              borderRadius={"15px"}
            >
              <MdOutlineDateRange fontSize={"36px"} />
            </Flex>
          </Flex>
        )}
        {project.completedDate ? (
          <Flex
            ml={"10px"}
            justify={"space-between"}
            align={"center"}
            border={"2px solid #e7dede"}
            minW={"300px"}
            h={"80px"}
            padding={"4px"}
            fontSize={"20px"}
            borderRadius={"20px"}
            color={"#e7dede"}
            bg={"#060d16"}
          >
            <Stack gap={0} ml={"6px"}>
              <Text fontSize={"20px"} color={"#8b8f93"}>
                Target
              </Text>
              <Box fontSize={"24px"} fontWeight={"bold"} color={"#b7b3b3"}>
                {project.totalHours} HOURS{" "}
              </Box>
            </Stack>
            <Flex
              w={"50px"}
              h={"50px"}
              mr={"10px"}
              bg={"red.500"}
              align={"center"}
              justify={"center"}
              borderRadius={"15px"}
            >
              <GiTargetShot fontSize={"36px"} />
            </Flex>
          </Flex>
        ) : (
          <Flex
            ml={"10px"}
            justify={"space-between"}
            align={"center"}
            border={"2px solid #e7dede"}
            minW={"300px"}
            h={"80px"}
            padding={"4px"}
            fontSize={"20px"}
            borderRadius={"20px"}
            color={"#e7dede"}
            bg={"#060d16"}
          >
            <Stack gap={0} ml={"6px"}>
              <Text fontSize={"20px"} color={"#8b8f93"}>
                Target
              </Text>
              <Box fontSize={"24px"} fontWeight={"bold"} color={"#b7b3b3"}>
                {project.totalHours} HOURS{" "}
              </Box>
            </Stack>
            <Flex
              w={"50px"}
              h={"50px"}
              mr={"10px"}
              bg={"red.500"}
              align={"center"}
              justify={"center"}
              borderRadius={"15px"}
            >
              <GiTargetShot fontSize={"36px"} />
            </Flex>
          </Flex>
        )}
      </Flex>

      <Flex
        justify={"space-evenly"}
        align={"center"}
        gap={"40px"}
        m={"40px 20px 0"}
        minHeight={"450px"}
      >
        <Contribution teams={teams} />

        <Box
          w={"50%"}
          position={"relative"}
          bg={"#1a1d21"}
          padding={"10px"}
          borderRadius={"20px"}
          border={"2px solid #7d7373"}
        >
          <Button
            position={"absolute"}
            top={0}
            right={0}
            w={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            _hover={{ bg: "transparent" }}
            bg={"transparent"}
            onClick={() => setIsSelectOpen(true)}
          >
            <HamburgerIcon color={"#e7dede"} />
          </Button>
          <Select
            ref={ref}
            icon={"none"}
            mt={4}
            position={"absolute"}
            right={0}
            top={"20px"}
            bg={"#c9d2dd"}
            border={"1px solid #e7dede"}
            w={"110px"}
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
            minH={"450px"}
            maxH={"450px"}
          >
            <Box w={"80%"}>
              {isLoading ? (
                <Flex align={"center"} justify={"center"} mt={"36px"}>
                  <Spinner color="red.500" size="lg" />
                </Flex>
              ) : contribute === "team" ? (
                <ContributeChart totalhour={tshours} />
              ) : contribute === "task" ? (
                <ContributeByTask taskhour={tstask} />
              ) : (
                <ContributeByPerson personhour={tsperson} />
              )}
            </Box>
            <Text
              mt={"30px"}
              fontWeight={"bold"}
              fontSize={"20PX"}
              alignSelf={"center"}
              color={"#e7dede"}
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
export default ProjectDetail;
