import { connect } from "react-redux";
import store from "../../store";
import {
  getProjectStructureData,
  addSurplus,
  addScrap,
} from "../../actions/surplusAction";

import {
  VIEW_SURPLUS_MORE_PAGE,
  GET_SURPLUS_DATA_SINGLE,
  SURPLUS_SET_EDIT_MODAL_FLAG,
  SURPLUS_DATE,
  SURPLUS_UPLOAD,
  SURPLUS_SET_ACTION,
  RESET_SURPLUS_FORM,
} from "../../actions/types";
import SurplusDeclaration from "../../pages/surplus/SurplusDeclaration";
import swal from "sweetalert";

const mapDispatchToProps = (dispatch, props) => {
  return {
    getProjectStructureData() {
      dispatch(getProjectStructureData());
    },
    openViewMoreModal(id) {
      let surplus = store.getState().surplus;
      let strutureList = JSON.parse(JSON.stringify(surplus.structureList));
      let currentStr = strutureList.filter((item) => {
        return item.dispatchRequirementId === id;
      });
      dispatch({
        type: VIEW_SURPLUS_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: GET_SURPLUS_DATA_SINGLE,
        payload: currentStr[0],
      });
    },
    closeViewMoreModal() {
      dispatch({
        type: VIEW_SURPLUS_MORE_PAGE,
        payload: false,
      });
      dispatch({
        type: GET_SURPLUS_DATA_SINGLE,
        payload: {},
      });
    },
    openEditModal(id) {
      let surplus = store.getState().surplus;
      let strutureList = JSON.parse(JSON.stringify(surplus.structureList));
      let currentStr = strutureList.filter((item) => {
        return item.dispatchRequirementId === id;
      });
      dispatch({
        type: SURPLUS_SET_EDIT_MODAL_FLAG,
        payload: true,
      });
      dispatch({
        type: GET_SURPLUS_DATA_SINGLE,
        payload: currentStr[0],
      });
    },
    closeEditModal() {
      dispatch({
        type: SURPLUS_SET_EDIT_MODAL_FLAG,
        payload: false,
      });
      dispatch({
        type: GET_SURPLUS_DATA_SINGLE,
        payload: {},
      });
      dispatch({
        type: RESET_SURPLUS_FORM,
      });
    },
    handleChangeSurplusDate(value) {
      dispatch({
        type: SURPLUS_DATE,
        payload: value,
      });
    },
    handleChangeSurplusUpload(file) {
      let surplus = store.getState().surplus;
      let upload = JSON.parse(JSON.stringify(surplus.upload));
      upload.push(file);
      dispatch({
        type: SURPLUS_UPLOAD,
        payload: {
          docs: upload,
          file: file,
        },
      });
    },
    handleChangeSurplusAction(value) {
      if (value === "surplus") {
        dispatch({
          type: SURPLUS_SET_ACTION,
          payload: {
            surplus: true,
            scrap: false,
          },
        });
      }
      if (value === "scrap") {
        dispatch({
          type: SURPLUS_SET_ACTION,
          payload: {
            surplus: false,
            scrap: true,
          },
        });
      }
    },
    addSurplus() {
      dispatch(addSurplus())
        .then((response) => {
          // console.log("response....", response);
          swal(response.value.data.message, {
            icon: "success",
          });
          dispatch({
            type: SURPLUS_SET_EDIT_MODAL_FLAG,
            payload: false,
          });
          dispatch({
            type: GET_SURPLUS_DATA_SINGLE,
            payload: {},
          });
          dispatch({
            type: RESET_SURPLUS_FORM,
          });
        })
        .catch((err) => {
          swal(err.response.data.message, {
            icon: "error",
          });
        });
    },
    addScrap() {
      dispatch(addScrap())
        .then((response) => {
          // console.log("response....", response);
          swal(response.value.data.message, {
            icon: "success",
          });
          dispatch({
            type: SURPLUS_SET_EDIT_MODAL_FLAG,
            payload: false,
          });
          dispatch({
            type: GET_SURPLUS_DATA_SINGLE,
            payload: {},
          });
          dispatch({
            type: RESET_SURPLUS_FORM,
          });
        })
        .catch((err) => {
          swal(err.response.data.message, {
            icon: "error",
          });
        });
    },
  };
};

const mapStateToProps = (state) => {
  const surplus = store.getState().surplus;
  return {
    surplus,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurplusDeclaration);
