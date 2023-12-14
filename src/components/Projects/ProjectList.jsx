import { Box } from "@chakra-ui/react";

import ProjectDetail from "./ProjectDetail";

const ProjectList = (props) => {
  const { projects } = props;

  return (
    <Box>
      {projects.map((project) => (
        <ProjectDetail key={project.ProjectId} project={project} />
      ))}
    </Box>
  );
};
export default ProjectList;
