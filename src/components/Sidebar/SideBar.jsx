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
  let sidebarBg =
    "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 50%, #ffffff 100%)";
  const [active, setActive] = useState("/");
  const handleClick = (path) => {
    setActive(path);
  };
  return (
    <Box
      h={"calc(100dvh - 120px)"}
      bg={sidebarBg}
      borderRadius={"20px"}
      padding={"10px"}
      ml={"10px"}
    >
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
                border={"1px solid purple"}
                color={"purple"}
                h={"40px"}
                borderRadius="15px"
                w="100%"
                boxShadow="2px 2px 4px purple"
                _active={{
                  bg: "purple",
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
