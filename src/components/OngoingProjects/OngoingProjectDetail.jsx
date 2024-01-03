import Scrollbars from "react-custom-scrollbars-2";
import { Flex, Spinner } from "@chakra-ui/react";

import RenderThumb from "../../scrollbar/RenderThumb.jsx";
import ProjectList from "../Projects/ProjectList";
import { useGetOngoingProjectQuery } from "../../services/ongoingApi.js";

const OngoingProjectDetail = () => {
  const {
    data: ongoProjects,
    error,
    isLoading,
  } = useGetOngoingProjectQuery({
    Completed: false,
    pageSize: 50,
  });
  if (isLoading) {
    return (
      <Flex align={"center"} justify={"center"} mt={"36px"}>
        <Spinner color="red.500" size="lg" />
      </Flex>
    );
  }

  return (
    <Scrollbars
      autoHide={true}
      autoHideTimeout={1000}
      style={{ backgroundColor: "#272a2f" }}
      renderThumbVertical={RenderThumb}
    >
      <ProjectList projects={ongoProjects.result ?? []} />
    </Scrollbars>
  );
};

export default OngoingProjectDetail;
