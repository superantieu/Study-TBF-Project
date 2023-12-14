import Scrollbars from "react-custom-scrollbars-2";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import ProjectList from "../Projects/ProjectList";
import projects from "../data/projects";
import ongoingProject from "../data/ongoing";

const TeamProject = () => {
  const params = useParams();
  let teamProject = [];
  let findTeam;
  projects.map((teampj) => {
    findTeam = teampj.ListMember.find(
      (team) => team.Discipline === params.name
    );
    if (findTeam) {
      teamProject = [...teamProject, teampj];
    }
  });

  ongoingProject.map((teampj) => {
    findTeam = teampj.ListMember.find(
      (team) => team.Discipline === params.name
    );
    if (findTeam) {
      teamProject = [...teamProject, teampj];
    }
  });
  console.log(teamProject);
  return (
    <Scrollbars autoHide={true} autoHideTimeout={1000}>
      <Box mb={"10px"} fontSize={"20px"} fontWeight={"bold"}>
        PROJECTS IN WHICH TEAM {params.name} PARTICIPATES
      </Box>
      <ProjectList projects={teamProject} />
    </Scrollbars>
  );
};
export default TeamProject;
