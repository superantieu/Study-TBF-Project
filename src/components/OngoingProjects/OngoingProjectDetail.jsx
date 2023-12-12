import Scrollbars from "react-custom-scrollbars-2";

import ongoingProject from "../Data/ongoing";
import OngoingList from "./OngoingList";

const OngoingProjectDetail = () => {
  return (
    <Scrollbars autoHide={true} autoHideTimeout={1000}>
      <OngoingList ongoingProject={ongoingProject} />
    </Scrollbars>
  );
};

export default OngoingProjectDetail;
