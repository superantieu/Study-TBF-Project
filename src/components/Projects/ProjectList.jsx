import { Box } from "@chakra-ui/react";

import ProjectDetail from "./ProjectDetail";

const ProjectList = (props) => {
  const { projects } = props;

  return (
    <Box mt={"5px"} mb={"5[x"}>
      {projects.map((project) => (
        <ProjectDetail key={project.ProjectId} project={project} />
      ))}
    </Box>
  );
};
export default ProjectList;
