import { connect } from "react-redux";
import store from "../../store";

import {
    ADD_DRNO_MODAL,
    ADD_DRNO_MORE_MODAL,
    ADD_DRNO_MORE_PAGE,
    SET_FILES,
} from "../../actions/types";
import AddDrNo from "../../pages/cmpcAddComponents/AddDrNo";
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
        handleChangeFileUpload(files) {
			const cmpcAdd = store.getState().cmpcAdd;
			const newDocs = [...files];
			newDocs.map((doc) => {
				doc.isNew = true;
			});
			const tmpArr = [...cmpcAdd.files, ...newDocs];
			dispatch({
				type: SET_FILES,
				payload: tmpArr,
			});
		},
    };
};

const mapStateToProps = (state) => {
	const cmpcAdd = state.cmpcAdd;
	return {
		cmpcAdd,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AddDrNo);
