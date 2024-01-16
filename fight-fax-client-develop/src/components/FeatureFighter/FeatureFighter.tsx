import {
    Divider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    Input,
    List,
    ListItem,
} from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";

import RankingProfile from "./components/RankingProfile";

import userDefault from "../../assets/images/user_default.png";
import userTemp from "../../assets/images/female_fighter_1.jpg";
import { mockRankingProfile } from "../../constants/profile.mock";

const FeatureFighter = () => {
    return (
        <VStack w="full" h="full" bg="rgba(217, 217, 217, 0.20)" px="6" py="4">
            <VStack flex="2" w="full" overflow={"hidden"}>
                <Text as="h2" w="full" fontSize="30px" textAlign={"start"}>
                    Featured Fighter
                </Text>
                <HStack w="full" justify={"space-between"}>
                    <Box flex="1" h="full" w="full">
                        <Image
                            src={userTemp ?? userDefault}
                            w="full"
                            h={"full"}
                            objectFit={"cover"}
                        />
                    </Box>
                    <VStack flex="1" w="full" spacing={0}>
                        <Text
                            fontSize={"18px"}
                            lineHeight={"24px"}
                            fontWeight={700}
                        >
                            Fighter Name
                        </Text>
                        <Text fontSize={"16px"} lineHeight={"20px"}>
                            Type of Fight
                        </Text>
                        <Text fontSize={"16px"} lineHeight={"20px"}>
                            Class
                        </Text>
                        <Text fontSize={"16px"} lineHeight={"20px"}>
                            Country
                        </Text>
                        <Text fontSize={"16px"} lineHeight={"20px"}>
                            Recent Fight 1
                        </Text>
                        <Text fontSize={"16px"} lineHeight={"20px"}>
                            Recent Fight 2
                        </Text>
                        <Text fontSize={"16px"} lineHeight={"20px"}>
                            Recent Fight 3
                        </Text>
                        <Text fontSize={"16px"} lineHeight={"20px"}>
                            Social Media
                        </Text>
                    </VStack>
                </HStack>
            </VStack>
            <Divider />
            <VStack flex="5" w="full" align={"start"}>
                <Text
                    as="h2"
                    w="full"
                    fontSize="30px"
                    fontWeight={500}
                    textAlign={"start"}
                >
                    Ranking & Profile
                </Text>
                <Input
                    variant={"search-ranking"}
                    placeholder="Sort by Category"
                />
                <List w="full" flex="1">
                    <Scrollbars
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        {mockRankingProfile.map((p) => (
                            <ListItem key={p._id}>
                                <RankingProfile profile={p} />
                            </ListItem>
                        ))}
                    </Scrollbars>
                </List>
            </VStack>
        </VStack>
    );
};

export default FeatureFighter;
