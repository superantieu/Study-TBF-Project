import { useMemo } from "react";
import { VStack, Text, Flex } from "@chakra-ui/react";

import Swiper from "../Common/Swiper/Swiper";
import NextButton from "../Common/Swiper/components/NextButton";
import PrevButton from "../Common/Swiper/components/PrevButton";
import MatchResult from "../MatchResult/MatchResult";

import { mockResult } from "../../constants/match.mock";

const HomeMatchResult = () => {
    const results = useMemo(() => {
        const rs = [];
        for (let i = 0; i < mockResult.length; i += 2) {
            const chunk = mockResult.slice(i, i + 2);
            rs.push(chunk);
        }
        return rs;
    }, [mockResult]);

    return (
        <VStack
            bg="rgba(217, 217, 217, 0.20)"
            h="full"
            w="full"
            px="5"
            py="2"
            align={"start"}
        >
            <Text fontSize={"30px"}>Recent Match Results</Text>
            <Flex w="full" flex="1" align="center" justify={"center"}>
                <Swiper
                    customNextButton={<NextButton />}
                    customPrevButton={<PrevButton />}
                    options={{ slidesToShow: 3, slidesToScroll: 3 }}
                >
                    {results.map((result, index) => (
                        <VStack key={index} h="220px">
                            {result.map((r) => (
                                <MatchResult key={r._id} result={r} />
                            ))}
                        </VStack>
                    ))}
                </Swiper>
            </Flex>
        </VStack>
    );
};

export default HomeMatchResult;
