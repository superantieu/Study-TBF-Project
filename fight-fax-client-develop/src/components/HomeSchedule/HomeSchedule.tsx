import {
    VStack,
    Text,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Box,
    Flex,
} from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars-2";

const HomeSchedule = () => {
    return (
        <VStack
            bg="rgba(217, 217, 217, 0.20)"
            h="full"
            w="full"
            px="8"
            py="2"
            align={"start"}
            overflow={"hidden"}
        >
            <Flex h="38px" ml="-2">
                <Text fontSize={"30px"}>Schedules and Odds</Text>
            </Flex>
            <Box flex="1" w="full" overflow={"hidden"}>
                <Table w="full">
                    <Thead h="30px">
                        <Tr>
                            <Th
                                fontFamily={"body"}
                                fontSize="20px"
                                fontWeight={700}
                                color="red"
                            >
                                Match
                            </Th>
                            <Th
                                fontFamily={"body"}
                                fontSize="20px"
                                fontWeight={700}
                                color="red"
                            >
                                Location
                            </Th>
                            <Th
                                fontFamily={"body"}
                                fontSize="20px"
                                fontWeight={700}
                                color="red"
                            >
                                Date
                            </Th>
                            <Th
                                fontFamily={"body"}
                                fontSize="20px"
                                fontWeight={700}
                                color="red"
                            >
                                Odds
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td py="0" minW="220px"></Td>
                            <Td py="0" minW="180px"></Td>
                            <Td py="0" minW="180px"></Td>
                            <Td py="0" minW="120px"></Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Scrollbars style={{ width: "100%", height: "100%" }}>
                    <Table
                        w="full"
                        h="0"
                        variant="striped"
                        colorScheme="whiteAlpha"
                    >
                        <Thead h="0">
                            <Tr h="0">
                                <Th h="0" py="0" minW="220px"></Th>
                                <Th h="0" py="0" minW="180px"></Th>
                                <Th h="0" py="0" minW="180px"></Th>
                                <Th h="0" py="0" minW="120px"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Fighter 1 vs Fighter 2</Td>
                                <Td>Las Vegas, NV</Td>
                                <Td>01/01/ 2023</Td>
                                <Td>30 : 12</Td>
                            </Tr>
                            <Tr>
                                <Td>Fighter 1 vs Fighter 2</Td>
                                <Td>Las Vegas, NV</Td>
                                <Td>01/01/ 2023</Td>
                                <Td>30 : 12</Td>
                            </Tr>
                            <Tr>
                                <Td>Fighter 1 vs Fighter 2</Td>
                                <Td>Las Vegas, NV</Td>
                                <Td>01/01/ 2023</Td>
                                <Td>30 : 12</Td>
                            </Tr>
                            <Tr>
                                <Td>Fighter 1 vs Fighter 2</Td>
                                <Td>Las Vegas, NV</Td>
                                <Td>01/01/ 2023</Td>
                                <Td>30 : 12</Td>
                            </Tr>
                            <Tr>
                                <Td>Fighter 1 vs Fighter 2</Td>
                                <Td>Las Vegas, NV</Td>
                                <Td>01/01/ 2023</Td>
                                <Td>30 : 12</Td>
                            </Tr>
                            <Tr>
                                <Td>Fighter 1 vs Fighter 2</Td>
                                <Td>Las Vegas, NV</Td>
                                <Td>01/01/ 2023</Td>
                                <Td>30 : 12</Td>
                            </Tr>
                            <Tr>
                                <Td>Fighter 1 vs Fighter 2</Td>
                                <Td>Las Vegas, NV</Td>
                                <Td>01/01/ 2023</Td>
                                <Td>30 : 12</Td>
                            </Tr>
                            <Tr>
                                <Td>Fighter 1 vs Fighter 2</Td>
                                <Td>Las Vegas, NV</Td>
                                <Td>01/01/ 2023</Td>
                                <Td>30 : 12</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Scrollbars>
            </Box>
        </VStack>
    );
};

export default HomeSchedule;
