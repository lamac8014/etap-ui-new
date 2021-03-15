import { connect } from 'react-redux';
import store from '../../store';
import {
  
  requirmentApprovalList,
  requirementAction,
  singleRequirementFetch,
 

} from '../../actions/requirmentApprovalAction';

import {
  REQUIRMENT_APPROVAL_MORE_PAGE,
  CHANGE_REQUIRMENT_APPROVAL_MORE_MODAL_STATUS,
 

} from '../../actions/types';
import ViewRequirmentApproval from '../../pages/requirmentApproval/ViewRequirmentApproval';


const mapDispatchToProps = (dispatch, props) => {
  return {
    requirmentApprovalList() {
      dispatch(requirmentApprovalList());
    },



    handleMore(id) {
      // dispatch(singleRequirementFetch(id));
      dispatch({
        type: REQUIRMENT_APPROVAL_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: CHANGE_REQUIRMENT_APPROVAL_MORE_MODAL_STATUS,
        payload: true,
      })
    },
    handleApprove(id) {
      let requirementList = store.getState().requirement.requirementsList;
      let singleRequirement = requirementList[id];
      console.log(singleRequirement)
      console.log(`ID: ${id}`)
      dispatch(requirementAction(id, "Approval")).then(() => {
        dispatch(requirmentApprovalList());
      });
    },
    handleReject(id) {
      console.log(`ID: ${id}`)
      dispatch(requirementAction(id, "Rejection")).then(() => {
        dispatch(requirmentApprovalList());
      });
    },

  };
};

const mapStateToProps = state => {
  const requirmentApproval = store.getState().requirmentApproval;
  return {
    requirmentApproval,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewRequirmentApproval);
