import { connect } from "react-redux";
import {
	SHOW_EDIT_COMPONENT_MODAL,
	RESET_EDIT_COMPONENT_FORM,
	MODIFY_BREADTH,
	MODIFY_HEIGHT,
	MODIFY_LENGTH,
	MODIFY_WEIGHT,
	MODIFY_WIDTH,
} from "../../actions/types";
import { getStructureTableData } from "../../actions/cmpcModificationActions";
import ViewStructures from "../../pages/cmpcModification/ViewStructures";

const mapDispatchToProps = (dispatch, props) => {
	return {
		getStructureTableData() {
			dispatch(getStructureTableData());
		},
		redirectToComponentPage(id, name, code, proj) {
			props.history.push(
				`/etrack/structure/modifyComponent/${window.btoa(id)}/${window.btoa(
					name
				)}/${window.btoa(code)}/${window.btoa(proj)}`
			);
		},
	};
};

const mapStateToProps = (state) => {
	const cmpc = state.cmpc;
	return { cmpc };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewStructures);
