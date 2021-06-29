import { connect } from 'react-redux';
import store from '../../store';

import {

    CHANGE_BUILT_MORE_MODAL_STATUS,
    CHANGE_BUILT_EDIT_MORE_MODAL_STATUS,
    ADD_STRUCTURE_COMPONENT,
} from '../../actions/types';
import BuiltViewMore from '../../pages/built/BuiltViewMore';
import BuiltMoreEdit from '../../pages/built/BuiltMoreEdit';
import {addComponent} from "../../actions/builtAction";

const mapDispatchToProps = dispatch => {
    return {
      
        closeBuiltEditMoreModal() {
            dispatch({
                type: CHANGE_BUILT_EDIT_MORE_MODAL_STATUS,
                payload: false,
            })
        },
        addComponent() {
            dispatch(this.addComponent()).then(() => {
                dispatch({
                    type: ADD_STRUCTURE_COMPONENT,
                    payload: false,
                });
            });
        },
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
        BuiltMoreEdit
    );
