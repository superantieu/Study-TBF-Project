import { Link } from "react-router-dom";
import {
  Link as SupLink,
  Box,
  Text,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";
import arrayNameRoute from "./arrayNameRoute";
const SideBar = () => {
  let activeColor = "white";
  let sidebarBg =
    "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 50%, #ffffff 100%)";

  return (
    <Box
      h={"calc(100dvh - 120px)"}
      bg={sidebarBg}
      borderRadius={"20px"}
      padding={"10px"}
      ml={"10px"}
    >
      <Stack direction="column" mb="100px" w="full" h="full">
        {arrayNameRoute.map((rou) => {
          return (
            <SupLink as={Link} key={rou.path} to={rou.path}>
              <Button
                boxSize="initial"
                justifyContent="flex-start"
                alignItems="center"
                backgroundColor={"rgb(119 125 137 / 30%)"}
                mb={{
                  xl: "12px",
                }}
                mx={{
                  xl: "auto",
                }}
                ps={{
                  sm: "10px",
                  xl: "16px",
                }}
                py="12px"
                borderRadius="15px"
                _hover="none"
                w="100%"
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                <Flex>
                  <Text color={activeColor} my="auto" fontSize="sm">
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
