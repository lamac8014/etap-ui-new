import { connect } from "react-redux";
import store from "../../store";
import {
	getAssignedStructureData,
	updateStructureModify,
	updateDispatchStructure,
} from "../../actions/cmpcAddComponentsActions";
import {
	SET_NO_OF_COMPONENTS,
	SET_EST_WEIGHT,
	SET_FILES,
	REMOVE_FILES,
	CMPC_SET_UPLOAD_DATA,
	SET_DISP_STRUCT_ID,
	SET_PROJ_STRUCT_ID,
	SET_DR_NUMBER,
	ADD_DRNO_MORE_PAGE,
	ADD_DRNO_MODAL,
	ADD_DRNO_MORE_MODAL,
	RESEST_CMPC_FORM,
} from "../../actions/types";
import swal from "sweetalert";
import CmpcAddComponents from "../../pages/cmpcAddComponents/CmpcAddComponents";

const mapDispatchToProps = (dispatch, props) => {
	return {
		setInitialForm(){
			dispatch({
				type:RESEST_CMPC_FORM,
			});
		},
		getAssignedStructureData(id, dispStructID, projStructId) {
			dispatch(getAssignedStructureData(id));
			dispatch({
				type: SET_DISP_STRUCT_ID,
				payload: dispStructID,
			});
			dispatch({
				type: SET_PROJ_STRUCT_ID,
				payload: projStructId,
			});
		},
		handleChangeEstWeight(value) {
			dispatch({
				type: SET_EST_WEIGHT,
				payload: value,
			});
		},
		handleChangeNoOfComponents(value) {
			dispatch({
				type: SET_NO_OF_COMPONENTS,
				payload: value,
			});
		},
		handlechangeDrNumber(value) {
			dispatch({
				type: SET_DR_NUMBER,
				payload: value,
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
		handleOnDrop(data) {
			let cmpcAdd = store.getState().cmpcAdd;
			let components = cmpcAdd.assignedStructureDetails.components;
			let componentCount = cmpcAdd.assignedStructureDetails.componentsCount;
			let uploadData = [];
			data.forEach((a, i) => {
				console.log("index", i, a);
				if (i > 0 && a.data.length > 1) {
					let start = 0;
					let wbsSampleObject = {
						componentName: a.data[start] ? a.data[start] : "",
						compTypeName: a.data[start + 1] ? a.data[start + 1] : "",
						compId: a.data[start + 2] ? a.data[start + 2] : "",
						componentNo: a.data[start + 3] ? a.data[start + 3] : "",
						isGroup: a.data[start + 4].toString().toLowerCase() === "true" || a.data[start + 4].toString().toLowerCase() === "yes" ? "Yes" : "No",
						drawingNo: a.data[start + 5] ? a.data[start + 5] : "",
						leng: a.data[start + 6] ? parseFloat(a.data[start + 6]) : "",
						breath: a.data[start + 7] ? parseFloat(a.data[start + 7]) : "",
						height: a.data[start + 8] ? parseFloat(a.data[start + 8]) : "",
						thickness: a.data[start + 9] ? parseFloat(a.data[start + 9]) : "",
						weight: a.data[start + 10] ? parseFloat(a.data[start + 10]) : "",
						makeType: a.data[start + 11] ? a.data[start + 11] : "",
						isTag: a.data[start + 12].toString().toLowerCase() === "true" || a.data[start + 12].toString().toLowerCase() === "yes" ? "Yes" : "No",
						qrCode: a.data[start + 13] ? a.data[start + 13] : "",
					};
					uploadData.push(wbsSampleObject);
				}
			});
			dispatch({
				type: CMPC_SET_UPLOAD_DATA,
				payload: uploadData,
			});
		},
		removeFiles(file, index) {
			const cmpcAdd = store.getState().cmpcAdd;
			const tmpArr = [...cmpcAdd.files];
			tmpArr.splice(index, 1);
			dispatch({
				type: SET_FILES,
				payload: tmpArr,
			});
			let removeFiles = [...cmpcAdd.removeFiles];
			!file.isNew && removeFiles.push(file.id);
			dispatch({
				type: REMOVE_FILES,
				payload: removeFiles,
			});
		},
		updateDispatchStructure() {
			dispatch(updateDispatchStructure())
				.then((response) => {
					let projStrId = store.getState().cmpcAdd.projStructId;
					dispatch(getAssignedStructureData(projStrId));
					swal("Saved", {
						icon: "success",
					});
				})
				.catch((err) => {
					err.response.status === 400 ? swal("Invalid or No data provided", {
						icon: "error",
					  }) : swal("Something went wrong!", {
						icon: "error",
					  });
				});
		},
		updateStructureModify() {
			dispatch(updateStructureModify())
				.then((response) => {
					// console.log("response....", response.value.data.message);
					swal("Components saved successfully", {
						icon: "success",
					});
					props.history.push(`/etrack/dispatch/cmpcAdd`);
				})
				.catch((err) => {
					console.log("error.....", err);
					swal(`Add components failed`, {
						icon: "error",
					});
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

export default connect(mapStateToProps, mapDispatchToProps)(CmpcAddComponents);
