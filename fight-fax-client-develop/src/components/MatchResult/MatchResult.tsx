import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";

interface MathResultProps {
    result: IMatchResult;
}
const MatchResult: React.FC<MathResultProps> = ({ result }) => {
    return (
        <HStack
            h="92px"
            mx="1"
            my="2"
            p="2"
            borderRadius={"10px"}
            bg="match-result-bg"
        >
            <VStack flex="1" py="2" spacing={0}>
                <Text fontSize={"20px"} fontWeight={700}>
                    {result.winner.name}
                </Text>
                <Text>{result.winner.name}</Text>
                <Text>{result.date}</Text>
            </VStack>
            <Box w="68px" px="1">
                <Flex
                    w="60px"
                    h="60px"
                    borderRadius={"10px"}
                    bg="ko-bg"
                    justify={"center"}
                    align="center"
                >
                    <Text fontSize={"32px"} fontWeight={700}>
                        KO
                    </Text>
                </Flex>
            </Box>
        </HStack>
    );
};

export default MatchResult;
