import { connect } from 'react-redux';
import store from '../../store';
import { requirmentApprovalList } from '../../actions/requirmentApprovalAction';

import {
    REQUIRMENT_APPROVAL_MORE_PAGE,
    CHANGE_REQUIRMENT_APPROVAL_MORE_MODAL_STATUS,
    REQUIRMENT_APPROVAL,
    REQUIRMENT_REJECT,

} from '../../actions/types';
import ViewRequirmentApproval from '../../pages/requirmentApproval/ViewRequirmentApproval';

const mapDispatchToProps = (dispatch,props) => {
  return {
    requirmentApprovalList() {
      dispatch(requirmentApprovalList());
    },

 

    handleMore(id) {
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
      dispatch({
        type: REQUIRMENT_APPROVAL,
        payload: true,
      });
      dispatch({
        type: CHANGE_REQUIRMENT_APPROVAL_MORE_MODAL_STATUS,
        payload: true,
      })
    },
    handleReject(id) {
      dispatch({
        type: REQUIRMENT_REJECT,
        payload: true,
      });
      dispatch({
        type: CHANGE_REQUIRMENT_APPROVAL_MORE_MODAL_STATUS,
        payload: true,
      })
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
