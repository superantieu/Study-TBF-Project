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
  useOutsideClick,
} from "@chakra-ui/react";
import { useState, useRef } from "react";

import SearchTable from "./SearchTable";

const HeaderBar = () => {
  const [focus, setFocus] = useState(false);
  const ref = useRef();
  const [searchvalue, setSearchvalue] = useState("");
  const handleChange = (e) => {
    setSearchvalue(e.target.value);
  };
  useOutsideClick({
    ref: ref,
    handler: () => setFocus(false),
  });
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
          <InputGroup w={"250px"} position={"relative"} zIndex={99}>
            <InputLeftElement>
              <Button backgroundColor={"transparent"}>
                <Search2Icon />
              </Button>
            </InputLeftElement>
            <Input
              ref={ref}
              variant="outline"
              placeholder="Type here..."
              onFocus={() => setFocus(true)}
              onChange={handleChange}
            />

            <Box
              w={"250px"}
              h={"250px"}
              bg={"white"}
              position={"absolute"}
              top={"50px"}
              left={0}
              borderRadius={"10px"}
              boxShadow={"1px 1px 4px purple"}
              display={focus ? "block" : "none"}
            >
              <SearchTable searchvalue={searchvalue} overflow={"hidden"} />
            </Box>
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
