import Scrollbars from "react-custom-scrollbars-2";

import ProjectList from "./ProjectList";
import projects from "../data/projects";
import { Outlet } from "react-router-dom";
import RenderThumb from "../../scrollbar/RenderThumb.jsx";

const Projects = () => {
  return (
    <Scrollbars
      autoHide={true}
      autoHideTimeout={1000}
      style={{ backgroundColor: "#272a2f" }}
      renderThumbVertical={RenderThumb}
    >
      <ProjectList projects={projects} />
    </Scrollbars>
  );
};

export default Projects;
