import Scrollbars from "react-custom-scrollbars-2";
import { useParams } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";

import ProjectList from "../Projects/ProjectList";
import projects from "../data/projects";
import ongoingProject from "../data/ongoing";
import RenderThumb from "../../scrollbar/RenderThumb.jsx";
import { useGetSpecificProjectQuery } from "../../services/ongoingApi.js";

const CompletedDetail = () => {
  const params = useParams();
  const {
    data: specificProjects,
    error,
    isLoading,
  } = useGetSpecificProjectQuery(params.id);
  if (isLoading) {
    return (
      <Flex align={"center"} justify={"center"} mt={"36px"}>
        <Spinner color="red.500" size="lg" />
      </Flex>
    );
  }
  console.log("Sup", specificProjects.result);

  return (
    <Scrollbars
      autoHide={true}
      autoHideTimeout={1000}
      style={{ backgroundColor: "#272a2f" }}
      renderThumbVertical={RenderThumb}
    >
      <ProjectList projects={[specificProjects.result]} />
    </Scrollbars>
  );
};
export default CompletedDetail;
