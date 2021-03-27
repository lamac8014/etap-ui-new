import {
  SET_SBG_NAME,
  SET_EDIT_MODE,
  SHOW_ADD_SBG_MODAL,
  RESET_SBG_FORM,
} from "../../actions/types";
import { connect } from "react-redux";
import ViewSbg from "../../pages/sbg/ViewSbg";

const mapDispatchToProps = (dispatch) => {
  return {
    handleSbgName(value) {
      dispatch({
        type: SET_SBG_NAME,
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
      this.openSbgmodal();
      dispatch({
        type: SET_EDIT_MODE,
        payload: true,
      });
    },
  };
};
const mapStateToProps = (state) => {
  const sbg = state.sbg;
  return { sbg };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSbg);
