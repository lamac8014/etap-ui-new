import { connect } from 'react-redux';
import store from '../../store';

import {

    CHANGE_BUILT_MORE_MODAL_STATUS,
    CHANGE_BUILT_EDIT_MORE_MODAL_STATUS
} from '../../actions/types';
import BuiltViewMore from '../../pages/built/BuiltViewMore';
import BuiltMoreEdit from '../../pages/built/BuiltMoreEdit';

const mapDispatchToProps = dispatch => {
    return {
        closeBuiltViewMoreModal() {
            dispatch({
                type: CHANGE_BUILT_MORE_MODAL_STATUS,
                payload: false,
            })
        },
        showBuiltEditMoreModal() {
            dispatch({
                type: CHANGE_BUILT_EDIT_MORE_MODAL_STATUS,
                payload: false,
            })
        }
    };
};

const mapStateToProps = state => {
    const built = store.getState().built;
    return {
        built,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
    (
        BuiltViewMore
    );
