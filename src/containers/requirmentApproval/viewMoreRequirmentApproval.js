import { connect } from 'react-redux';
import store from '../../store';

import {
    CHANGE_REQUIRMENT_APPROVAL_MORE_MODAL_STATUS
} from '../../actions/types';

import ViewMoreRequirmentApproval from '../../pages/requirmentApproval/ViewMoreRequirmentApproval';

const mapDispatchToProps = dispatch => {
    return {
        closeRequirmentViewMoreModal() {
            dispatch({
                type: CHANGE_REQUIRMENT_APPROVAL_MORE_MODAL_STATUS,
                payload: false,
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

export default connect(mapStateToProps, mapDispatchToProps)
    (
        ViewMoreRequirmentApproval
    );
