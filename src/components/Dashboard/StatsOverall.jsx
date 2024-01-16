import {
  Divider,
  Flex,
  Stack,
  Text,
  AbsoluteCenter,
  Box,
  Spinner,
} from "@chakra-ui/react";

import { useGetAllUsersQuery } from "../../services/ongoingApi";

const StatsOverall = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useGetAllUsersQuery({
    Employed: 1,
    pageSize: 500,
  });
  if (isLoading) {
    return (
      <Flex align={"center"} justify={"center"} mt={"36px"}>
        <Spinner color="red.500" size="lg" />
      </Flex>
    );
  }
  const projectTeamSize = users.result.filter(
    (user) =>
      user.discipline === "Architecture" ||
      user.discipline === "MEP" ||
      user.discipline === "Structure"
  ).length;

  const manager = users.result.filter(
    (user) =>
      ["Architecture", "Structure", "MEP"].includes(user.discipline) &&
      ["Manager II", "Senior Manager I", "Senior Manager II"].includes(
        user.jobTitle
      )
  ).length;

  const leader = users.result.filter(
    (user) =>
      ["Architecture", "Structure", "MEP"].includes(user.discipline) &&
      user.jobTitle === "Manager I"
  ).length;
  return (
    <Stack color={"#fff"}>
      <Box position="relative" padding="10" mt={"18PX"}>
        <Divider borderColor={"red.500"} />
        <AbsoluteCenter
          bg="red.500"
          color={"white"}
          px="8"
          borderRadius={"99px"}
        >
          STATS OVERALL ABOUT TEAM
        </AbsoluteCenter>
      </Box>
      <Flex
        align={"center"}
        justify={"space-between"}
        bg={"#08040459"}
        m={"0px 20px 20px 20px"}
        borderRadius={"20px"}
        padding={"10px 20px"}
        fontSize={"20px"}
      >
        <Stack align={"center"} justify={"center"}>
          <Text>Project Team Size</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {projectTeamSize}
          </Text>
        </Stack>
        <Divider orientation="vertical" borderColor={"red.500"} h={"70px"} />
        <Stack align={"center"} justify={"center"}>
          <Text>Architects</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {
              users.result.filter((user) => user.discipline === "Architecture")
                .length
            }
          </Text>
        </Stack>
        <Stack align={"center"} justify={"center"}>
          <Text>Structures</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {
              users.result.filter((user) => user.discipline === "Structure")
                .length
            }
          </Text>
        </Stack>
        <Stack align={"center"} justify={"center"}>
          <Text>MEP</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {users.result.filter((user) => user.discipline === "MEP").length}
          </Text>
        </Stack>
        <Divider orientation="vertical" borderColor={"red.500"} h={"70px"} />
        <Stack align={"center"} justify={"center"}>
          <Text>Staff</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {projectTeamSize - leader - manager}
          </Text>
        </Stack>
        <Stack align={"center"} justify={"center"}>
          <Text>Team Leaders</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {leader}
          </Text>
        </Stack>
        <Stack align={"center"} justify={"center"}>
          <Text>Managers</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {manager}
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};
export default StatsOverall;
