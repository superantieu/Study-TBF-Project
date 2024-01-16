import { useGetAllUsersQuery } from "../../services/ongoingApi";
import { Text, Box, Flex, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { skipToken } from "@reduxjs/toolkit/query";

import SupTable from "../Dashboard/DisciplineProjectTable";

const DisciplineMemberTable = (props) => {
  const { discipline } = props;

  const [page, setPage] = useState(1);

  const {
    data: disciplineMember,
    error,
    isLoading,
  } = useGetAllUsersQuery(
    discipline
      ? {
          Discipline: discipline,
          pageNumber: page,
          Employed: 1,
        }
      : skipToken
  );

  let data = [];
  if (isLoading) {
    data = [];
    return (
      <Flex align={"center"} justify={"center"} mt={"36px"}>
        <Spinner color="red.500" size="lg" />
      </Flex>
    );
  }

  const columns = [
    {
      Header: "Member Id",
      accessor: "userId",
      width: "120px",
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
      Header: "Full Name",
      accessor: "fullName",
      width: "200px",
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
      Header: "Job Title",
      accessor: "jobTitle",
      width: "160px",
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

  data = disciplineMember.result.map((member) => {
    return {
      userId: member.userId,
      fullName: member.fullName,
      jobTitle: member.jobTitle,
    };
  });
  return (
    <Box>
      <SupTable
        columns={columns}
        data={data}
        setCurrent={setPage}
        project={disciplineMember}
        rowNavigate={{ path: "users", slug: "userId" }}
      />
    </Box>
  );
};
export default DisciplineMemberTable;
