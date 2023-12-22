import { Link, useLocation } from "react-router-dom";
import {
  Link as SupLink,
  Box,
  Text,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";

import arrayNameRoute from "../data/arrayNameRoute";
import Filter from "../Filter/Filter";

const SideBar = () => {
  const location = useLocation();

  return (
    <Stack
      h={"calc(100dvh - 120px)"}
      padding={"15px 0"}
      bg={"#272a2f"}
      alignItems={""}
      justifyContent={"space-between"}
    >
      <Stack
        direction="column"
        mb="100px"
        w="full"
        gap={"12px"}
        borderRadius={"20px"}
        p={"10px"}
        justify={"space-between"}
      >
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
                border={"1px solid red.400"}
                color={"#fff"}
                h={"40px"}
                borderRadius="15px"
                w="100%"
                boxShadow="1px 1px 2px #e53e3e"
                _active={{
                  bg: "red.500",
                  color: "white",
                  boxShadow: "none",
                }}
                isActive={location.pathname === rou.path}
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

      <Filter />
    </Stack>
  );
};

export default SideBar;
