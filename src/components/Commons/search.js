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
  return pj.ProjectName;
});
const ongo = ongoingProject.map((on) => {
  return on.ProjectName;
});
const searchTotal = [...name, ...discipline, ...projectname, ...ongo];
const search = searchTotal.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
export default search;
