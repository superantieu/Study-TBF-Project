import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FcLike } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const FooterBar = () => {
  return (
    <Flex w="full" h="60px" justify={"space-between"} align={"center"}>
      <Box>
        <Flex
          alignItems={"center"}
          gap={"4px"}
          ml={"30px"}
          color={"purple"}
          fontSize={"20px"}
        >
          Nothing gonna change my <FcLike fontSize={"20px"} /> for you!!!
        </Flex>
      </Box>
      <Flex align={"center"} gap={"20px"} mr={"40px"}>
        <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
          Call us
        </Button>
        <Button
          colorScheme="facebook"
          leftIcon={<FaFacebook />}
          variant="outline"
        >
          Facebook
        </Button>
        <Button
          colorScheme="twitter"
          leftIcon={<FaTwitter />}
          variant="outline"
        >
          Twitter
        </Button>
      </Flex>
    </Flex>
  );
};

export default FooterBar;
