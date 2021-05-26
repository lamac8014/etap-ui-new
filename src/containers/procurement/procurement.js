import { connect } from "react-redux";
import store from "../../store";
import { getStructureListCode } from "../../actions/siteDispatch";
import {
  getSiteDispatchDetails,
  osAssignVendor,
  fbAssignVendor,
  getVendorCodeList,
} from "../../actions/procurementActions";
import {
  SET_SHOW_EDIT_MODAL_FLAG,
  SET_SHOW_TABLE_FLAG,
  PR_SET_ACTIVE_ITEM,
  SET_FABRICATION_COST,
  SET_PLANNED_RELEASE_DATE,
  SET_ACTUAL_START_DATE,
  SET_EXPECTED_RELEASE_DATE,
  SET_MONTHLY_RENT,
  SET_CONTRACT_YEARS,
  SET_VENDOR,
  SET_VENDOR_STRUCTURES,
  RESET_ASSIGN_VENDOR_MODAL,
  SET_SELECTED_STRUCTURES,
  RESET_MESSAGE,
} from "../../actions/types";

import Procurement from "../../pages/procurement/Procurement";
import swal from "sweetalert";

const mapDispatchToProps = (dispatch) => {
  return {
    getSiteDispatchDetails() {
      dispatch(getSiteDispatchDetails());
      dispatch(getVendorCodeList());
    },
    handleChangeFabricationCost(value, structureId) {
      dispatch({
        type: SET_FABRICATION_COST,
        payload: value,
        id: structureId,
      });
    },
    handleChangePlannedReleaseDate(value) {
      dispatch({
        type: SET_PLANNED_RELEASE_DATE,
        payload: value,
      });
    },
    handleChangeMonthlyRent(value) {
      dispatch({
        type: SET_MONTHLY_RENT,
        payload: value,
      });
    },
    handleChangeActualStartDate(value) {
      dispatch({
        type: SET_ACTUAL_START_DATE,
        payload: value,
      });
    },
    handleChangeExpectedReleaseDate(value) {
      dispatch({
        type: SET_EXPECTED_RELEASE_DATE,
        payload: value,
      });
    },
    handleChangeContractYears(value) {
      dispatch({
        type: SET_CONTRACT_YEARS,
        payload: value,
      });
    },
    handleChangeSelectedStructures(value) {
      dispatch({
        type: SET_SELECTED_STRUCTURES,
        payload: value,
      });
    },
    handleChangeVendorId(value) {
      dispatch({
        type: SET_VENDOR,
        payload: value,
      });
    },
    setShowTableFlag(value) {
      dispatch({
        type: SET_SHOW_TABLE_FLAG,
        payload: value,
      });
    },
    setVendorStructures(array) {
      dispatch({
        type: SET_VENDOR_STRUCTURES,
        payload: array,
      });
    },
    showAssignVendorModal(id) {
      dispatch({
        type: SET_SHOW_EDIT_MODAL_FLAG,
        payload: true,
      });
      dispatch({
        type: PR_SET_ACTIVE_ITEM,
        payload: id,
      });
      dispatch(getStructureListCode(id));
    },
    closeAssignVendorModal() {
      dispatch({
        type: SET_SHOW_EDIT_MODAL_FLAG,
        payload: false,
      });
      dispatch({ type: RESET_ASSIGN_VENDOR_MODAL });
    },
    resetMessage() {
      dispatch({
        type: RESET_MESSAGE,
      });
    },
    osAssignVendor() {
      dispatch(osAssignVendor())
        .then((response) => {
          swal(response.data.message, {
            icon: "success",
          });
          dispatch(getSiteDispatchDetails());
        })
        .catch((err) => {
          swal("Vendor assign failed", {
            icon: "error",
          });
        });
      dispatch({
        type: SET_SHOW_EDIT_MODAL_FLAG,
        payload: false,
      });
      dispatch({ type: RESET_ASSIGN_VENDOR_MODAL });
    },
    fbAssignVendor() {
      dispatch(fbAssignVendor())
        .then((response) => {
          swal("Vendor is assigned successfully", {
            icon: "success",
          });
          dispatch(getSiteDispatchDetails());
        })
        .catch((err) => {
          swal("Vendor assign failed", {
            icon: "error",
          });
        });
      dispatch({
        type: SET_SHOW_EDIT_MODAL_FLAG,
        payload: false,
      });
      dispatch({ type: RESET_ASSIGN_VENDOR_MODAL });
    },
  };
};

const mapStateToProps = (state) => {
  const procurement = store.getState().procurement;
  return {
    procurement,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Procurement);
