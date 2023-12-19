import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";

import ongoingProject from "../data/ongoing";

const list = ongoingProject;
const OngoingProject = () => {
  return (
    <Box w={"full"} mt={"30px"}>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          bg="red.500"
          color={"white"}
          px="8"
          borderRadius={"99px"}
        >
          ONGOING PROJECTS
        </AbsoluteCenter>
      </Box>
      <TableContainer mr={"20px"}>
        <Table variant={"striped"} colorScheme="whiteAlpha" color={"#fff"}>
          <Thead>
            <Tr>
              <Th color={"red.300"}>Project</Th>
              <Th color={"red.300"}>Startdate</Th>
              <Th color={"red.300"}>Targetdate</Th>
              <Th color={"red.300"}>Members</Th>
              <Th color={"red.300"}>Tasks</Th>
              <Th textAlign={"center"} color={"red.300"}>
                Completion
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {ongoingProject.map((arr, index) => (
              <Tr key={index}>
                <Td>{arr.ProjectName}</Td>
                <Td>
                  {arr.StartDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </Td>
                <Td>
                  {arr.TargetDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </Td>
                <Td>{arr.ListMember.length}</Td>
                <Td>{arr.Tasks}</Td>
                <Td padding={"4px"} textAlign={"center"}>
                  <CircularProgress
                    value={arr.Completion}
                    color="red.400"
                    size={"46px"}
                  >
                    <CircularProgressLabel>
                      {arr.Completion}%
                    </CircularProgressLabel>
                  </CircularProgress>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default OngoingProject;
