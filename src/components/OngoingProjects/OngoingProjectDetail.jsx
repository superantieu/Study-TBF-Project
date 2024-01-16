import Scrollbars from "react-custom-scrollbars-2";
import { Flex, Spinner } from "@chakra-ui/react";
import { useState } from "react";

import RenderThumb from "../../scrollbar/RenderThumb.jsx";
import ProjectList from "../Projects/ProjectList";
import { useGetOngoingProjectQuery } from "../../services/ongoingApi.js";
import Pagination from "../Pagination/Pagination.jsx";

const OngoingProjectDetail = () => {
  const [page, setPage] = useState(1);
  const {
    data: ongoProjects,
    error,
    isLoading,
  } = useGetOngoingProjectQuery({
    pageNumber: page,
    Completed: false,
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
      <ProjectList projects={ongoProjects.result ?? []} />
      <Flex align={"center"} justify={"center"}>
        <Pagination
          current={ongoProjects.pagination.currentPage}
          pageCount={ongoProjects.pagination.totalPages}
          setCurrent={setPage}
        />
      </Flex>
    </Scrollbars>
  );
};

export default OngoingProjectDetail;
