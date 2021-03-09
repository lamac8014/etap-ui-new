import React, { Component } from "react";
import { connect } from 'react-redux';
import store from '../../store';

import { VENDOR_CODE, VENDOR_CONTACT_NUMBER, VENDOR_EMAIL, VENDOR_NAME,VENDOR_STATUS } from '../../actions/types';

import AddSubContractor from '../../pages/subcontractor/AddSubContractor';

const mapDispatchToProps = dispatch => {
  return {
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
    },

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
    handleChangeVendorStatus(value) {
      dispatch({
        type: VENDOR_STATUS,
        payload: value,
      });
    },
 
  };
};

const mapStateToProps = state => {
  const vendor = store.getState().vendor;
  return {
    vendor,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSubContractor);
