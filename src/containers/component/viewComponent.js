import { connect } from 'react-redux';
import store from '../../store';
import {componentList, getSingleComponentType} from '../../actions/componentAction';

import {
  COMPONENT_TYPE,
  RESET_STRUCTURE_FORM,
  CHANGE_ADD_COMPONENT_MODAL_STATUS,
  SHOW_ADD_COMPONENT_MSG,
  SET_COMPONENT_EDIT_MODE,
  COMPONENT_TYPE_STATUS
} from '../../actions/types';
import ViewComponent from '../../pages/component/ViewComponent';

const mapDispatchToProps = dispatch => {
  return {
    componentList() {
      dispatch(componentList());
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
    showAddComponentModal() {
        dispatch({
          type: CHANGE_ADD_COMPONENT_MODAL_STATUS,
          payload: true,
        })
        dispatch({
          type: SHOW_ADD_COMPONENT_MSG,
          payload: false,
        })
      },
      handleEdit(id) {
        dispatch({
          type: CHANGE_ADD_COMPONENT_MODAL_STATUS,
          payload: true,
        })
        dispatch({
          type: SET_COMPONENT_EDIT_MODE,
          payload: true,
        })
        dispatch(getSingleComponentType(id));
     },
  };
};

const mapStateToProps = state => {
  const component = store.getState().component;
  return {
    component,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewComponent);
