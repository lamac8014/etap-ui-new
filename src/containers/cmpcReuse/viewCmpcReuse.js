import { connect } from "react-redux";
import store from "../../store";
import {
	getCmpcList,
	updateDispatchStructure,
} from "../../actions/cmpcReuseActions";
import {
	CHANGE_CMPC_EDIT_MORE_MODAL_STATUS,
	CHANGE_CMPC_MORE_MODAL_STATUS,
	CMPC_EDIT_MORE_PAGE,
	CMPC_MORE_PAGE,
	CMPC_SET_SELECTED_ITEMS,
	RESET_MESSAGE,
	SET_MODIFICATION,
	SET_MODIFICATION_CHECKED,
	TRANSFORM_STRUCTURE_DATA,
	REUSE_SET_VIEW_MORE_MODAL,
	SET_CURRENT_ATTRIBUTES,
} from "../../actions/types";
import ViewCmpcReuse from "../../pages/cmpcReuse/ViewCmpcReuse";
import swal from "sweetalert";

const mapDispatchToProps = (dispatch, props) => {
	return {
		cmpcList() {
			dispatch(getCmpcList()).then((response) => {
				let cmpcList = store.getState().cmpcReuse.cmpcList;
				let tempArr = [];
				cmpcList.map((item) => {
					if (item.isModified === null) {
						let tempObj = {
							...item,
							checked: false,
						};
						tempArr.push(tempObj);
					}
				});
				dispatch({
					type: TRANSFORM_STRUCTURE_DATA,
					payload: tempArr,
				});
			});
		},
		handleViewMore(id) {
			dispatch({
				type: CMPC_MORE_PAGE,
				payload: true,
			});
			dispatch({
				type: CHANGE_CMPC_MORE_MODAL_STATUS,
				payload: true,
			});
		},
		handleEdit(id) {
			dispatch({
				type: CMPC_EDIT_MORE_PAGE,
				payload: true,
			});
			dispatch({
				type: CHANGE_CMPC_EDIT_MORE_MODAL_STATUS,
				payload: true,
			});
		},
		handleChangeModification(value) {
			let modifyFlag =
				value === "withMod" ? true : value === "withoutMod" ? false : false;
			dispatch({
				type: SET_MODIFICATION,
				payload: modifyFlag,
			});
			if(value === "withMod") {
				dispatch({
					type: SET_MODIFICATION_CHECKED,
					payload: {
						isWithMod: true,
						isWithoutMod: false,
						isReject: false
					},
				});
			} else if(value === "withoutMod") {
				dispatch({
					type: SET_MODIFICATION_CHECKED,
					payload: {
						isWithMod: false,
						isWithoutMod: true,
						isReject: false
					},
				});
			} else {
				dispatch({
					type: SET_MODIFICATION_CHECKED,
					payload: {
						isWithMod: false,
						isWithoutMod: false,
						isReject: true
					},
				});
			}
		},
		showViewMoreModal(structure) {
			let attributes = JSON.parse(structure.structureAttValue);
			dispatch({
				type: SET_CURRENT_ATTRIBUTES,
				payload: attributes,
			});
			dispatch({
				type: REUSE_SET_VIEW_MORE_MODAL,
				payload: true,
			});
		},
		hideViewMoreModal() {
			dispatch({
				type: SET_CURRENT_ATTRIBUTES,
				payload: [],
			});
			dispatch({
				type: REUSE_SET_VIEW_MORE_MODAL,
				payload: false,
			});
		},
		setSelectedStructures(structure) {
			let cmpc = store.getState().cmpcReuse;
			let cmpcList = JSON.parse(JSON.stringify(cmpc.transformedCmpcList));

			let selectedItems = JSON.parse(JSON.stringify(cmpc.selectedItems));
			cmpcList.map((item) => {
				if (item.dispatchRequirementId === structure.dispatchRequirementId) {
					item.checked = !item.checked;
				}
			});
			if (selectedItems.length > 0) {
				let index = selectedItems.indexOf(
					selectedItems.filter((item) => {
						return (
							item.dispatchRequirementId === structure.dispatchRequirementId
						);
					})[0]
				);
				index !== -1
					? selectedItems.splice(index, 1)
					: selectedItems.push(structure);
			} else {
				selectedItems.push(structure);
			}

			dispatch({
				type: CMPC_SET_SELECTED_ITEMS,
				payload: selectedItems,
				cmpcList: cmpcList,
			});
		},
		updateStructure() {
			dispatch(updateDispatchStructure())
				.then((response) => {
					dispatch({
						type: CMPC_SET_SELECTED_ITEMS,
						payload: [],
						cmpcList: [],
					});
					this.cmpcList();
					dispatch({
						type: SET_MODIFICATION,
						payload: false,
					});
					dispatch({
						type: SET_MODIFICATION_CHECKED,
						payload: {
							isWithMod: false,
							isWithoutMod: false,
							isReject: false
						},
					});
					swal(`${response.value.data.message}`, {
						icon: "success",
					});
				})
				.catch((err) => {
					swal("Structure modification status update failed", {
						icon: "error",
					});
				});
		},
		resetMessage() {
			let cmpc = store.getState().cmpcReuse;
			let cmpcList = JSON.parse(JSON.stringify(cmpc.transformedCmpcList));
			cmpcList.map(item => item.checked = false)
			dispatch({ type: CMPC_SET_SELECTED_ITEMS, payload: [], cmpcList });
			dispatch({type: SET_MODIFICATION, payload: null})
			dispatch({
				type: SET_MODIFICATION_CHECKED,
				payload: {
					isWithMod: false,
					isWithoutMod: false,
					isReject: false
				},
			});
		},
	};
};

const mapStateToProps = (state) => {
	const cmpcReuse = store.getState().cmpcReuse;
	return {
		cmpcReuse,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCmpcReuse);
