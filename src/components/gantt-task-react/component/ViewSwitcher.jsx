import React from "react";
import { ViewMode } from "gantt-task-react";
import { Button, Flex, FormLabel, FormControl, Switch } from "@chakra-ui/react";

export const ViewSwitcher = ({
  onViewModeChange,
  onViewListChange,
  isChecked,
  view,
}) => {
  console.log(onViewModeChange);
  console.log(view);
  return (
    <Flex align={"center"} justify={"flex-end"} gap={"10px"}>
      <Button
        bg={"transparent"}
        color={"red.400"}
        border={"1px solid #f56565 "}
        minW={"80px"}
        onClick={() => onViewModeChange(ViewMode.Day)}
        _active={{
          bg: "#f56565",
          color: "#fff",
        }}
        isActive={view === "Day"}
      >
        Day
      </Button>
      <Button
        bg={"transparent"}
        color={"red.400"}
        border={"1px solid #f56565 "}
        minW={"80px"}
        onClick={() => onViewModeChange(ViewMode.Week)}
        _active={{
          bg: "#f56565",
          color: "#fff",
        }}
        isActive={view === "Week"}
      >
        Week
      </Button>
      <Button
        bg={"transparent"}
        color={"red.400"}
        border={"1px solid #f56565 "}
        minW={"80px"}
        onClick={() => onViewModeChange(ViewMode.Month)}
        _active={{
          bg: "#f56565",
          color: "#fff",
        }}
        isActive={view === "Month"}
      >
        Month
      </Button>
      <Button
        bg={"transparent"}
        color={"red.400"}
        border={"1px solid #f56565 "}
        minW={"80px"}
        onClick={() => onViewModeChange(ViewMode.Year)}
        _active={{
          bg: "#f56565",
          color: "#fff",
        }}
        isActive={view === "Year"}
      >
        Year
      </Button>
      <Flex align={"center"} justify={"center"} gap={"5px"}>
        <FormControl display="flex" alignItems="center" gap={"5px"}>
          <Switch
            id="showtask"
            size={"lg"}
            colorScheme="red"
            isChecked={isChecked}
            onChange={() => onViewListChange(!isChecked)}
          />
          <FormLabel htmlFor="showtask" mb="0" color={"#b7b3b3"}>
            Show Task List
          </FormLabel>
        </FormControl>
      </Flex>
    </Flex>
  );
};
