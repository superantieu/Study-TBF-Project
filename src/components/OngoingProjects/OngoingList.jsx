import { Box } from "@chakra-ui/react";

import OngoingDetail from "./OngoingDetail";

const OngoingList = (props) => {
  const { ongoingProject } = props;

  return (
    <Box>
      {ongoingProject.map((ongoingProject) => (
        <OngoingDetail
          key={ongoingProject.ProjectId}
          ongoingProject={ongoingProject}
        />
      ))}
    </Box>
  );
};
export default OngoingList;
