import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Image,
  Circle,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import avatar1 from "../../../assets/img/avatars/ava.jpg";

const Profile = () => {
  return (
    <Flex
      w={"full"}
      align={"center"}
      direction={"column"}
      gap={"30px"}
      mt={"20px"}
    >
      <Flex align={"center"} justify={"space-between"} w={"full"} maxW="1000px">
        <Text fontSize={"30px"} fontWeight={"bold"} color={"purple"}>
          Edit profile
        </Text>
        <Box
          w={"100px"}
          h={"100px"}
          bg={"gray"}
          borderRadius={"50%"}
          position={"relative"}
          _hover={{
            "> .edit": {
              display: "block",
            },
          }}
        >
          <Image
            src={avatar1}
            alt="sup"
            objectFit={"cover"}
            borderRadius={"50%"}
          />

          <Flex
            w={"40px"}
            h={"40px"}
            borderRadius={"50%"}
            position={"absolute"}
            bg={"transparent"}
            right={"-10px"}
            bottom={"-10px"}
            align={"center"}
            justify={"center"}
            display={"none"}
            className="edit"
            cursor={"pointer"}
            padding={"2px"}
          >
            <EditIcon fontSize={"20px"} color={"gray"} />
          </Flex>
        </Box>
      </Flex>
      <Flex gap={"50px"} maxW={"800px"} w={"full"}>
        <FormControl>
          <FormLabel htmlFor="firstname" color={"purple"}>
            First name
          </FormLabel>
          <Input
            type={"text"}
            borderColor={"purple"}
            id="firstname"
            placeholder="Your first name"
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="lastname" color={"purple"}>
            Last name
          </FormLabel>
          <Input
            type={"text"}
            borderColor={"purple"}
            id="lastname"
            placeholder="Your last name"
          ></Input>
        </FormControl>
      </Flex>
      <FormControl maxW={"800px"}>
        <FormLabel htmlFor="email" color={"purple"}>
          Email
        </FormLabel>
        <Input
          type={"text"}
          borderColor={"purple"}
          id="email"
          placeholder="Your email"
        ></Input>
      </FormControl>
      <FormControl maxW={"800px"}>
        <FormLabel htmlFor="contactnumber" color={"purple"}>
          Contact number
        </FormLabel>
        <Input
          type={"number"}
          borderColor={"purple"}
          id="contactnumber"
          placeholder="Contact number"
        ></Input>
      </FormControl>
      <FormControl maxW={"800px"}>
        <FormLabel htmlFor="adress" color={"purple"}>
          Adress
        </FormLabel>
        <Input
          type={"text"}
          borderColor={"purple"}
          id="adress"
          placeholder="Adress"
        ></Input>
      </FormControl>
      <Flex gap={"50px"} maxW={"800px"} w={"full"}>
        <FormControl>
          <FormLabel htmlFor="city" color={"purple"}>
            City
          </FormLabel>
          <Input
            type={"text"}
            borderColor={"purple"}
            id="city"
            placeholder="Your city"
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="country" color={"purple"}>
            Country
          </FormLabel>
          <Input
            type={"text"}
            borderColor={"purple"}
            id="country"
            placeholder="Your country"
          ></Input>
        </FormControl>
      </Flex>
      <Flex gap={"50px"} maxW={"300px"} w={"full"}>
        <Button
          w={"full"}
          bg={"purple"}
          color={"white"}
          _hover={{
            color: "purple",
            bg: "transparent",
            border: "1px solid purple",
          }}
        >
          Cancel
        </Button>
        <Button
          w={"full"}
          bg={"purple"}
          color={"white"}
          _hover={{
            color: "purple",
            bg: "transparent",
            border: "1px solid purple",
          }}
        >
          Save
        </Button>
      </Flex>
    </Flex>
  );
};

export default Profile;
