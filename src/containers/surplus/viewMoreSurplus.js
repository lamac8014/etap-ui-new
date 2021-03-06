import { connect } from 'react-redux';
import store from '../../store';

import {

    CHANGE_SURPLUS_MORE_MODAL_STATUS,
    CHANGE_SURPLUS_EDIT_MORE_MODAL_STATUS
} from '../../actions/types';

import ViewSurplusMore from '../../pages/surplus/ViewSurplusMore'

const mapDispatchToProps = dispatch => {
    return {
        closeSurplusViewMoreModal() {
            dispatch({
                type: CHANGE_SURPLUS_MORE_MODAL_STATUS,
                payload: false,
            })
        },
        showSurplusEditMoreModal() {
            dispatch({
                type: CHANGE_SURPLUS_EDIT_MORE_MODAL_STATUS,
                payload: false,
            })
        }
    };
};

const mapStateToProps = state => {
    const surplus = store.getState().surplus;
    return {
        surplus,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
    (
        ViewSurplusMore
    );
