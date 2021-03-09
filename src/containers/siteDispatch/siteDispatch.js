import { connect } from "react-redux";
import store from "../../store";
import {
  getSiteDispatchDetails,
  getStructureListCode,
  updateSiteDispatch,
} from "../../actions/siteDispatch";

import {
  SET_SHOW_EDIT_MODAL_FLAG,
  SET_ACTIVE_ITEM,
  SET_STRUCTURE_ID,
  SET_DISPATCH_DATE,
  SET_WORK_ORDER_NUMBER,
  SET_UPLOADED_FILE,
  RESET_UPDATE_SITE_DISPATCH_MODAL,
} from "../../actions/types";

import SiteDispatch from "../../pages/siteDispatch/SiteDispatch";

const mapDispatchToProps = (dispatch) => {
  return {
    getSiteDispatchDetails() {
      dispatch(getSiteDispatchDetails());
    },
    handleChangeStructureName(value) {
      dispatch({
        type: SET_STRUCTURE_ID,
        payload: value,
      });
    },
    handleChangeDispatchDate(value) {
      dispatch({
        type: SET_DISPATCH_DATE,
        payload: value,
      });
    },
    handleChangeWorkOrderNumber(value) {
      dispatch({
        type: SET_WORK_ORDER_NUMBER,
        payload: value,
      });
    },
    handleChangeUploadedFile(value) {
      dispatch({
        type: SET_UPLOADED_FILE,
        payload: value,
      });
    },
    showUpdateSiteDispatchModal(id) {
      dispatch({
        type: SET_SHOW_EDIT_MODAL_FLAG,
        payload: true,
      });
      dispatch({
        type: SET_ACTIVE_ITEM,
        payload: id,
      });
      // dispatch(getStructureListCode(id, "VENDOR"));
    },
    closeUpdateSiteDispatchModal() {
      dispatch({
        type: SET_SHOW_EDIT_MODAL_FLAG,
        payload: false,
      });
      dispatch({ type: RESET_UPDATE_SITE_DISPATCH_MODAL });
    },
    updateSiteDispatch() {
      dispatch(updateSiteDispatch());
      dispatch({
        type: SET_SHOW_EDIT_MODAL_FLAG,
        payload: false,
      });
      dispatch({ type: RESET_UPDATE_SITE_DISPATCH_MODAL });
    },
  };
};

const mapStateToProps = (state) => {
  const siteDispatch = store.getState().siteDispatch;
  return {
    siteDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteDispatch);
