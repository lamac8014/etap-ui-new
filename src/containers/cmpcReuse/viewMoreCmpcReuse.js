import { connect } from 'react-redux';
import store from '../../store';

import {

    CHANGE_CMPC_MORE_MODAL_STATUS,
    CHANGE_CMPC_EDIT_MORE_MODAL_STATUS
} from '../../actions/types';

import ViewMoreCmpcReuse from '../../pages/cmpcReuse/ViewMoreCmpcReuse';

const mapDispatchToProps = dispatch => {
    return {
        closeCmpcViewMoreModal() {
            dispatch({
                type: CHANGE_CMPC_MORE_MODAL_STATUS,
                payload: false,
            })
        },
        showCmpcEditMoreModal() {
            dispatch({
                type: CHANGE_CMPC_EDIT_MORE_MODAL_STATUS,
                payload: false,
            })
        }
    };
};

const mapStateToProps = state => {
    const cmpcReuse = store.getState().cmpcReuse;
    return {
        cmpcReuse,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
    (
        ViewMoreCmpcReuse
    );
