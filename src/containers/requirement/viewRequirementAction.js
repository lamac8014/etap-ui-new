import { connect } from "react-redux";
import store from "../../store";
import {
  getRequirementsList,
  requirementAction,
  singleRequirementFetch,
} from "../../actions/requirementAction";
import { withRouter } from "react-router-dom";

import {
  CHANGE_ADD_STRUCTURE_MODAL_STATUS,
  SHOW_ADD_STRUCTURE_MSG,
  SET_PROJECT_STRUCTURE_ID,
  ASSIGN_STRUCTURE_MORE_PAGE,
  CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS,
  VIEW_REQUIREMENTS_MORE_PAGE,
  CHANGE_VIEW_REQUIREMENTS_MORE_MODAL_STATUS,
  SET_CURRENT_STRUCTURE_ATTRIBUTE_VALUE,
} from "../../actions/types";
import ViewRequirementAction from "../../pages/requirements/ViewRequirementAction";
import swal from "sweetalert";

const mapDispatchToProps = (dispatch, props) => {
  return {
    getRequirementsList() {
      dispatch(getRequirementsList());
    },
    handleApprove(id) {
      let requirementList = store.getState().requirement.requirementsList;
      let singleRequirement = requirementList[id];
      console.log(singleRequirement);
      console.log(`ID: ${id}`);
      dispatch(requirementAction(id, "Approval"))
        .then(() => {
          dispatch(getRequirementsList());
          swal("Requirement Approved", {
            icon: "success",
          });
        })
        .catch((err) => {
          swal("Approve failed", {
            icon: "error",
          });
        });
    },
    handleReject(id) {
      console.log(`ID: ${id}`);
      dispatch(requirementAction(id, "Rejection"))
        .then(() => {
          dispatch(getRequirementsList());
          swal("Requirement Rejected", {
            icon: "success",
          });
        })
        .catch((err) => {
          swal("Reject failed", {
            icon: "error",
          });
        });
    },
    handleMore(id) {
      console.log(`ID: ${id}`);
      const requirement = store.getState().requirement;
      const reqId = requirement.requirementsList[id].id;
      dispatch(singleRequirementFetch(reqId)).then((response) => {
        const requirement = store.getState().requirement;
        const requirementsViewMore = JSON.parse(
          JSON.stringify(requirement.requirementViewMore)
        );
        requirementsViewMore.siteRequirementStructures.map((item) => {
          item.structureAttributesVal = JSON.parse(item.structureAttributesVal);
        });
        dispatch({
          type: SET_CURRENT_STRUCTURE_ATTRIBUTE_VALUE,
          payload: requirementsViewMore,
        });
      });
      dispatch({
        type: VIEW_REQUIREMENTS_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: CHANGE_VIEW_REQUIREMENTS_MORE_MODAL_STATUS,
        payload: true,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const requirement = store.getState().requirement;
  return {
    requirement,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ViewRequirementAction)
);
