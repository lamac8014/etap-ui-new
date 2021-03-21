import { connect } from "react-redux";
import store from "../../store";
import {
  assignStructureList,
  assignStructureFetch,
} from "../../actions/assignStructureAction";
import { withRouter } from "react-router-dom";

import {
  CHANGE_ADD_STRUCTURE_MODAL_STATUS,
  SHOW_ADD_STRUCTURE_MSG,
  SET_PROJECT_STRUCTURE_ID,
  ASSIGN_STRUCTURE_MORE_PAGE,
  CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS,
} from "../../actions/types";
import ViewAssignStructure from "../../pages/assignStructure/ViewAssignStructure";

const mapDispatchToProps = (dispatch, props) => {
  return {
    assignStructureList() {
      dispatch(assignStructureList());
    },
    // showAddStructureModal() {
    //   dispatch({
    //     type: CHANGE_ADD_STRUCTURE_MODAL_STATUS,
    //     payload: true,
    //   })
    //   dispatch({
    //     type: SHOW_ADD_STRUCTURE_MSG,
    //     payload: false,
    //   })
    // },
    handleMore(id) {
      dispatch(assignStructureFetch(id));
      dispatch({
        type: ASSIGN_STRUCTURE_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS,
        payload: true,
      });
    },
    handleComponentCheck(structID, projectID) {
      dispatch({
        type: SET_PROJECT_STRUCTURE_ID,
        payload: { structureID: structID, projectID },
      });
      props.history.push(
        `/etrack/structure/viewComponent/${window.btoa(structID)}/${window.btoa(
          projectID
        )}`
      );
    },
    handleGetComponent(structID, projectID) {
      dispatch(assignStructureFetch(structID, projectID)).then(() => {
        dispatch({
          type: ASSIGN_STRUCTURE_MORE_PAGE,
          payload: true,
        });
        dispatch({
          type: CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS,
          payload: true,
        });
      });
    },
  };
};

const mapStateToProps = (state) => {
  const assignStructure = store.getState().assignStructure;
  return {
    assignStructure,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ViewAssignStructure)
);
