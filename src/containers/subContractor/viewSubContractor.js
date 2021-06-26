import { connect } from "react-redux";
import store from "../../store";
import {
  vendorList,
  getSingleVendor,
  createVendor,
  updateVendor,
  getVendorServiceList,
} from "../../actions/vendorAction";

import {
  RESET_PROJECT_FORM,
  RESET_VENDOR_FORM,
  SET_EDIT_MODE,
  SHOW_ADD_VENDOR_MODAL,
  SHOW_ERR_MSG,
  SHOW_ADD_VENDOR_MSG,
  VENDOR_NAME,
  VENDOR_CODE,
  VENDOR_EMAIL,
  VENDOR_CONTACT_NUMBER,
  ON_CHANGE_VEN_STS,
  ON_CHANGE_VEN_SERV_TYPES,
} from "../../actions/types";
import ViewSubContractor from "../../pages/subcontractor/ViewSubContractor";
import swal from "sweetalert";
const mapDispatchToProps = (dispatch) => {
  return {
    vendorList() {
      dispatch(vendorList());
    },
    showAddVendorModal() {
      dispatch(getVendorServiceList());
      dispatch({
        type: SHOW_ADD_VENDOR_MODAL,
        payload: true,
      });
      dispatch({
        type: SHOW_ADD_VENDOR_MSG,
        payload: false,
      });
    },
    closeAddVendorModal() {
      dispatch({
        type: SHOW_ADD_VENDOR_MODAL,
        payload: false,
      });
      dispatch({
        type: SET_EDIT_MODE,
        payload: false,
      });
      dispatch({ type: RESET_VENDOR_FORM });
    },
    //Add Vendor
    handleChangeVendorName(value) {
      dispatch({
        type: VENDOR_NAME,
        payload: value,
      });
    },
    handleChangeVendorCode(value) {
      dispatch({
        type: VENDOR_CODE,
        payload: value,
      });
    },
    handleChangeVendorEmail(value) {
      dispatch({
        type: VENDOR_EMAIL,
        payload: value,
      });
    },
    handleChangeVendorContactNumber(value) {
      dispatch({
        type: VENDOR_CONTACT_NUMBER,
        payload: value,
      });
    },
    handleChangeVendorStatus(obj) {
      dispatch({
        type: ON_CHANGE_VEN_STS,
        payload: obj,
      });
    },
    onServTypeChange(value) {
      const ven = store.getState().vendor;
      let tmpArr = [...ven.venServList];
      tmpArr.map((item) => {
        if (item.name === value) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
      dispatch({
        type: ON_CHANGE_VEN_SERV_TYPES,
        payload: tmpArr,
      });
    },
    createVendor() {
      dispatch(createVendor()).then((response) => {
        dispatch({
          type: SHOW_ADD_VENDOR_MODAL,
          payload: false,
        });
        swal(response.value.data.message, {
          icon: "success",
        });
        dispatch({ type: RESET_PROJECT_FORM });
        dispatch(vendorList());
      })
        .catch((err) => {
          swal("Vendor Add Failed", {
            icon: "error",
          });
        });
    },
    //Edit Vendor
    updateVendor() {
      dispatch(updateVendor())
        .then((response) => {
          dispatch({
            type: SHOW_ADD_VENDOR_MODAL,
            payload: false,
          });
          dispatch({ type: RESET_PROJECT_FORM });
          swal(response.value.data.message, {
            icon: "success",
          });
          dispatch(vendorList());
        })
        .catch((err) => {
          swal("Vendor Update Failed", {
            icon: "error",
          });
          dispatch({ type: SHOW_ERR_MSG, payload: true });
        });
    },
    handleEdit(id) {
      // dispatch(getVendorServiceList());
      dispatch({
        type: SHOW_ADD_VENDOR_MODAL,
        payload: true,
      });
      dispatch({
        type: SET_EDIT_MODE,
        payload: true,
      });
      dispatch(getSingleVendor(id));
    },
  };
};

const mapStateToProps = (state) => {
  const vendor = store.getState().vendor;
  return {
    vendor,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSubContractor);
