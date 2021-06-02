import { connect } from "react-redux";
import store from "../../store";
import {
	SURPLUS_VIEW_MORE_MODAL, 
	SURPLUS_VIEW_MODAL
} from "../../actions/types";
import ViewModal from "../../pages/surplus/ViewModal";
const mapDispatchToProps = (dispatch, props) => {
	return { 
        closeSurplusViewModal() {
            dispatch ({
                type: SURPLUS_VIEW_MODAL,
                payload: false,
            })
        },
        ShowSurplusViewModal() {
            dispatch({
                type: SURPLUS_VIEW_MORE_MODAL,
                payload: false,
            })
        },
    };
};

const mapStateToProps = (state) => {
	const surplus = store.getState().surplus;
	return {
		surplus,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewModal);
