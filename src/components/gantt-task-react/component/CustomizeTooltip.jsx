import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import "../table.css";

const CustomizeTooltip = ({ task, fontSize, fontFamily }) => {
  const style = {
    fontSize,
    fontFamily,
  };
  return (
    <Stack
      bg={"#fff"}
      padding={"12px"}
      boxShadow={"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"}
      style={style}
    >
      <Text fontWeight={"bold"}>
        {task.name}
        {": "}
        {task.start.toLocaleDateString("vi-VN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
        {" - "}
        {task.end.toLocaleDateString("vi-VN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </Text>
      <Text>
        {"Duration: "}
        {(task.end.getTime() - task.start.getTime()) /
          (1000 * 60 * 60 * 24)}{" "}
        {" day(s)"}
      </Text>
      <Text>{!!task.progress && `Progress: ${task.progress} %`}</Text>
      <Text>Used: {task.totalhours}</Text>
      <Text>Members: {task.member.length}</Text>
    </Stack>
  );
};
export default CustomizeTooltip;
