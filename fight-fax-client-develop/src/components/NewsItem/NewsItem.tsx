import { VStack, Box, Image, Text, Button } from "@chakra-ui/react";

import defaultNews from "../../assets/images/default_news.png";

interface NewsItemProps {
    newsItem: INewsItem;
}

const NewsItem: React.FC<NewsItemProps> = ({ newsItem }) => {
    return (
        <VStack mx="1" bg="news-item-bg">
            <Box w="full" h="200px" position="relative">
                <Text
                    position={"absolute"}
                    right={0}
                    maxW="full"
                    fontSize="12px"
                    px="1"
                    bg="blackAlpha.800"
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                    css={{
                        display: "-webkit-box",
                        WebkitLineClamp: "1",
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {newsItem.source}
                </Text>
                <Image
                    src={newsItem.image ?? defaultNews}
                    objectFit={"cover"}
                />
                <Text
                    position={"absolute"}
                    right={0}
                    bottom={0}
                    maxW="full"
                    fontSize="12px"
                    px="1"
                    bg="blackAlpha.800"
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                    css={{
                        display: "-webkit-box",
                        WebkitLineClamp: "1",
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {newsItem.date}
                </Text>
            </Box>
            <VStack px="4" py="1" spacing={1} align="start">
                <Text
                    fontSize={"22px"}
                    fontWeight={700}
                    lineHeight={"24px"}
                    textOverflow={"ellipsis"}
                    overflow={"hidden"}
                    css={{
                        display: "-webkit-box",
                        WebkitLineClamp: "1",
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {newsItem.title + "sss"}
                </Text>

                <Text
                    fontSize={"16px"}
                    textOverflow={"ellipsis"}
                    overflow={"hidden"}
                    css={{
                        display: "-webkit-box",
                        WebkitLineClamp: "3",
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {newsItem.description}
                </Text>
                <Button alignSelf={"center"} my="2">
                    Read more
                </Button>
            </VStack>
        </VStack>
    );
};

export default NewsItem;
