import { HStack, Image, VStack, Text } from "@chakra-ui/react";

import userIcon from "../../../assets/images/user_icon.png";

interface RankingProfileProps {
    profile: IRankingProfile;
}

const RankingProfile: React.FC<RankingProfileProps> = ({ profile }) => {
    return (
        <HStack w="full" h="80px" py="1" align={"center"} overflow={"hidden"}>
            <Image
                src={profile.icon ?? userIcon}
                h="72px"
                w="72px"
                objectFit={"cover"}
            />
            <VStack flex="2" spacing={0} align={"start"}>
                <Text fontSize={"16px"} lineHeight={"20px"} fontWeight={700}>
                    {profile.name}
                </Text>
                <Text fontSize={"14px"} lineHeight={"18px"}>
                    {profile.type}
                </Text>
                <Text fontSize={"14px"} lineHeight={"18px"}>
                    {profile.class}
                </Text>
                <Text fontSize={"14px"} lineHeight={"18px"}>
                    {profile.country}
                </Text>
            </VStack>
        </HStack>
    );
};

export default RankingProfile;
