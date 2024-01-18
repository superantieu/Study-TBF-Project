import React from "react";
import { ViewMode } from "gantt-task-react";
import { Button, Flex, FormLabel, FormControl, Switch } from "@chakra-ui/react";

export const ViewSwitcher = ({
  onViewModeChange,
  onViewListChange,
  onDisciplineChange,
  isChecked,
  view,
  discip,
}) => {
  return (
    <Flex justify={"space-between"}>
      <Flex
        align={"center"}
        justify={"flex-end"}
        gap={"10px"}
        bg={"#fff"}
        padding={"5px"}
      >
        <Button
          bg={"transparent"}
          color={"red.400"}
          border={"1px solid #f56565 "}
          minW={"80px"}
          onClick={() => onDisciplineChange("")}
          _active={{
            bg: "#f56565",
            color: "#fff",
          }}
          isActive={discip === ""}
        >
          All
        </Button>
        <Button
          bg={"transparent"}
          color={"red.400"}
          border={"1px solid #f56565 "}
          minW={"80px"}
          onClick={() => onDisciplineChange("Architecture")}
          _active={{
            bg: "#f56565",
            color: "#fff",
          }}
          isActive={discip === "Architecture"}
        >
          Architecture
        </Button>
        <Button
          bg={"transparent"}
          color={"red.400"}
          border={"1px solid #f56565 "}
          minW={"80px"}
          onClick={() => onDisciplineChange("Structure")}
          _active={{
            bg: "#f56565",
            color: "#fff",
          }}
          isActive={discip === "Structure"}
        >
          Structure
        </Button>
        <Button
          bg={"transparent"}
          color={"red.400"}
          border={"1px solid #f56565 "}
          minW={"80px"}
          onClick={() => onDisciplineChange("MEP")}
          _active={{
            bg: "#f56565",
            color: "#fff",
          }}
          isActive={discip === "MEP"}
        >
          MEP
        </Button>
        <Button
          bg={"transparent"}
          color={"red.400"}
          border={"1px solid #f56565 "}
          minW={"80px"}
          onClick={() => onDisciplineChange("RnD")}
          _active={{
            bg: "#f56565",
            color: "#fff",
          }}
          isActive={discip === "RnD"}
        >
          RnD
        </Button>
      </Flex>
      <Flex
        align={"center"}
        justify={"flex-end"}
        gap={"10px"}
        bg={"#fff"}
        padding={"5px"}
      >
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
    </Flex>
  );
};
