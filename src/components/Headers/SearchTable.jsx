import { Link } from "react-router-dom";
import { Box, Flex, Link as SupLink } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";

import projects from "../data/projects";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import User from "../data/users";
import ongoingProject from "../data/ongoing";

const SearchTable = (props) => {
  const searchvalue = props.searchvalue;
  const type = props.type;

  var searchAndDirect = {};
  const getSearchType = (type) => {
    switch (type) {
      case "member":
        searchAndDirect.searchValue = User.map((user) => {
          if (user.FullName.toLowerCase().includes(searchvalue)) {
            return user;
          }
        });
        searchAndDirect.direct = "/users/";
        searchAndDirect.name = "FullName";
        searchAndDirect.id = "UserId";
        break;
      case "complete":
        searchAndDirect.searchValue = projects.map((project) => {
          if (project.ProjectName.toLowerCase().includes(searchvalue)) {
            return project;
          }
        });
        searchAndDirect.direct = "/projectdetail/";
        searchAndDirect.name = "ProjectName";
        searchAndDirect.id = "ProjectId";
        break;
      case "ongoing":
        searchAndDirect.searchValue = ongoingProject.map((ongoing) => {
          if (ongoing.ProjectName.toLowerCase().includes(searchvalue)) {
            return ongoing;
          }
        });
        searchAndDirect.direct = "/projectdetail/";
        searchAndDirect.name = "ProjectName";
        searchAndDirect.id = "ProjectId";
        break;
      default:
        [];
    }

    return searchAndDirect;
  };

  const value = getSearchType(type).searchValue.filter(
    (searchvalue) => searchvalue !== undefined
  );

  useEffect(() => {}, [searchvalue]);
  return (
    <Scrollbars autoHide={true} autoHideTimeout={1000}>
      <Flex flexDirection={"column"} padding={"8px"}>
        {value.map((arr, index) => (
          <SupLink
            as={Link}
            to={`${searchAndDirect.direct}${arr[searchAndDirect.id]}`}
            key={index}
            cursor={"pointer"}
            _hover={{ color: "red" }}
          >
            {searchvalue ? arr[searchAndDirect.name] : ""}
          </SupLink>
        ))}
      </Flex>
    </Scrollbars>
  );
};

export default SearchTable;
