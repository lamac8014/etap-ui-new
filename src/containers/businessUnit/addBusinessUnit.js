import { connect } from "react-redux";
import store from "../../store";

import {
  CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS,
  RESET_CREATE_BUSINESS_UNIT_FORM,
  RESET_STRUCTURE_FORM,
  SET_BUSINESS_UNIT_EDIT_MODE,
  BUSINESS_UNIT_NAME,
  BUSINESS_UNIT_STATUS,
  LIST_IC_CODES,
  IC_CODE,
  BUSINESS_UNIT_LIST,
  RESET_EDIT_BUSINESS_UNIT_FORM,
  BU_STATUS,
  SET_SBG_CODE,
} from "../../actions/types";
import {
  addBusinessUnit,
  updateBusinessUnitType,
  businessUnitList,
  getICCodes,
  getSbgCodes,
} from "../../actions/businessUnitAction";
import swal from "sweetalert";
import AddBusinessUnit from "../../pages/businessUnit/AddBusinessUnit";

const mapDispatchToProps = (dispatch) => {
  return {
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
    },
    getICCodes() {
      dispatch(getICCodes());
    },
    getSbgCodes() {
      dispatch(getSbgCodes());
    },
    addBusinessUnitType() {
      dispatch(addBusinessUnit())
        .then((response) => {
          swal(response.value.data.message, {
            icon: "success",
          });
          dispatch(businessUnitList());
          dispatch({
            type: SET_BUSINESS_UNIT_EDIT_MODE,
            payload: false,
          });
          dispatch({ type: RESET_CREATE_BUSINESS_UNIT_FORM });
          dispatch({
            type: CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS,
            payload: false,
          });
        })
        .catch((err) => {
          swal("Add Business Unit failed", {
            icon: "error",
          });
        });
    },
    updateBusinessUnitType() {
      dispatch(updateBusinessUnitType()).then(() => {
        dispatch(businessUnitList());
        dispatch({
          type: SET_BUSINESS_UNIT_EDIT_MODE,
          payload: false,
        });
        dispatch({ type: RESET_CREATE_BUSINESS_UNIT_FORM });
        dispatch({
          type: CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS,
          payload: false,
        });
      });
    },
    closeAddBusinessUnitModal() {
      dispatch({
        type: CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS,
        payload: false,
      });

      dispatch({ type: RESET_EDIT_BUSINESS_UNIT_FORM });
    },
    addBU() {
      const businessUnit = store.getState().businessUnit;
      let businessUnitList = businessUnit.businessUnitList;
      businessUnitList.push({ name: "" });
      dispatch({
        type: BUSINESS_UNIT_LIST,
        payload: businessUnitList,
      });
    },
    handleChangeBusinessUnitName(value) {
      dispatch({
        type: BUSINESS_UNIT_NAME,
        payload: value,
      });
    },
    onBUNameChange(value, i) {
      const businessUnit = store.getState().businessUnit;
      let businessUnitList = businessUnit.businessUnitList;
      businessUnitList[i].name = value;
      dispatch({
        type: BUSINESS_UNIT_LIST,
        payload: businessUnitList,
      });
    },
    onBUNameRemove(i) {
      const businessUnit = store.getState().businessUnit;
      let businessUnitList = businessUnit.businessUnitList;
      businessUnitList.splice(i, 1);
      dispatch({
        type: BUSINESS_UNIT_LIST,
        payload: businessUnitList,
      });
    },
    handleChangeICCode(value) {
      dispatch({
        type: IC_CODE,
        payload: value,
      });
    },
    handleChangeSbgCode(value) {
      dispatch({
        type: SET_SBG_CODE,
        payload: value,
      });
    },
    handleBusinessUnitStatus(value) {
      dispatch({
        type: BUSINESS_UNIT_STATUS,
        payload: value,
      });
    },
    handleBuStatus(value) {
      dispatch({
        type: BU_STATUS,
        payload: value,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const businessUnit = state.businessUnit;
  return {
    businessUnit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBusinessUnit);
