import { connect } from "react-redux";
import store from "../../store";
import {
  getWorkFlowDetails,
  getVendorList,
  postProcScrapStruct,
} from "../../actions/scrapAction";

import {
  SCRAP_MORE_PAGE,
  SCRAP_EDIT_MORE_PAGE,
  GET_SCRAP_DATA,
  SCRAP_RATE,
  SCRAP_VENDOR,
  SCRAP_AUCTION_ID,
  SCRAP_UPLOAD,
  SET_CURRENT_SCRAP_DATA,
  RESET_SCRAP_FORM,
} from "../../actions/types";
import ViewScrap from "../../pages/scrap/ViewScrap";
import swal from "sweetalert";

const mapDispatchToProps = (dispatch, props) => {
  return {
    scrapList() {
      let workFlowPage = false;
      dispatch(getVendorList());
      dispatch(getWorkFlowDetails(workFlowPage)).then((response) => {
        const scrap = store.getState().scrap;
        let workflowDetails = JSON.parse(JSON.stringify(scrap.workflowDetails));
        let scrapData = workflowDetails.filter((item) => {
          return item.status === "SCRAPPED";
        });
        dispatch({
          type: GET_SCRAP_DATA,
          payload: scrapData,
        });
      });
    },

    handleViewMore(id) {
      dispatch({
        type: SCRAP_MORE_PAGE,
        payload: true,
      });
    },
    handleEdit(id) {
      const scrap = store.getState().scrap;
      let scrapData = JSON.parse(JSON.stringify(scrap.scrapData));
      let currentScrap = scrapData.filter((item) => {
        return item.dispStructId === id;
      })[0];
      dispatch({
        type: SET_CURRENT_SCRAP_DATA,
        payload: currentScrap,
      });
      dispatch({
        type: SCRAP_EDIT_MORE_PAGE,
        payload: true,
      });
    },
    closeEditModal() {
      dispatch({
        type: SCRAP_EDIT_MORE_PAGE,
        payload: false,
      });
      dispatch({
        type: RESET_SCRAP_FORM,
      });
    },
    handleChangeVendor(obj) {
      dispatch({
        type: SCRAP_VENDOR,
        payload: obj,
      });
    },
    handleChangeScrapRate(value) {
      dispatch({
        type: SCRAP_RATE,
        payload: value,
      });
    },
    handleChangeAuctionId(value) {
      dispatch({
        type: SCRAP_AUCTION_ID,
        payload: value,
      });
    },
    handleChangeFileUpload(file) {
      dispatch({
        type: SCRAP_UPLOAD,
        payload: file,
      });
    },
    addScrap() {
      dispatch(postProcScrapStruct())
        .then((response) => {
          swal(response.value.data.message, {
            icon: "success",
          });
          this.scrapList();
          this.closeEditModal();
        })
        .catch((err) => {
          swal("Add scrap failed", {
            icon: "error",
          });
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewScrap);
