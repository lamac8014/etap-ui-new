import { connect } from 'react-redux';
import store from '../../store';
import { cmpcList } from '../../actions/conditionAssessmentAction';
import {
    setSelectedItem,
  } from "../../actions/createDispatchActions";
import {
  
    CHANGE_CMPC_EDIT_MORE_MODAL_STATUS,
    CHANGE_CMPC_MORE_MODAL_STATUS,
    CMPC_EDIT_MORE_PAGE,
    CMPC_MORE_PAGE,
    TRANSFORM_SITE_REQUIREMENTS
} from '../../actions/types';
import ViewCmpcReuse from '../../pages/cmpcReuse/ViewCmpcReuse';

const mapDispatchToProps = (dispatch, props) => {
    return {
        cmpcList() {
            dispatch(cmpcList());
        },
        handleViewMore(id) {
            dispatch({
                type: CMPC_MORE_PAGE,
                payload: true,
            });
            dispatch({
                type: CHANGE_CMPC_MORE_MODAL_STATUS,
                payload: true,
            })
        },
        handleEdit(id) {
            dispatch({
                type: CMPC_EDIT_MORE_PAGE,
                payload: true,
            });
            dispatch({
                type: CHANGE_CMPC_EDIT_MORE_MODAL_STATUS,
                payload: true,
            })
        },
    };
};

const mapStateToProps = state => {
    const cmpcReuse = store.getState().cmpcReuse;
    return {
        cmpcReuse,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCmpcReuse);
