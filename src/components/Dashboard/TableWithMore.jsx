import { useState } from "react";
import { Box, Flex, Spinner, Td, Text } from "@chakra-ui/react";

import TableWithPagination from "./CompletedTable";
import { useGetOngoingProjectQuery } from "../../services/ongoingApi";

const TableMore = () => {
  const [page, setPage] = useState(1);
  const {
    data: completedProjects,
    error,
    isLoading,
  } = useGetOngoingProjectQuery({
    pageNumber: page,
    Completed: true,
    pageSize: 10,
  });

  const columns = [
    {
      Header: "Project",
      accessor: "project",
      width: "240px",
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
      width: "150px",
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
      width: "150px",
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
      width: "150px",
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
      width: "115px",
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
      Header: "Used Hours",
      accessor: "used",
      width: "120px",
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
  ];
  let data = [];
  if (isLoading) {
    data = [];
    return (
      <Flex align={"center"} justify={"center"} mt={"36px"}>
        <Spinner color="red.500" size="lg" />
      </Flex>
    );
  }
  data = completedProjects.result.map((complete) => {
    return {
      project: complete.projectName,
      startdate: new Date(complete.startDate).getTime(),
      targetdate: new Date(complete.targetDate).getTime(),
      completedDate: new Date(complete.completedDate).getTime(),
      members:
        (complete.listmember.match(/\([^)]+\)/g) || []).length +
        (complete.listLeader.match(/\([^)]+\)/g) || []).length +
        (complete.listManager.match(/\([^)]+\)/g) || []).length,
      used: complete.usedHours,
      target: complete.totalHours,
    };
  });

  return (
    <Box>
      <TableWithPagination
        columns={columns}
        data={data}
        current={completedProjects.pagination.currentPage}
        pageCount={completedProjects.pagination.totalPages}
        setCurrent={setPage}
        chartData={completedProjects.result}
      />
    </Box>
  );
};
export default TableMore;
