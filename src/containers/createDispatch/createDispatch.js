import { connect } from "react-redux";
import {
  getSiteReqDetails,
  twccDispatchDataFetch,
} from "../../actions/createDispatchActions";
import {
  RESET_MESSAGE,
  TWCC_DISPATCH_MORE_PAGE,
  CHANGE_TWCC_DISPATCH_MORE_MODAL_STATUS,
  CD_SET_ACTIVE_ITEM,
} from "../../actions/types";
import CreateDispatch from "../../pages/createDispatch/CreateDispatch";
import store from "../../store";

const mapDispatchToProps = (dispatch, props) => {
  return {
    getSiteReqDetails() {
      dispatch(getSiteReqDetails());
    },
    saveRequirementInfo(structId, siteRequirementId) {
      let currentRequirement = store
        .getState()
        .createDispatch.siteReqDetails.filter((item) => {
          return (
            item.siteRequirementId === siteRequirementId &&
            item.structureId === structId
          );
        })[0];
      localStorage.setItem(
        "currentRequirementInfo",
        JSON.stringify(currentRequirement)
      );
    },
    redirectToDispatchStructure(structId, siteReqId) {
      props.history.push(
        `/etrack/dispatch/dispatchStrt/${window.btoa(structId)}/${window.btoa(
          siteReqId
        )}`
      );
    },

    handleMore(structId, siteReqId) {
      // dispatch(twccDispatchDataFetch(id));
      dispatch({
        type: CD_SET_ACTIVE_ITEM,
        payload: {
          structId,
          siteReqId,
        },
      });
      dispatch({
        type: TWCC_DISPATCH_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: CHANGE_TWCC_DISPATCH_MORE_MODAL_STATUS,
        payload: true,
      });
    },

    resetMessage() {
      dispatch({
        type: RESET_MESSAGE,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const createDispatch = state.createDispatch;
  return {
    createDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDispatch);
