import {
  SET_SBG_NAME,
  SET_EDIT_MODE,
  SHOW_ADD_SBG_MODAL,
  RESET_SBG_FORM,
  SET_STATUS,
} from "../../actions/types";
import { connect } from "react-redux";
import {
  addSbgData,
  getSbgData,
  getSingleSbg,
  updateSbgData,
} from "../../actions/sbgActions";
import swal from "sweetalert";
import ViewSbg from "../../pages/sbg/ViewSbg";

const mapDispatchToProps = (dispatch) => {
  return {
    getSbgData() {
      dispatch(getSbgData());
    },
    handleSbgName(value) {
      dispatch({
        type: SET_SBG_NAME,
        payload: value,
      });
    },
    handleSbgStatus(value) {
      dispatch({
        type: SET_STATUS,
        payload: value,
      });
    },
    openSbgmodal() {
      dispatch({
        type: SHOW_ADD_SBG_MODAL,
        payload: true,
      });
    },
    closeSbgModal() {
      dispatch({
        type: SHOW_ADD_SBG_MODAL,
        payload: false,
      });
      dispatch({
        type: SET_EDIT_MODE,
        payload: false,
      });
      dispatch({ type: RESET_SBG_FORM });
    },
    handleEdit(id) {
      dispatch(getSingleSbg(id));
      this.openSbgmodal();
      dispatch({
        type: SET_EDIT_MODE,
        payload: true,
      });
    },
    addSbgData() {
      dispatch(addSbgData())
        .then((response) => {
          this.closeSbgModal();
          swal(response.value.data.message, {
            icon: "success",
          });
          dispatch(getSbgData());
        })
        .catch((err) => {
          swal("SBG Add Failed", {
            icon: "error",
          });
        });
    },
    updateSbgData() {
      dispatch(updateSbgData())
        .then((response) => {
          this.closeSbgModal();
          swal(response.value.data.message, {
            icon: "success",
          });
          dispatch(getSbgData());
        })
        .catch((err) => {
          swal("SBG Update Failed", {
            icon: "error",
          });
        });
    },
  };
};
const mapStateToProps = (state) => {
  const sbg = state.sbg;
  return { sbg };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSbg);
