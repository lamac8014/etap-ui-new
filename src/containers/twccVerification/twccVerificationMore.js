import { connect } from "react-redux";
import store from "../../store";

import {
  CHANGE_SCRAP_MORE_MODAL_STATUS,
  CHANGE_SCRAP_EDIT_MORE_MODAL_STATUS,
} from "../../actions/types";

import ViewMoretwccVerification from "../../pages/twccVerification/TwccVerificationmore";

const mapDispatchToProps = (dispatch) => {
  return {
    closeScarpViewMoreModal() {
      dispatch({
        type: CHANGE_SCRAP_MORE_MODAL_STATUS,
        payload: false,
      });
    },
    showScrapEditMoreModal() {
      dispatch({
        type: CHANGE_SCRAP_EDIT_MORE_MODAL_STATUS,
        payload: false,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const scrap = store.getState().scrap;
  return {
    scrap,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewMoretwccVerification);
