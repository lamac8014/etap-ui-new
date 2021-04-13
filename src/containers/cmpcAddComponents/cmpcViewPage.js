import { connect } from "react-redux";
import store from "../../store";
import { getDispatchStructureData } from "../../actions/cmpcAddComponentsActions";
import {} from "../../actions/types";

import CmpcViewPage from "../../pages/cmpcAddComponents/CmpcViewPage";

const mapDispatchToProps = (dispatch, props) => {
	return {
		getDispatchStructureData() {
			dispatch(getDispatchStructureData());
		},
		redirectToAddComponents(id, dispStructId) {
			props.history.push(
				`/etrack/dispatch/cmpcAdd/${window.btoa(id)}/${window.btoa(
					dispStructId
				)}`
			);
		},
	};
};

const mapStateToProps = (state) => {
	const cmpcAdd = state.cmpcAdd;
	return {
		cmpcAdd,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CmpcViewPage);
