import { connect } from "react-redux";
import store from "../../store";
import {
  structureList,
  structureFetch,
  structureFamilyList,
  inActiveStructure
} from "../../actions/structureAction";

import {
  CHANGE_ADD_STRUCTURE_MODAL_STATUS,
  SHOW_ADD_STRUCTURE_MSG,
  STRUCTURE_EDIT_PAGE,
} from "../../actions/types";
import ViewStructure from "../../pages/structure/ViewStructure";

const mapDispatchToProps = (dispatch) => {
  return {
    structureList() {
      dispatch(structureList());
    },
    structureFamilyList() {
      dispatch(structureFamilyList());
    },
    showAddStructureModal() {
      dispatch(structureFamilyList());

      dispatch({
        type: CHANGE_ADD_STRUCTURE_MODAL_STATUS,
        payload: true,
      });
      dispatch({
        type: SHOW_ADD_STRUCTURE_MSG,
        payload: false,
      });
    },
    handleEdit(id) {
      dispatch(structureFamilyList());
      dispatch(structureFetch(id)).then(() => {
        dispatch({
          type: STRUCTURE_EDIT_PAGE,
          payload: true,
        });
        dispatch({
          type: CHANGE_ADD_STRUCTURE_MODAL_STATUS,
          payload: true,
        });
      });
    },
    handleDelete(id){
      dispatch(structureFetch(id)).then(() => {
        dispatch(inActiveStructure());
        dispatch(structureList());
      });
    }
  };
};

const mapStateToProps = (state) => {
  const structure = store.getState().structure;
  return {
    structure,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewStructure);
