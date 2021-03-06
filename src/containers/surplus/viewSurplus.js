import { connect } from 'react-redux';
import store from '../../store';
import { surplusList } from '../../actions/surplusAction';

import {
    SURPLUS_MORE_PAGE,
    SURPLUS_EDIT_MORE_PAGE,
    CHANGE_SURPLUS_MORE_MODAL_STATUS,
    CHANGE_SURPLUS_EDIT_MORE_MODAL_STATUS
} from '../../actions/types';
import ViewSurplus from '../../pages/surplus/ViewSurplus';

const mapDispatchToProps = (dispatch, props) => {
    return {
        surplusList() {
            dispatch(surplusList());
        },

        handleViewMore(id) {
            dispatch({
                type: SURPLUS_MORE_PAGE,
                payload: true,
            });
            dispatch({
                type: CHANGE_SURPLUS_MORE_MODAL_STATUS,
                payload: true,
            })
        },
        handleEdit(id) {
            dispatch({
                type: SURPLUS_EDIT_MORE_PAGE,
                payload: true,
            });
            dispatch({
                type: CHANGE_SURPLUS_EDIT_MORE_MODAL_STATUS,
                payload: true,
            })
        },
    };
};

const mapStateToProps = state => {
    const surplus = store.getState().surplus;
    return {
        surplus,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSurplus);
