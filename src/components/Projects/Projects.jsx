import Scrollbars from "react-custom-scrollbars-2";

import ProjectList from "./ProjectList";
import projects from "../data/projects";
import { Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <Scrollbars autoHide={true} autoHideTimeout={1000}>
      <ProjectList projects={projects} />
    </Scrollbars>
  );
};

export default Projects;
