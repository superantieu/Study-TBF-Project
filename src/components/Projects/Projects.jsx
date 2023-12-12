import Scrollbars from "react-custom-scrollbars-2";

import ProjectList from "./ProjectList";
import projects from "../Data/projects";

const Projects = () => {
  return (
    <Scrollbars autoHide={true} autoHideTimeout={1000}>
      <ProjectList projects={projects} />
    </Scrollbars>
  );
};

export default Projects;
