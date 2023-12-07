import { Box, Progress } from "@chakra-ui/react";

const ProgressBar = () => {
  return (
    <Box position="fixed" top="0" left="0" width="100%" zIndex="9999">
      <Progress colorScheme="whatsapp" size="xs" isIndeterminate />
    </Box>
  );
};

export default ProgressBar;
