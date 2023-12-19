import { Link } from "react-router-dom";
import {
  Link as SupLink,
  Box,
  Text,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

import arrayNameRoute from "../data/arrayNameRoute";

const SideBar = () => {
  const [active, setActive] = useState("/");
  const handleClick = (path) => {
    setActive(path);
  };
  return (
    <Box h={"calc(100dvh - 120px)"} bg={"#272a2f"} padding={"10px"} ml={"10px"}>
      <Stack direction="column" mb="100px" w="full" h="full" gap={"12px"}>
        {arrayNameRoute.map((rou) => {
          return (
            <SupLink as={Link} key={rou.path} to={rou.path}>
              <Button
                boxSize="initial"
                transition="transform 0.3s ease"
                _hover={{ transform: "translateY(-2px)" }}
                justifyContent="flex-start"
                alignItems="center"
                backgroundColor={"transparent"}
                border={"1px solid red.500"}
                color={"#fff"}
                h={"40px"}
                borderRadius="15px"
                w="100%"
                boxShadow="1px 1px 2px red"
                _active={{
                  bg: "red.500",
                  color: "white",
                  boxShadow: "none",
                }}
                isActive={active === rou.path}
                onClick={() => handleClick(rou.path)}
              >
                <Flex>
                  <Text my="auto" fontSize="sm">
                    {rou.name}
                  </Text>
                </Flex>
              </Button>
            </SupLink>
          );
        })}
      </Stack>
    </Box>
  );
};

export default SideBar;
