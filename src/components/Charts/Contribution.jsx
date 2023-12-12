import { Box, Flex, Text } from "@chakra-ui/react";

const Contribution = (props) => {
  const { teams } = props;
  return (
    <Flex w={"50%"} flexDirection={"column"} align={"center"}>
      <Text fontWeight={"bold"} fontSize={"20px"}>
        MEMBERS PARTICIPATING IN THE PROJECT
      </Text>
      <Flex
        w={"full"}
        rowGap={"10px"}
        columnGap={"40px"}
        flexWrap={"wrap"}
        justify={"center"}
      >
        {Object.keys(teams).map((tName) => (
          <Box
            w={"30%"}
            border={"4px double purple"}
            mt={"10px"}
            mb={"10px"}
            padding={"10px"}
            color={"purple"}
            key={tName}
            minWidth={"150px"}
          >
            <Flex
              flexDirection={"column"}
              key={tName}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontWeight={"bold"}> TEAM {tName}</Text>
              {teams[tName].map((user) => (
                <Text key={user.UserId}>{user.FullName}</Text>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
export default Contribution;
