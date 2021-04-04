import { connect } from "react-redux";
import {
  getSiteReqDetailsById,
  createDispatch,
  setActiveItem,
  setSelectedItem,
} from "../../actions/createDispatchActions";
import {
  SET_SELECTED_ITEMS,
  RESET_MESSAGE,
  SET_MODAL_DATA,
  SET_SERVICE_TYPE_ID,
  SET_DISPATCH_ERROR,
  RESET_SELECTION,
  SET_SHOW_ATTRIBUTE_MODAL,
  SET_CURRENT_ATTRIBUTE_MODAL_DATA,
  SET_STRUCTURES_FOR_REUSE,
  DISABLE_SITE_REQUIREMENTS,
  TRANSFORM_SITE_REQUIREMENTS,
} from "../../actions/types";

import DispatchStructure from "../../pages/createDispatch/DispatchStructure";
import store from "../../store";
const mapDispatchToProps = (dispatch) => {
  return {
    onPageLoad(structId, siteReqId) {
      dispatch(getSiteReqDetailsById(structId, siteReqId)).then(() => {
        this.transformSiteRequirement();
      });
      // dispatch({
      //   type: CD_SET_CURRENT_REQUIREMENT,
      //   payload: JSON.parse(localStorage.getItem("currentRequirementInfo")),
      // });
      // dispatch(setActiveItem(structId,siteReqId));
    },
    transformSiteRequirement() {
      let createDisp = store.getState().createDispatch;
      let siteReq = JSON.parse(JSON.stringify(createDisp.siteReqDetailsById));
      let tmpArr = [];
      let availability = "-",
        availDate = "-",
        disabled = false;
      let currentDate = new Date();
      siteReq &&
        siteReq.map((structure) => {
          if (structure.surPlusFromDate) {
            let surplusDate = new Date(structure.surPlusFromDate);
            if (currentDate.getTime() > surplusDate.getTime()) {
              availability = "YES";
              availDate = structure.surPlusFromDate.split("T")[0];
              // disabled = false;
            }
          } else {
            availability = "-";
            availDate = "-";
            // disabled = true;
          }
          let tmpObj = {
            ...structure,
            availability,
            availDate,
            disabled,
          };
          tmpArr.push(tmpObj);
        });
      dispatch({
        type: TRANSFORM_SITE_REQUIREMENTS,
        payload: tmpArr,
      });
    },
    setSelectedStructures(value) {
      // dispatch({
      //   type: SET_SELECTED_ITEMS,
      //   payload: value,
      // });
      dispatch(setSelectedItem(value));
    },
    showAttributeViewMore(structCode) {
      let currentAttr = store
        .getState()
        .createDispatch.siteReqDetailsById.filter((item) => {
          return item.structureCode === structCode;
        })[0];
      dispatch({
        type: SET_CURRENT_ATTRIBUTE_MODAL_DATA,
        payload: JSON.parse(currentAttr.projectStructureAttributes),
      });
      dispatch({
        type: SET_SHOW_ATTRIBUTE_MODAL,
        payload: true,
      });
    },
    hideAttributeViewMore() {
      dispatch({
        type: SET_CURRENT_ATTRIBUTE_MODAL_DATA,
        payload: "",
      });
      dispatch({
        type: SET_SHOW_ATTRIBUTE_MODAL,
        payload: false,
      });
    },
    showConfirmModal(message) {
      dispatch({
        type: SET_MODAL_DATA,
        payload: {
          flag: true,
          message,
        },
      });
    },
    hideConfirmModal() {
      dispatch({
        type: SET_MODAL_DATA,
        payload: {
          flag: false,
          message: "",
        },
      });
    },
    setStructuresForReuse(servTypeId) {
      let createDisp = store.getState().createDispatch;
      let selectedItems = JSON.parse(JSON.stringify(createDisp.selectedItems));
      let transformedSiteReq = JSON.parse(
        JSON.stringify(createDisp.transformedSiteReq)
      );
      selectedItems.map((item) => {
        item.serviceTypeId = servTypeId;
      });
      let totalStructures = [...createDisp.reuseStructures, ...selectedItems];
      dispatch({
        type: SET_STRUCTURES_FOR_REUSE,
        payload: totalStructures,
      });
      //disable the checkboxes
      totalStructures.map((item) => {
        transformedSiteReq.map((req) => {
          if (req.structureCode === item.structureCode) {
            req.disabled = true;
          }
        });
      });
      dispatch({
        type: DISABLE_SITE_REQUIREMENTS,
        payload: transformedSiteReq,
      });
      dispatch({
        type: SET_SELECTED_ITEMS,
        payload: [],
        reuseResult: true,
        fabOutResult: true,
      });
    },
    setDispatchError(flag, message) {
      dispatch({
        type: SET_DISPATCH_ERROR,
        payload: {
          flag,
          message,
        },
      });
    },
    createDispatchApi() {
      dispatch(createDispatch());
      dispatch({
        type: RESET_SELECTION,
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
  const createDispatch = store.getState().createDispatch;
  return {
    createDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DispatchStructure);
