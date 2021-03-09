import { connect } from 'react-redux';
import store from '../../store';

import {
  CHANGE_ADD_STRUCTURE_FAMILY_MODAL_STATUS,
  RESET_CREATE_STRUCTURE_FAMILY_FORM,
  RESET_STRUCTURE_FORM,
  SET_STRUCTURE_FAMILY_EDIT_MODE,
  CHANGE_STRUCTURE_FAMILY_MODAL_STATUS,
  STRUCTURE_FAMILY_TYPE,
  STRUCTURE_FAMILY_STATUS,
  STRUCTURE_FAMILY_TYPE_STATUS

}
  from '../../actions/types';
import { addStructureFamily, updateStructureFamilyType, structureFamilyList } from '../../actions/structureFamilyAction'
import AddStructureFamily from '../../pages/structureFamily/AddStructureFamily';

const mapDispatchToProps = dispatch => {
  return {
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
    },
    addStructureFamilyType() {
      dispatch(addStructureFamily()).then(() => {
        dispatch(structureFamilyList());
        dispatch({
          type: SET_STRUCTURE_FAMILY_EDIT_MODE,
          payload: false,
        })
        dispatch({ type: RESET_CREATE_STRUCTURE_FAMILY_FORM });
        dispatch({
          type: CHANGE_ADD_STRUCTURE_FAMILY_MODAL_STATUS,
          payload: false,
        })

      });;
    },
    updateStructureFamilyType() {
      dispatch(updateStructureFamilyType()).then(() => {
        dispatch(structureFamilyList());
        dispatch({
          type: SET_STRUCTURE_FAMILY_EDIT_MODE,
          payload: false,
        })
        dispatch({ type: RESET_CREATE_STRUCTURE_FAMILY_FORM });
        dispatch({
          type: CHANGE_ADD_STRUCTURE_FAMILY_MODAL_STATUS,
          payload: false,
        })

      });
    },
    closeAddStructureFamilyModal() {
      dispatch({
        type: CHANGE_ADD_STRUCTURE_FAMILY_MODAL_STATUS,
        payload: false,
      })
      dispatch({ type: RESET_CREATE_STRUCTURE_FAMILY_FORM })
    },
    handleChangeStructureFamilyType(value) {
      dispatch({
        type: STRUCTURE_FAMILY_TYPE,
        payload: value,
      });
    },
    handleStructureFamilyTypeStatus(value) {
      dispatch({
        type: STRUCTURE_FAMILY_TYPE_STATUS,
        payload: value,
      });
    },
  };
};

const mapStateToProps = state => {
  const structureFamily = store.getState().structureFamily;
  return {
    structureFamily,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStructureFamily);
