import Scrollbars from "react-custom-scrollbars-2";

import ProjectList from "../Charts/ProjectList";

import projects from "../Charts/Projects";

const Projects = () => {
  return (
    <Scrollbars autoHide={true} autoHideTimeout={1000}>
      <ProjectList projects={projects} />
    </Scrollbars>
  );
};

export default Projects;
