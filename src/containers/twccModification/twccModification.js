import { connect } from "react-redux";
import store from "../../store";
import { getTwccModificationData } from "../../actions/twccModificationAction";

import {
	SET_CURRENT_STRUCTURE,
	SET_EDIT_MODAL_FLAG,
	TRANSFORM_TABLE_DATA,
} from "../../actions/types";
// import ViewScrap from '../../pages/scrap/ViewScrap';
import ViewtwccModification from "../../pages/twccModification/TwccModification";

const mapDispatchToProps = (dispatch, props) => {
	return {
		getTwccModificationData() {
			dispatch(getTwccModificationData()).then((response) => {
				let twcc = store.getState().twcc;
				let twccModificationData = JSON.parse(
					JSON.stringify(twcc.twccModificationData)
				);
				let modifiedData = twccModificationData.filter((item) => {
					return item.status === "CMPC MODIFIED";
				});
				dispatch({
					type: TRANSFORM_TABLE_DATA,
					payload: modifiedData,
				});
			});
		},
		showEditModal(dispStrId) {
			let twcc = store.getState().twcc;
			let twccModificationData = JSON.parse(
				JSON.stringify(twcc.twccModificationData)
			);
			let currentStr = twccModificationData.filter((item) => {
				return item.dispStructureId === dispStrId;
			});
			dispatch({
				type: SET_CURRENT_STRUCTURE,
				payload: currentStr.length > 0 ? currentStr[0] : {},
			});
			dispatch({
				type: SET_EDIT_MODAL_FLAG,
				payload: true,
			});
		},
	};
};

const mapStateToProps = (state) => {
	const twcc = store.getState().twcc;
	return {
		twcc,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewtwccModification);
