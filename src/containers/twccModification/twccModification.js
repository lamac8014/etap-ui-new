import { connect } from "react-redux";
import store from "../../store";
import { getTwccModificationData } from "../../actions/twccModificationAction";

import {
	SET_CURRENT_STRUCTURE,
	SET_EDIT_MODAL_FLAG,
	TRANSFORM_TABLE_DATA,
	TWCCMOD_SET_SHOW_VIEW_MORE_MODAL,
} from "../../actions/types";
// import ViewScrap from '../../pages/scrap/ViewScrap';
import ViewtwccModification from "../../pages/twccModification/TwccModification";
import { nanoid } from "nanoid";

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

				modifiedData.map(item => {
					item.tempId = nanoid();
				})
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
				return item.tempId === dispStrId;
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
		showViewMoreModal(id){
			let twcc = store.getState().twcc;
			let twccModificationData = JSON.parse(
				JSON.stringify(twcc.twccModificationData)
			);
			let currentStr = twccModificationData.filter((item) => {
				return item.tempId === id;
			});
			dispatch({
				type: SET_CURRENT_STRUCTURE,
				payload: currentStr.length > 0 ? currentStr[0] : {},
			});
			dispatch({
				type: TWCCMOD_SET_SHOW_VIEW_MORE_MODAL,
				payload: true,
			})
		},
		hideViewMoreModal(){
			dispatch({
				type: TWCCMOD_SET_SHOW_VIEW_MORE_MODAL,
				payload: false,
			})
			dispatch({
				type: SET_CURRENT_STRUCTURE,
				payload: {},
			});
		},
		redirectToComponentPage(
			dispStrId,
			name,
			code,
			proj,
		) {
			props.history.push(
				`/etrack/fabricationMgmt/twccModification/${window.btoa(
					dispStrId
				)}/${window.btoa(
					name
				)}/${window.btoa(code)}/${window.btoa(proj)}`
			);
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
