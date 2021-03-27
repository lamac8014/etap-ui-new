import { connect } from "react-redux";
import {
  SHOW_EDIT_COMPONENT_MODAL,
  RESET_EDIT_COMPONENT_FORM,
  MODIFY_BREADTH,
  MODIFY_HEIGHT,
  MODIFY_LENGTH,
  MODIFY_WEIGHT,
  MODIFY_WIDTH,
} from "../../actions/types";
import ModifyComponents from "../../pages/cmpcModification/ModifyComponents";
import store from "../../store";

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleEdit(id) {
      dispatch({
        type: SHOW_EDIT_COMPONENT_MODAL,
        payload: true,
      });
    },
    closeEditComponentModal() {
      dispatch({
        type: SHOW_EDIT_COMPONENT_MODAL,
        payload: false,
      });
      dispatch({ type: RESET_EDIT_COMPONENT_FORM });
    },
    handleChangeLength(value) {
      let tempModifiedData = JSON.parse(
        JSON.stringify(store.getState().cmpc.modifiedData)
      );
      tempModifiedData.length = value;
      dispatch({
        type: MODIFY_LENGTH,
        payload: tempModifiedData,
      });
    },
    handleChangeBreadth(value) {
      let tempModifiedData = JSON.parse(
        JSON.stringify(store.getState().cmpc.modifiedData)
      );
      tempModifiedData.breadth = value;
      dispatch({
        type: MODIFY_BREADTH,
        payload: tempModifiedData,
      });
    },
    handleChangeWidth(value) {
      let tempModifiedData = JSON.parse(
        JSON.stringify(store.getState().cmpc.modifiedData)
      );
      tempModifiedData.width = value;
      dispatch({
        type: MODIFY_WIDTH,
        payload: tempModifiedData,
      });
    },
    handleChangeWeight(value) {
      let tempModifiedData = JSON.parse(
        JSON.stringify(store.getState().cmpc.modifiedData)
      );
      tempModifiedData.weight = value;
      dispatch({
        type: MODIFY_WEIGHT,
        payload: tempModifiedData,
      });
    },
    handleChangeHeight(value) {
      let tempModifiedData = JSON.parse(
        JSON.stringify(store.getState().cmpc.modifiedData)
      );
      tempModifiedData.height = value;
      dispatch({
        type: MODIFY_HEIGHT,
        payload: tempModifiedData,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const cmpc = state.cmpc;
  return { cmpc };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModifyComponents);
