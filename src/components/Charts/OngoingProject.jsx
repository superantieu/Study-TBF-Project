import ongoingProject from "./ongoing";
import {
  Box,
  Table,
  TableCaption,
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
const list = ongoingProject;
const OngoingProject = () => {
  return (
    <Box w={"full"} mt={"30px"}>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          bg="purple"
          color={"white"}
          px="8"
          borderRadius={"99px"}
        >
          ONGOING PROJECTS
        </AbsoluteCenter>
      </Box>
      <TableContainer mr={"20px"}>
        <Table variant={"striped"} colorScheme="blue">
          <Thead>
            <Tr>
              <Th>Project</Th>
              <Th>Startdate</Th>
              <Th>Targetdate</Th>
              <Th>Members</Th>
              <Th>Tasks</Th>
              <Th textAlign={"center"}>Completion</Th>
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
                    color="purple.400"
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
