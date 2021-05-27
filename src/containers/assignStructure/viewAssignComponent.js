import { connect } from "react-redux";
import store from "../../store";
import {
  assignStructureList,
  assignComponentFetch,
  assignComponentList,
  getChartData,
} from "../../actions/assignStructureAction";

import {
  CHANGE_ASSIGN_COMPONENT_MORE_MODAL_STATUS,
  ASSIGN_COMPONENT_MORE_PAGE,
  SET_PROJECT_STRUCTURE_ID,
} from "../../actions/types";
import ViewAssignComponent from "../../pages/assignStructure/ViewAssignComponent";

const mapDispatchToProps = (dispatch) => {
  return {
    assignComponentList(structId, projectId, projStrId) {
      dispatch(assignComponentList(structId, projectId));
      dispatch(getChartData(projStrId));
    },

    handleMore(id) {
      dispatch(assignComponentFetch(id));
      dispatch({
        type: ASSIGN_COMPONENT_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: CHANGE_ASSIGN_COMPONENT_MORE_MODAL_STATUS,
        payload: true,
      });
    },
    handleFetchComponent(e, structID, projectID) {
      // e.preventDefault();
      dispatch({
        type: SET_PROJECT_STRUCTURE_ID,
        payload: { structureID: structID, projectID },
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewAssignComponent);
