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
  Select,
} from "@chakra-ui/react";
import { useState, useRef } from "react";

import SearchTable from "./SearchTable";
import useDebounce from "../../hooks/useDebounce/useDebounce";

const HeaderBar = () => {
  const [focus, setFocus] = useState(false);
  const ref = useRef();
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState("Projects");

  const handlleSelect = (e) => {
    setType(e.target.value);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const searchvalue = useDebounce(inputValue.toLowerCase(), 500);

  useOutsideClick({
    ref: ref,
    handler: () => {
      setFocus(false);
      setInputValue("");
    },
  });

  return (
    <Flex
      w="full"
      h="60px"
      justify={"space-between"}
      align={"center"}
      borderBottom={"1px solid #d3baba"}
      bg={"#272a2f"}
    >
      <Flex
        padding={"10px"}
        h={"full"}
        minW={"400px"}
        justify={"center"}
        align={"center"}
        gap={"5px"}
      >
        <MoonIcon fontSize={"24px"} color={"red.500"} />
        <SupLink as={Link} to="/" _hover={{ bg: "transparent" }}>
          <Text fontSize={"20px"} color={"white"} padding={"10px"}>
            Super Antieu
          </Text>
        </SupLink>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"flex-end"} gap={"20px"}>
        <Flex align={"center"} minW={"350px"} justify={"flex-end"}>
          <Box minW={"100px"} color={"#fff"}>
            Search Type
          </Box>
          <Select
            w={"200px"}
            onChange={handlleSelect}
            color={"#fff"}
            bgColor={"transparent"}
            className="selectbox"
          >
            <option value="Projects">Project</option>
            <option value="Users">Member</option>
            <option value="Tasks/Discipline">Discipline</option>
          </Select>
        </Flex>
        <InputGroup
          minW={"250px"}
          position={"relative"}
          zIndex={99}
          color={"#fff"}
        >
          <InputLeftElement>
            <Button backgroundColor={"transparent"} color={"#fff"}>
              <Search2Icon />
            </Button>
          </InputLeftElement>
          <Input
            ref={ref}
            variant="outline"
            placeholder="Type here..."
            value={inputValue}
            onFocus={() => setFocus(true)}
            onChange={handleChange}
          />

          <Box
            w={"250px"}
            h={"250px"}
            position={"absolute"}
            top={"50px"}
            left={0}
            display={focus ? "block" : "none"}
          >
            <SearchTable
              searchvalue={searchvalue}
              type={type}
              overflow={"hidden"}
            />
          </Box>
        </InputGroup>
      </Flex>
      <Flex
        padding={"10px"}
        h={"full"}
        minW={"400px"}
        justify={"center"}
        align={"center"}
        gap={"10px"}
      >
        <SettingsIcon cursor={"pointer"} color={"#fff"} />
        <BellIcon fontSize={"20px"} cursor={"pointer"} color={"#fff"} />
      </Flex>
    </Flex>
  );
};

export default HeaderBar;
