import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import projects from "../data/projects";
import ongoingProject from "../data/ongoing";
import User from "../data/users";
import groupbykey from "../../utility/groupbykey";

const SecondFilter = (props) => {
  const { select } = props;
  const teams = groupbykey(User, "Discipline");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const selectChange = e.target.value;
    navigate(selectChange);
  };
  let filterResult;

  switch (select) {
    case "member":
      filterResult = User.map((user) => {
        return (
          <option key={user.UserId} value={`/users/${user.UserId}`}>
            {user.FullName}
          </option>
        );
      });
      break;
    case "discipline":
      filterResult = Object.keys(teams).map((team, index) => {
        return (
          <option key={index} value={`/discipline/${team}`}>
            Team {team}
          </option>
        );
      });
      break;

    case "complete":
      filterResult = projects.map((project) => {
        return (
          <option
            key={project.ProjectId}
            value={`/projectdetail/${project.ProjectId}`}
          >
            {project.ProjectName}
          </option>
        );
      });
      break;
    case "ongoing":
      filterResult = ongoingProject.map((ongo) => {
        return (
          <option
            key={ongo.ProjectId}
            value={`/projectdetail/${ongo.ProjectId}`}
          >
            {ongo.ProjectName}
          </option>
        );
      });
      break;
    default:
      [];
  }
  return (
    <Select
      placeholder="..."
      onChange={handleChange}
      minW={"200px"}
      maxW={"200px"}
      color={"#000"}
      bgColor={"#e7dede"}
    >
      {filterResult}
    </Select>
  );
};
export default SecondFilter;
