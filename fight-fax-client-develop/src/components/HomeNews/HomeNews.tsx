import { VStack, Text, Flex } from "@chakra-ui/react";

import Swiper from "../Common/Swiper/Swiper";
import NextButton from "../Common/Swiper/components/NextButton";
import PrevButton from "../Common/Swiper/components/PrevButton";
import NewsItem from "../NewsItem/NewsItem";

import { mockNews } from "../../constants/news.mock";

const HomeNews = () => {
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
                    options={{ slidesToShow: 5, slidesToScroll: 5 }}
                >
                    {mockNews.map((news) => (
                        <NewsItem key={news._id} newsItem={news} />
                    ))}
                </Swiper>
            </Flex>
        </VStack>
    );
};

export default HomeNews;
