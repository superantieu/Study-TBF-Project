import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import projects from "./Projects";
import User from "./User";
import Contribution from "./Contribution";
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
