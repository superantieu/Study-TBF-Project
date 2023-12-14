import Scrollbars from "react-custom-scrollbars-2";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import ProjectList from "../Projects/ProjectList";
import User from "../data/users";
import projects from "../data/projects";
import ongoingProject from "../data/ongoing";

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
    <Scrollbars autoHide={true} autoHideTimeout={1000}>
      <Box mb={"10px"} fontSize={"20px"} fontWeight={"bold"}>
        PROJECTS IN WHICH {name.toUpperCase()} PARTICIPATES
      </Box>
      <ProjectList projects={userProject} />
    </Scrollbars>
  );
};
export default UserDetail;
