import Scrollbars from "react-custom-scrollbars-2";
import { useParams } from "react-router-dom";

import ProjectList from "../Projects/ProjectList";
import projects from "../data/projects";
import ongoingProject from "../data/ongoing";

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
  console.log(completeProject);
  return (
    <Scrollbars autoHide={true} autoHideTimeout={1000}>
      <ProjectList projects={completeProject} />
    </Scrollbars>
  );
};
export default CompletedDetail;
