import Scrollbars from "react-custom-scrollbars-2";
import { Flex, Spinner } from "@chakra-ui/react";
import { useState } from "react";

import ProjectList from "./ProjectList";
import RenderThumb from "../../scrollbar/RenderThumb.jsx";
import { useGetOngoingProjectQuery } from "../../services/ongoingApi.js";
import Pagination from "../Pagination/Pagination.jsx";

const Projects = () => {
  const [page, setPage] = useState(1);

  const {
    data: Projects,
    error,
    isLoading,
  } = useGetOngoingProjectQuery({
    pageNumber: page,
    Completed: true,
    pageSize: 10,
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
      <ProjectList projects={Projects.result} />
      <Flex align={"center"} justify={"center"}>
        <Pagination
          current={Projects.pagination.currentPage}
          pageCount={Projects.pagination.totalPages}
          setCurrent={setPage}
        />
      </Flex>
    </Scrollbars>
  );
};

export default Projects;
