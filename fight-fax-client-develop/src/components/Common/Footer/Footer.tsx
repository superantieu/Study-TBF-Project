import { Text, HStack } from "@chakra-ui/react";
import { DateTime } from "luxon";

const Footer = () => {
    return (
        <HStack
            as="footer"
            zIndex="99"
            w="full"
            h="40px"
            justify={"space-between"}
            align="center"
        >
            <Text>{`© ${
                DateTime.now().year
            } ${import.meta.env.VITE_APP_TITLE.toUpperCase()}`}</Text>
            <Text>
                Footnote: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
            </Text>
        </HStack>
    );
};
export default Footer;
