import { Select, Stack } from "@chakra-ui/react";
import { useState } from "react";

import SecondFilter from "./SecondFilter";

const Filter = () => {
  const [select, setSelect] = useState("");
  const handlleSelect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <Stack align={"center"} justify={"center"} gap={"10px"} padding={"10px"}>
      <Select
        onChange={handlleSelect}
        placeholder="Filter"
        color={"#fff"}
        bgColor={"#transparent"}
        className="selectbox"
        borderColor={"transparent"}
        boxShadow="1px 1px 2px #e53e3e"
        borderRadius={"15px"}
      >
        <option value="member">Members</option>
        <option value="discipline">Discipline</option>
        <option value="complete">Completed Project</option>
        <option value="ongoing">Ongoing Project</option>
      </Select>

      <SecondFilter select={select} />
    </Stack>
  );
};
export default Filter;
