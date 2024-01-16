import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

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
      color={"#fff"}
      bgColor={"transparent"}
      borderColor={"transparent"}
      boxShadow="1px 1px 2px #e53e3e"
      borderRadius={"15px"}
      className="selectbox"
    >
      {filterResult}
    </Select>
  );
};
export default SecondFilter;
