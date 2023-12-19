import { Flex, Select, Box } from "@chakra-ui/react";
import { useState } from "react";

import SecondFilter from "./SecondFilter";

const Filter = () => {
  const [select, setSelect] = useState("");
  const handlleSelect = (e) => {
    setSelect(e.target.value);
  };
  return (
    <Flex align={"center"} justify={"center"} gap={"10px"}>
      <Select
        w={"200px"}
        onChange={handlleSelect}
        placeholder="Filter"
        color={"#000"}
        bgColor={"#e7dede"}
      >
        <Box as="option" value="member" color={"#000"}>
          Members
        </Box>
        <option value="discipline">Discipline</option>
        <option value="complete">Completed Project</option>
        <option value="ongoing">Ongoing Project</option>
      </Select>

      <SecondFilter select={select} />
    </Flex>
  );
};
export default Filter;
