import {
  BellIcon,
  MoonIcon,
  Search2Icon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Link as SupLink } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";

const HeaderBar = () => {
  return (
    <Flex w="full" h="60px" justify={"space-between"} align={"center"}>
      <Flex
        padding={"10px"}
        h={"full"}
        w={"240px"}
        justify={"center"}
        align={"center"}
      >
        <MoonIcon fontSize={"24px"} color={"purple"} />
        <SupLink as={Link} to="/" _hover={"none"}>
          <Text fontSize={"20px"} color={"black"} padding={"10px"}>
            Super Antieu
          </Text>
        </SupLink>
      </Flex>
      <Box h={"full"} w={"500px"} padding={"10px"} mr={"20px"}>
        <Flex alignItems={"center"} justifyContent={"flex-end"} gap={"20px"}>
          <InputGroup w={"250px"}>
            <InputLeftElement>
              <Button backgroundColor={"transparent"}>
                <Search2Icon />
              </Button>
            </InputLeftElement>
            <Input variant="outline" placeholder="Type here..." />
          </InputGroup>
          <Box color={"white"} fontWeight={"bold"}>
            <SupLink as={Link} to="/signin">
              Sign In
            </SupLink>
          </Box>
          <SettingsIcon cursor={"pointer"} />
          <BellIcon fontSize={"20px"} cursor={"pointer"} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeaderBar;
