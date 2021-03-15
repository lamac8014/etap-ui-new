import { connect } from "react-redux";
import store from "../../store";
import {
  icbuList,
  getSingleIcbu,
  getICList,
  getBUList,
  createIcbu,
  updateIcbu,
} from "../../actions/icbuAction";

import {
  IC_TYPE,
  BU_TYPE,
  IC_NAME,
  BU_NAME,
  SHOW_ADD_ICBU_MODAL,
  SHOW_ADD_ICBU_MSG,
  RESET_ICBU_FORM,
  SHOW_ICBU_MSG,
  SET_EDIT_MODE,
} from "../../actions/types";
import ViewIndependentCompany from "../../pages/independentCompany/ViewIndependentCompany";

const mapDispatchToProps = (dispatch) => {
  return {
    icbuList() {
      dispatch(icbuList());
    },

    handleChangeIcType(value) {
      dispatch({
        type: IC_TYPE,
        payload: value,
      });
    },
    handleChangeBuType(value) {
      dispatch({
        type: BU_TYPE,
        payload: value,
      });
    },
    showAddIcbuModal() {
      dispatch({
        type: SHOW_ADD_ICBU_MODAL,
        payload: true,
      });
      dispatch({
        type: SHOW_ADD_ICBU_MSG,
        payload: false,
      });
      dispatch(getICList());
      dispatch(getBUList());
    },
    closeAddIcbuModal() {
      dispatch({
        type: SHOW_ADD_ICBU_MODAL,
        payload: false,
      });
      dispatch({ type: RESET_ICBU_FORM });
      dispatch({
        type: SET_EDIT_MODE,
        payload: false,
      });
    },
    //Add Project
    handleChangeIcName(value) {
      dispatch({
        type: IC_NAME,
        payload: value,
      });
    },
    handleChangeBuName(obj) {
      dispatch({
        type: BU_NAME,
        payload: obj,
      });
    },

    createIcbu() {
      dispatch(createIcbu()).then(() => {
        dispatch({
          type: SHOW_ADD_ICBU_MODAL,
          payload: false,
        });
        dispatch({ type: RESET_ICBU_FORM });
        dispatch(icbuList());
      });
    },
    //Edit Proj
    updateIcbu() {
      dispatch(updateIcbu())
        .then(() => {
          dispatch({
            type: SHOW_ADD_ICBU_MODAL,
            payload: false,
          });
          dispatch({ type: RESET_ICBU_FORM });
          dispatch(icbuList());
        })
        .catch(() => {
          dispatch({ type: SHOW_ICBU_MSG, payload: true });
        });
    },
    handleEdit(id) {
      dispatch(getSingleIcbu(id));
      dispatch({
        type: SHOW_ADD_ICBU_MODAL,
        payload: true,
      });
      dispatch({
        type: SET_EDIT_MODE,
        payload: true,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    icbu: state.icbu,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewIndependentCompany);
