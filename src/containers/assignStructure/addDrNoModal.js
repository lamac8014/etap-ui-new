import { connect } from "react-redux";
import store from "../../store";

import {
    ADD_DRNO_MODAL,
    ADD_DRNO_MORE_MODAL,
    ADD_DRNO_MORE_PAGE,
    SET_FILES,
    ASSIGN_FILE_UPLOAD,
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
			// dispatch({
			// 	type: ADD_DRNO_MORE_PAGE,
			// 	payload: true,
			// });
			dispatch({
				type: ADD_DRNO_MODAL,
				payload: true,
			});
        },
        handleChangeFileUpload(files) {
			const scr = store.getState().scr;
			const newDocs = [...files];
			newDocs.map((doc) => {
				doc.isNew = true;
			});
			const tmpArr = [...scr.files, ...newDocs];
			dispatch({
				type: SET_FILES,
				payload: tmpArr,
			});
        },
        handleFileUpload(value) {
			const scr = store.getState().scr;
			const newDocs = [...value];
			newDocs.map((doc) => {
				doc.isNew = true;
			});
			const tmpArr = [...scr.files, ...newDocs];
			dispatch({
				type: ASSIGN_FILE_UPLOAD,
				payload: tmpArr,
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
