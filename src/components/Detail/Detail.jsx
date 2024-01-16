import Scrollbars from "react-custom-scrollbars-2";
import { useParams } from "react-router-dom";
import { Flex, Spinner, Box, Text } from "@chakra-ui/react";
import { useState } from "react";

import RenderThumb from "../../scrollbar/RenderThumb.jsx";
import {
  useGetOngoingProjectQuery,
  useGetUserQuery,
} from "../../services/ongoingApi.js";
import SupTable from "../Dashboard/DisciplineProjectTable.jsx";

const UserDetail = () => {
  const [page, setPage] = useState(1);
  const params = useParams();
  const {
    data: user,
    error: userError,
    isLoading: userLoading,
  } = useGetUserQuery(params.id);

  const {
    data: projectsByTMember,
    error,
    isLoading,
  } = useGetOngoingProjectQuery({
    Member: params.id,
    pageNumber: page,
  });
  let data = [];
  if (isLoading || userLoading) {
    data = [];
    return (
      <Flex align={"center"} justify={"center"} mt={"36px"}>
        <Spinner color="red.500" size="lg" />
      </Flex>
    );
  }

  const columns = [
    {
      Header: "Project",
      accessor: "project",
      width: "290px",
      cell: ({ value }) => {
        return (
          <Text
            w="300px"
            maxW={"300px"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
          >
            {value}
          </Text>
        );
      },
    },
    {
      Header: "Startdate",
      accessor: "startdate",
      width: "160px",
      cell: ({ value }) => {
        return (
          <Text
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
          >
            {new Date(value).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </Text>
        );
      },
    },
    {
      Header: "Targetdate",
      accessor: "targetdate",
      width: "160px",
      cell: ({ value }) => {
        return (
          <Text
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
          >
            {new Date(value).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </Text>
        );
      },
    },
    {
      Header: "CompletedDate",
      accessor: "completedDate",
      width: "160px",
      cell: ({ value }) => {
        return (
          <Text
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
          >
            {new Date(value).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </Text>
        );
      },
    },
    {
      Header: "Members",
      accessor: "members",
      width: "125px",
      cell: ({ value }) => {
        return (
          <Text
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
          >
            {value}
          </Text>
        );
      },
    },

    {
      Header: "Target Hours",
      accessor: "target",
      width: "155px",
      cell: ({ value }) => {
        return (
          <Text
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
          >
            {value}
          </Text>
        );
      },
    },
  ];
  data = projectsByTMember.result.map((pjMem) => {
    return {
      project: pjMem.projectName,
      startdate: new Date(pjMem.startDate).getTime(),
      targetdate: new Date(pjMem.targetDate).getTime(),
      completedDate: new Date(pjMem.completedDate).getTime(),
      members:
        (pjMem.listmember.match(/\([^)]+\)/g) || []).length +
        (pjMem.listLeader.match(/\([^)]+\)/g) || []).length +
        (pjMem.listManager.match(/\([^)]+\)/g) || []).length,
      target: pjMem.totalHours,
    };
  });

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
        <Text>
          PROJECTS IN WHICH {user.result.fullName.toUpperCase()} PARTICIPATES
        </Text>
      </Flex>
      <Box>
        <SupTable
          columns={columns}
          data={data}
          setCurrent={setPage}
          project={projectsByTMember}
          rowNavigate={{ path: "projectdetail", slug: "projectId" }}
        />
      </Box>
    </Scrollbars>
  );
};

export default UserDetail;
