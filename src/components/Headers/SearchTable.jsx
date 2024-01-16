import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Link as SupLink, Text, Spinner } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { skipToken } from "@reduxjs/toolkit/query";

import { useGetSearchProjectQuery } from "../../services/ongoingApi";
import { DIRECT_OPTION } from "../../constants/page-direct";

const SearchTable = (props) => {
  const { searchvalue, type } = props;

  const [renderValue, setRenderValue] = useState([]);

  const {
    data: searchProjects,
    error,
    isLoading,
  } = useGetSearchProjectQuery(
    searchvalue
      ? {
          type: type,
          SearchTerm: searchvalue,
          pageSize: 10,
        }
      : skipToken
  );
  console.log("project", searchProjects?.result);

  useMemo(() => {
    if (searchProjects?.result && searchvalue) {
      setRenderValue(searchProjects.result);
    } else {
      setRenderValue([]);
    }
  }, [searchProjects?.result, searchvalue]);

  if (isLoading) {
    return (
      <Scrollbars
        autoHide={true}
        autoHideTimeout={1000}
        style={{
          backgroundColor: "#5f5a5a",
          borderRadius: "0 0 10px 10px",
        }}
      >
        <Flex flexDirection={"column"} padding={"8px"}>
          <Flex align={"center"} justify={"center"} mt={"36px"}>
            <Spinner color="red.500" size="lg" />
          </Flex>
        </Flex>
      </Scrollbars>
    );
  }

  return (
    <Scrollbars
      autoHide={true}
      autoHideTimeout={1000}
      style={{
        backgroundColor: "#5f5a5a",
        borderRadius: "0 0 10px 10px",
      }}
    >
      <Flex flexDirection={"column"} padding={"8px"}>
        {renderValue.map((arr, index) => (
          <SupLink
            as={Link}
            to={`${DIRECT_OPTION[type].direct}${arr[DIRECT_OPTION[type].id]}`}
            key={index}
            cursor={"pointer"}
            _hover={{ color: "red" }}
          >
            <Text
              maxW={"240px"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
            >
              {arr[DIRECT_OPTION[type].name]}
            </Text>
          </SupLink>
        ))}
      </Flex>
    </Scrollbars>
  );
};

export default SearchTable;
