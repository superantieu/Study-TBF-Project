import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import search from "../Commons/search";
import { Scrollbars } from "react-custom-scrollbars-2";
const SearchTable = (props) => {
  const { searchvalue } = props;

  const value = search.map((arr) => {
    if (arr.toLowerCase().includes(searchvalue)) {
      return arr;
    }
  });
  const lastValue = value.filter((arr) => arr !== undefined);
  console.log(value);
  console.log(lastValue);
  return (
    <Scrollbars autoHide={true} autoHideTimeout={1000}>
      <Flex flexDirection={"column"} padding={"8px"}>
        {lastValue.map((arr, index) => (
          <Box key={index} cursor={"pointer"} _hover={{ color: "red" }}>
            {searchvalue ? arr : ""}
          </Box>
        ))}
      </Flex>
    </Scrollbars>
  );
};
export default SearchTable;
