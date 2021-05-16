import { connect } from "react-redux";
import store from "../../store";
import { getWorkFlowDetails, scrapAction } from "../../actions/scrapAction";

import {
  SURPLUS_MORE_PAGE,
  SURPLUS_EDIT_MORE_PAGE,
  CHANGE_SURPLUS_MORE_MODAL_STATUS,
  CHANGE_SURPLUS_EDIT_MORE_MODAL_STATUS,
} from "../../actions/types";
import ScrapApprove from "../../pages/scrap/ScrapApprove";
import swal from "sweetalert";
import { getUserDetails } from "../../utils/auth";

const mapDispatchToProps = (dispatch, props) => {
  return {
    getWorkFlowDetails() {
      dispatch(getWorkFlowDetails());
    },
    handleApprove(id) {
      dispatch(scrapAction(id, "Approval"))
        .then(() => {
          let roleName = getUserDetails().roleName;
          dispatch(getWorkFlowDetails());
          swal(`${roleName} approved`, {
            icon: "success",
          });
        })
        .catch((err) => {
          swal("Approve failed", {
            icon: "error",
          });
        });
    },
    handleReject(id) {
      dispatch(scrapAction(id, "Rejection")).then(() => {
        dispatch(scrapAction());
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

export default connect(mapStateToProps, mapDispatchToProps)(ScrapApprove);
