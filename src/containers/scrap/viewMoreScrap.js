import { connect } from "react-redux";
import store from "../../store";

import ViewMoreScrap from "../../pages/scrap/ViewMoreScrap";

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  const scrap = store.getState().scrap;
  return {
    scrap,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMoreScrap);
