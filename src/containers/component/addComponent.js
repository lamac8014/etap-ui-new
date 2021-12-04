import { connect } from "react-redux";
import store from "../../store";

import {
  COMPONENT_TYPE,
  RESET_STRUCTURE_FORM,
  CHANGE_ADD_COMPONENT_MODAL_STATUS,
  COMPONENT_TYPE_STATUS,
  SET_COMPONENT_EDIT_MODE,
  RESET_CREATE_COMPONENT_TYPE_FORM,
  COMPONENT_TYPE_LOADING,
} from "../../actions/types";
import {
  addComponent,
  updateComponentType,
  componentList,
} from "../../actions/componentAction";
import AddComponent from "../../pages/component/AddComponent";
import swal from "sweetalert"

const mapDispatchToProps = (dispatch) => {
  return {
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
    },
    addComponentType() {
      dispatch(addComponent()).then((response) => {
        swal(response.value.data.message, {
          icon: "success"
        })
        dispatch(componentList());
        dispatch({
          type: SET_COMPONENT_EDIT_MODE,
          payload: false,
        });
        dispatch({ type: RESET_CREATE_COMPONENT_TYPE_FORM });
        dispatch({
          type: CHANGE_ADD_COMPONENT_MODAL_STATUS,
          payload: false,
        });
      }).catch((error) => {
        swal(error.response.data.message, {
          icon: "error"
        })
      });
    },
    updateComponentType() {
      dispatch(updateComponentType()).then((response) => {
        swal(response.value.data.message, {
          icon: "success"
        })
        dispatch(componentList());
        dispatch({
          type: SET_COMPONENT_EDIT_MODE,
          payload: false,
        });
        dispatch({ type: RESET_CREATE_COMPONENT_TYPE_FORM });
        dispatch({
          type: CHANGE_ADD_COMPONENT_MODAL_STATUS,
          payload: false,
        });
      }).catch((error) => {
        swal(error.response.data.message, {
          icon: "error"
          })
          });
    },
    closeAddComponentModal() {
      dispatch({
        type: CHANGE_ADD_COMPONENT_MODAL_STATUS,
        payload: false,
      });
      dispatch({
        type: SET_COMPONENT_EDIT_MODE,
        payload: false,
      });
      dispatch({ type: RESET_CREATE_COMPONENT_TYPE_FORM });
    },
    handleChangeComponentType(value) {
      dispatch({
        type: COMPONENT_TYPE,
        payload: value,
      });
    },
    handleComponentTypeStatus(value) {
      dispatch({
        type: COMPONENT_TYPE_STATUS,
        payload: value,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const component = store.getState().component;
  return {
    component,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);
