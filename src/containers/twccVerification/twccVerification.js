import { connect } from "react-redux";
import store from "../../store";
import {
	getPhysicalVerificationDetails,
	getProjectCodeList,
	savePhysicalVerification,
} from "../../actions/physicalVerificationAction";

import {
	FROM_DUE,
	PHY_SET_PROJECT_NAME,
	PHY_SET_SELECTED_ITEMS,
	RESET_UPDATE_PHYSICAL_VERIFICATION_MODAL,
	SHOW_SAVE_MODAL,
	TO_DUE,
	TRANSFORM_PHYSICAL_VERIFICATION_DATA,
} from "../../actions/types";
import ViewtwccVerification from "../../pages/twccVerification/TwccVerification";
import swal from "sweetalert";

const mapDispatchToProps = (dispatch, props) => {
	return {
		getProjectCodeList() {
			dispatch(getProjectCodeList());
		},
		handleChangeProjectName(obj) {
			dispatch({
				type: PHY_SET_PROJECT_NAME,
				payload: obj,
			});
			dispatch(getPhysicalVerificationDetails()).then((response) => {
				const physicalVerification = store.getState().physicalVerification;
				let phyVerificationDetails = JSON.parse(
					JSON.stringify(physicalVerification.physicalVerificationDetails)
				);
				let payload = [];
				phyVerificationDetails.map((item, index) => {
					let tempObj = {
						...item,
						temp_id: index,
						checked: false,
					};
					payload.push(tempObj);
				});

				dispatch({
					type: TRANSFORM_PHYSICAL_VERIFICATION_DATA,
					payload,
				});
			});
		},
		showSaveModal() {
			dispatch({
				type: SHOW_SAVE_MODAL,
				payload: true,
			});
		},
		hideSaveModal() {
			dispatch({
				type: SHOW_SAVE_MODAL,
				payload: false,
			});
			dispatch({
				type: FROM_DUE,
				payload: "",
			});
			dispatch({
				type: TO_DUE,
				payload: "",
			});
		},
		setSelectedItems(structure) {
			let physicalVerification = store.getState().physicalVerification;
			let physicalVerificationDetails = JSON.parse(
				JSON.stringify(physicalVerification.physicalVerificationDetails)
			);

			let selectedItems = JSON.parse(
				JSON.stringify(physicalVerification.selectedItems)
			);
			physicalVerificationDetails.map((item) => {
				if (item.temp_id === structure.temp_id) {
					item.checked = !item.checked;
				}
			});
			if (selectedItems.length > 0) {
				let index = selectedItems.indexOf(
					selectedItems.filter((item) => {
						return item.temp_id === structure.temp_id;
					})[0]
				);
				index !== -1
					? selectedItems.splice(index, 1)
					: selectedItems.push(structure);
			} else {
				selectedItems.push(structure);
			}
			dispatch({
				type: PHY_SET_SELECTED_ITEMS,
				payload: selectedItems,
				physicalVerificationDetails,
			});
		},
		handleChangeFromDate(date) {
			dispatch({
				type: FROM_DUE,
				payload: date,
			});
		},
		handleChangeToDate(date) {
			dispatch({
				type: TO_DUE,
				payload: date,
			});
		},
		savePhysicalVerification() {
			dispatch(savePhysicalVerification())
				.then((response) => {
					dispatch(getPhysicalVerificationDetails()).then((response) => {
						const physicalVerification = store.getState().physicalVerification;
						let phyVerificationDetails = JSON.parse(
							JSON.stringify(physicalVerification.physicalVerificationDetails)
						);
						let payload = [];
						phyVerificationDetails.map((item, index) => {
							let tempObj = {
								...item,
								temp_id: index,
								checked: false,
							};
							payload.push(tempObj);
						});
		
						dispatch({
							type: TRANSFORM_PHYSICAL_VERIFICATION_DATA,
							payload,
						});
					});
					
					let message = store.getState().physicalVerification.message;
					swal(message, {
						icon: "success",
					});
					dispatch({
						type: RESET_UPDATE_PHYSICAL_VERIFICATION_MODAL,
					});
				})
				.catch((err) => {
					let message = store.getState().physicalVerification.message;
					swal(message, {
						icon: "error",
					});
					dispatch({
						type: RESET_UPDATE_PHYSICAL_VERIFICATION_MODAL,
					});
				});
		},
	};
};

const mapStateToProps = (state) => {
	const physicalVerification = state.physicalVerification;
	return {
		physicalVerification,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewtwccVerification);
