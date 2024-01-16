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
  Flex,
  Spinner,
} from "@chakra-ui/react";

import { useGetOngoingProjectQuery } from "../../services/ongoingApi";

const OngoingProject = () => {
  const {
    data: ongoProjects,
    error,
    isLoading,
  } = useGetOngoingProjectQuery({
    Completed: false,
    pageSize: 10,
  });

  return (
    <Box mt={"30px"}>
      <Box position="relative" padding="10">
        <Divider borderColor={"red.500"} />
        <AbsoluteCenter
          bg="red.500"
          color={"white"}
          px="8"
          borderRadius={"99px"}
        >
          ONGOING PROJECTS
        </AbsoluteCenter>
      </Box>
      <Box bg={"#08040459"} m={"0 20px"} borderRadius={"20px"} padding={"20px"}>
        {isLoading ? (
          <Flex align={"center"} justify={"center"} mt={"36px"}>
            <Spinner color="red.500" size="lg" />
          </Flex>
        ) : (
          <TableContainer>
            <Table variant={"striped"} colorScheme="whiteAlpha" color={"#fff"}>
              <Thead>
                <Tr>
                  <Th color={"red.300"}>Project</Th>
                  <Th color={"red.300"}>Startdate</Th>
                  <Th color={"red.300"}>Targetdate</Th>
                  <Th color={"red.300"}>Members</Th>
                  <Th color={"red.300"}>Used Hours</Th>
                  <Th color={"red.300"}>Target Hours</Th>
                </Tr>
              </Thead>
              <Tbody>
                {ongoProjects.result.map((arr, index) => (
                  <Tr key={index}>
                    <Td>{arr.projectName}</Td>
                    <Td>
                      {new Date(arr.startDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </Td>
                    <Td>
                      {new Date(arr.targetDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </Td>
                    <Td>{arr.filterMembers.length}</Td>
                    <Td>{arr.usedHours}</Td>
                    <Td>{arr.totalHours}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <Box h={"20px"} color={"transparent"}></Box>
    </Box>
  );
};
export default OngoingProject;
