import {
  Box,
  Flex,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
  Switch,
  Link as SupLink,
  Text,
  Circle,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaAppStore, FaApple, FaFacebook, FaTwitter } from "react-icons/fa";
import { useState } from "react";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex justify={"center"} mt={"20px"}>
      <Flex
        direction={"column"}
        mt={"20px"}
        w={"400px"}
        justify={"center"}
        align={"flex-start"}
        gap={"20px"}
        outline={"double"}
        color={"purple"}
        outlineOffset={"15px"}
        borderRadius={"4px"}
      >
        <Flex
          justify={"center"}
          w={"full"}
          fontSize={"30px"}
          fontWeight={"bold"}
          color={"purple"}
        >
          Register with
        </Flex>
        <Flex
          w={"full"}
          fontWeight={"bold"}
          color={"gray"}
          gap={"10px"}
          align={"center"}
          justify={"center"}
        >
          <Button
            fontSize={"40px"}
            bg={"transparent"}
            color={"purple"}
            _hover={"none"}
            _active={"none"}
          >
            <FaFacebook />
          </Button>
          <Button
            fontSize={"40px"}
            bg={"transparent"}
            color={"purple"}
            _hover={"none"}
            _active={"none"}
          >
            <FaTwitter />
          </Button>
          <Button
            fontSize={"40px"}
            bg={"transparent"}
            color={"purple"}
            _hover={"none"}
            _active={"none"}
          >
            <FaApple />
          </Button>
        </Flex>
        <Flex
          justify={"center"}
          w={"full"}
          fontSize={"30px"}
          fontWeight={"bold"}
          color={"purple"}
        >
          or
        </Flex>
        <FormControl>
          <FormLabel htmlFor="username" color={"purple"}>
            Name
          </FormLabel>
          <Input
            type={"text"}
            borderColor={"purple"}
            id="username"
            placeholder="Your name"
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email" color={"purple"}>
            Email
          </FormLabel>
          <Input
            type={"email"}
            borderColor={"purple"}
            id="email"
            placeholder="Your email address"
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password" color={"purple"}>
            Password
          </FormLabel>
          <InputGroup size="md">
            <Input
              id="password"
              borderColor={"purple"}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Your password"
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                bg={"purple"}
                color={"white"}
                _hover={{ color: "purple", bg: "white" }}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl display="flex" alignItems="center" gap={"20px"}>
          <Switch id="isRemember" colorScheme={"purple"} />
          <FormLabel htmlFor="isRemember" mb="0">
            Remember me
          </FormLabel>
        </FormControl>
        <Button
          w={"full"}
          bg={"purple"}
          color={"white"}
          _hover={{ color: "purple", bg: "white" }}
        >
          Sign Up
        </Button>
        <Box w={"full"}>
          <Flex justify={"center"} align={"center"}>
            <Text fontSize={"20px"} color={"gray"}>
              Already have an account?
            </Text>
            <SupLink as={Link} to="/signin" _hover={"none"}>
              <Text
                fontSize={"20px"}
                color={"purple"}
                padding={"10px"}
                _hover={{ color: "white" }}
              >
                Sign In
              </Text>
            </SupLink>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SignUp;
