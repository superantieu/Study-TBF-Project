import { Box } from "@chakra-ui/react";
import { useRef, useEffect } from "react";

import ProjectDetail from "./ProjectDetail";

const ProjectList = (props) => {
  const { projects } = props;
  const topRef = useRef(null);
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    console.log("thay doi");
    scrollToTop();
  }, [projects]);

  return (
    <Box mt={"5px"} mb={"5[x"} ref={topRef}>
      {projects.map((project) => (
        <ProjectDetail key={project.projectId} project={project} />
      ))}
    </Box>
  );
};
export default ProjectList;
