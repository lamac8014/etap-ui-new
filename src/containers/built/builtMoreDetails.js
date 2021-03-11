import { connect } from "react-redux";
import {
  getSiteReqDetailsById,
  createDispatch,
  setActiveItem,
  setSelectedItem
} from "../../actions/createDispatchActions";
import {
  SET_SELECTED_ITEMS,
  RESET_MESSAGE,
  SET_MODAL_DATA,
  SET_SERVICE_TYPE_ID,
  SET_DISPATCH_ERROR,
  RESET_SELECTION,
} from "../../actions/types";
import BuiltMoreDetails from "../../pages/built/BuiltMoreDetails";

import DispatchStructure from "../../pages/createDispatch/DispatchStructure";
import store from "../../store";
const mapDispatchToProps = (dispatch) => {
  return {
    onPageLoad(id) {
      dispatch(getSiteReqDetailsById(id));
      dispatch(setActiveItem(id));
    },
    setSelectedStructures(value) {
      // dispatch({
      //   type: SET_SELECTED_ITEMS,
      //   payload: value,
      // });
      dispatch(setSelectedItem(value))
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
    setServiceTypeId(value) {
      dispatch({
        type: SET_SERVICE_TYPE_ID,
        payload: value,
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
  const built = store.getState().built;
  return {
    built,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuiltMoreDetails);
