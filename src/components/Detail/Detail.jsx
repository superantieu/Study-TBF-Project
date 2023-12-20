import Scrollbars from "react-custom-scrollbars-2";
import { useParams } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

import ProjectList from "../Projects/ProjectList";
import User from "../data/users";
import projects from "../data/projects";
import ongoingProject from "../data/ongoing";
import RenderThumb from "../../scrollbar/RenderThumb.jsx";

const UserDetail = () => {
  const params = useParams();
  let userProject = [];
  let name;
  User.map((user) => {
    if (user.UserId === +params.id) {
      name = user.FullName;
    }
  });

  projects.map((userpj) => {
    userpj.ListMember.map((member) => {
      if (member.UserId === +params.id) {
        userProject = [...userProject, userpj];
      }
    });
  });
  ongoingProject.map((userpj) => {
    userpj.ListMember.map((member) => {
      if (member.UserId === +params.id) {
        userProject = [...userProject, userpj];
      }
    });
  });
  const jsonUser = JSON.stringify(User);
  console.log(typeof jsonUser);
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
        PROJECTS IN WHICH {name.toUpperCase()} PARTICIPATES
      </Flex>
      <ProjectList projects={userProject} />
    </Scrollbars>
  );
};
export default UserDetail;
