import { connect } from "react-redux";
import store from "../../store";
import {
  businessUnitList,
  getSingleBusinessUnitType,
} from "../../actions/businessUnitAction";

import {
  BUSINESS_UNIT_TYPE,
  BUSINESS_UNIT_STATUS,
  CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS,
  SHOW_ADD_BUSINESS_UNIT_MSG,
  SHOW_ADD_BUSINESS_UNIT_MODAL,
  RESET_CREATE_BUSINESS_UNIT_FORM,
  SET_BUSINESS_UNIT_EDIT_MODE,
  EDIT_SINGLE_BU,
  CHANGE_EDIT_BUSINESS_UNIT_MODAL_STATUS,
} from "../../actions/types";

import ViewBusinessUnit from "../../pages/businessUnit/ViewBusinessUnit";

const mapDispatchToProps = (dispatch) => {
  return {
    businessUnitList() {
      dispatch(businessUnitList());
    },

    handleChangeBusinessUnitType(value) {
      dispatch({
        type: BUSINESS_UNIT_TYPE,
        payload: value,
      });
    },
    handleBusinessUnitStatus(value) {
      dispatch({
        type: BUSINESS_UNIT_STATUS,
        payload: value,
      });
    },
    showAddBusinessUnitModal() {
      dispatch({
        type: CHANGE_ADD_BUSINESS_UNIT_MODAL_STATUS,
        payload: true,
      });
      dispatch({
        type: SHOW_ADD_BUSINESS_UNIT_MSG,
        payload: false,
      });
    },
    closeAddBusinessUnitModal() {
      dispatch({
        type: SHOW_ADD_BUSINESS_UNIT_MODAL,
        payload: false,
      });
      dispatch({ type: RESET_CREATE_BUSINESS_UNIT_FORM });
    },
    handleEdit(id) {
      dispatch({
        type: CHANGE_EDIT_BUSINESS_UNIT_MODAL_STATUS,
        payload: true,
      });
      dispatch({
        type: SET_BUSINESS_UNIT_EDIT_MODE,
        payload: true,
      });
      const businessUnit = store.getState().businessUnit;
      let businessUnitTypeList = businessUnit.businessUnitTypeList;
      dispatch({
        type: EDIT_SINGLE_BU,
        payload: businessUnitTypeList[id],
      });
    },
  };
};

const mapStateToProps = (state) => {
  const businessUnit = store.getState().businessUnit;

  return {
    businessUnit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBusinessUnit);
