import { connect } from "react-redux";
import { SET_VIEW_MORE_FLAG } from "../../actions/types";
import { getStructureTableData } from "../../actions/cmpcModificationActions";
import ViewStructures from "../../pages/cmpcModification/ViewStructures";
import store from "../../store";

const mapDispatchToProps = (dispatch, props) => {
	return {
		getStructureTableData() {
			dispatch(getStructureTableData());
		},
		redirectToComponentPage(
			dispStrId,
			dispReqId,
			projStrId,
			name,
			code,
			proj,
			dcNumber
		) {
			props.history.push(
				`/etrack/structure/modifyComponent/${window.btoa(
					dispStrId
				)}/${window.btoa(dispReqId)}/${window.btoa(projStrId)}/${window.btoa(
					name
				)}/${window.btoa(code)}/${window.btoa(proj)}/${window.btoa(dcNumber)}`
			);
		},
		openViewMoreModal(id) {
			let cmpc = store.getState().cmpc;
			let structData = JSON.parse(JSON.stringify(cmpc.structureData));
			let currentStructure = structData.filter((item) => {
				return item.dispStructureId === id;
			});
			dispatch({
				type: SET_VIEW_MORE_FLAG,
				payload: {
					showViewMore: true,
					attributes: JSON.parse(currentStructure[0].structureAttValue),
				},
			});
		},
		closeViewMoreModal() {
			dispatch({
				type: SET_VIEW_MORE_FLAG,
				payload: {
					showViewMore: false,
					attributes: [],
				},
			});
		},
	};
};

const mapStateToProps = (state) => {
	const cmpc = state.cmpc;
	return { cmpc };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewStructures);
