import Scrollbars from "react-custom-scrollbars-2";
import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import ProjectList from "../Projects/ProjectList";
import projects from "../data/projects";
import ongoingProject from "../data/ongoing";
import RenderThumb from "../../scrollbar/RenderThumb.jsx";

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
    <Scrollbars
      autoHide={true}
      autoHideTimeout={1000}
      style={{ backgroundColor: "#272a2f" }}
      renderThumbVertical={RenderThumb}
    >
      <Flex
        mt={"20px"}
        mb={"20px"}
        fontSize={"20px"}
        fontWeight={"bold"}
        align={"center"}
        justify={"center"}
        color={"#e7dede"}
      >
        PROJECTS IN WHICH TEAM {params.name} PARTICIPATES
      </Flex>
      <ProjectList projects={teamProject} />
    </Scrollbars>
  );
};
export default TeamProject;
