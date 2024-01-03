import Scrollbars from "react-custom-scrollbars-2";
import { useParams } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";

import ProjectList from "../Projects/ProjectList";
import RenderThumb from "../../scrollbar/RenderThumb.jsx";
import { useGetOngoingProjectQuery } from "../../services/ongoingApi.js";

const TeamProject = () => {
  const params = useParams();
  const {
    data: projectsByTeam,
    error,
    isLoading,
  } = useGetOngoingProjectQuery({ Discipline: params.name, pageSize: 50 });
  if (isLoading) {
    return (
      <Flex align={"center"} justify={"center"} mt={"36px"}>
        <Spinner color="red.500" size="lg" />
      </Flex>
    );
  }
  console.log("Sup", projectsByTeam.result);

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
      <ProjectList projects={projectsByTeam.result} />
    </Scrollbars>
  );
};
export default TeamProject;
