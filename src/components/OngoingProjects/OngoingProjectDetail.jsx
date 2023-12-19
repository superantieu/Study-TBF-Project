import Scrollbars from "react-custom-scrollbars-2";

import ongoingProject from "../data/ongoing";
import RenderThumb from "../../scrollbar/RenderThumb.jsx";
import ProjectList from "../Projects/ProjectList";

const OngoingProjectDetail = () => {
  return (
    <Scrollbars
      autoHide={true}
      autoHideTimeout={1000}
      style={{ backgroundColor: "#272a2f" }}
      renderThumbVertical={RenderThumb}
    >
      <ProjectList projects={ongoingProject} />
      {/* <OngoingList ongoingProject={ongoingProject} /> */}
    </Scrollbars>
  );
};

export default OngoingProjectDetail;
