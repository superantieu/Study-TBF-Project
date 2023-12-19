import Scrollbars from "react-custom-scrollbars-2";
import { useParams } from "react-router-dom";

import ProjectList from "../Projects/ProjectList";
import projects from "../data/projects";
import ongoingProject from "../data/ongoing";
import RenderThumb from "../../scrollbar/RenderThumb.jsx";

const CompletedDetail = () => {
  const params = useParams();
  let completeProject = [];

  projects.map((project) => {
    if (project.ProjectId === +params.id) {
      completeProject = [...completeProject, project];
    }
  });
  ongoingProject.map((ongoing) => {
    if (ongoing.ProjectId === +params.id) {
      completeProject = [...completeProject, ongoing];
    }
  });

  return (
    <Scrollbars
      autoHide={true}
      autoHideTimeout={1000}
      style={{ backgroundColor: "#272a2f" }}
      renderThumbVertical={RenderThumb}
    >
      <ProjectList projects={completeProject} />
    </Scrollbars>
  );
};
export default CompletedDetail;
