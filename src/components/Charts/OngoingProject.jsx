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
} from "@chakra-ui/react";
const list = ongoingProject;
const OngoingProject = () => {
  return (
    <Box w={"full"} mt={"50px"}>
      <TableContainer mr={"20px"}>
        <Table variant={"striped"} colorScheme="blue">
          <TableCaption fontSize={"20PX"} color={"purple"}>
            ONGOING PROJECTS
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Project</Th>
              <Th>Startdate</Th>
              <Th>Targetdate</Th>
              <Th>Members</Th>
              <Th>Tasks</Th>
              <Th>Completion</Th>
            </Tr>
          </Thead>
          <Tbody>
            {ongoingProject.map((arr, index) => (
              <Tr key={index}>
                <Td>{arr.name}</Td>
                <Td>
                  {arr.startdate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </Td>
                <Td>
                  {arr.targetdate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </Td>
                <Td>{arr.members}</Td>
                <Td>{arr.tasks}</Td>
                <Td>
                  <CircularProgress value={arr.completion} color="purple.400">
                    <CircularProgressLabel>
                      {arr.completion}%
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
