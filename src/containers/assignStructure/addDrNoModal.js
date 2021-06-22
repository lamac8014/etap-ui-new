import { connect } from "react-redux";
import store from "../../store";

import {
    ADD_DRNO_MODAL,
    ADD_DRNO_MORE_MODAL,
    ADD_DRNO_MORE_PAGE,
} from "../../actions/types";
import AddDrNoModal from "../../pages/assignStructure/AddDrNoModal";
const mapDispatchToProps = (dispatch) => {
    return {
        closeAddModal() {
            dispatch({
                type: ADD_DRNO_MODAL,
                payload: false,
            });
        },
        showAddDrNoModal() {
            dispatch({
                type: ADD_DRNO_MORE_MODAL,
                payload: false,
            });
        },
        handleAddDrNo(id) {
			dispatch({
				type: ADD_DRNO_MORE_PAGE,
				payload: true,
			});
			dispatch({
				type: ADD_DRNO_MODAL,
				payload: true,
			});
		},
    };
};

const mapStateToProps = (state) => {
    const scr = state.scr;
    return {
        scr,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDrNoModal);
