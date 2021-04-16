import { connect } from 'react-redux';
import store from '../../store';
import { scrapList } from '../../actions/scrapAction';

import {
    SCRAP_MORE_PAGE,
    SCRAP_EDIT_MORE_PAGE,
    CHANGE_SCRAP_MORE_MODAL_STATUS,
    CHANGE_SCRAP_EDIT_MORE_MODAL_STATUS
} from '../../actions/types';
// import ViewScrap from '../../pages/scrap/ViewScrap';
import ViewtwccVerification from "../../pages/twccVerification/TwccVerification";

const mapDispatchToProps = (dispatch, props) => {
    return {
        scrapList() {
            dispatch(scrapList());
        },

        handleViewMore(id) {
            dispatch({
                type: SCRAP_MORE_PAGE,
                payload: true,
            });
            dispatch({
                type: CHANGE_SCRAP_MORE_MODAL_STATUS,
                payload: true,
            })
        },
        handleEdit(id) {
            dispatch({
                type: SCRAP_EDIT_MORE_PAGE,
                payload: true,
            });
            dispatch({
                type: CHANGE_SCRAP_EDIT_MORE_MODAL_STATUS,
                payload: true,
            })
        },
    };
};

const mapStateToProps = state => {
    const scrap = store.getState().scrap;
    return {
        scrap,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewtwccVerification);
