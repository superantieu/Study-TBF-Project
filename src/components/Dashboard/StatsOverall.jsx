import {
  Divider,
  Flex,
  Stack,
  Text,
  AbsoluteCenter,
  Box,
} from "@chakra-ui/react";

import statsoverall from "../data/statsoverall";

const StatsOverall = () => {
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
            {statsoverall.projectteamsize}
          </Text>
        </Stack>
        <Divider orientation="vertical" borderColor={"red.500"} h={"70px"} />
        <Stack align={"center"} justify={"center"}>
          <Text>Architects</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {statsoverall.architectures}
          </Text>
        </Stack>
        <Stack align={"center"} justify={"center"}>
          <Text>Structures</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {statsoverall.structures}
          </Text>
        </Stack>
        <Stack align={"center"} justify={"center"}>
          <Text>MEP</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {statsoverall.mep}
          </Text>
        </Stack>
        <Divider orientation="vertical" borderColor={"red.500"} h={"70px"} />
        <Stack align={"center"} justify={"center"}>
          <Text>Staff</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {statsoverall.staff}
          </Text>
        </Stack>
        <Stack align={"center"} justify={"center"}>
          <Text>Team Leaders</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {statsoverall.teamleader}
          </Text>
        </Stack>
        <Stack align={"center"} justify={"center"}>
          <Text>Managers</Text>
          <Text fontSize={"28px"} fontWeight={"bold"}>
            {statsoverall.manager}
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};
export default StatsOverall;
