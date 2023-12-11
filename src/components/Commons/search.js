import projects from "../Charts/Projects";
import ongoingProject from "../Charts/ongoing";
import User from "../Charts/User";
const name = User.map((user) => {
  return user.FullName;
});
const discipline = User.map((dis) => {
  return dis.Discipline;
});
const projectname = projects.map((pj) => {
  pj.ProjectName;
});
const ongo = ongoingProject.map((on) => {
  on.ProjectName;
});
const search = [...name, ...discipline, ...projectname, ...ongo];
export default search;
