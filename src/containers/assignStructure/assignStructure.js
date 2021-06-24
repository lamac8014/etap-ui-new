import { connect } from "react-redux";
import store from "../../store";

import {
	PROJECT_NAME,
	STRUCTURE_NAME,
	STRUCTURE_TYPE,
	ESTIMATED_WEIGHT,
	NUMBER_OF_COMPONENTS,
	RESET_ASSIGN_STRUCT_FORM,
	DRAWING_NO,
	ASSIGN_STRUCT_UPLOADED_DATA,
	ASSIGN_FILE_UPLOAD,
	ON_CHANGE_ASSIGN_STRUCT,
	ASSIGN_FILE_REMOVE,
	ASSIGN_STRUCT_EXCEL_UPLOAD,
	RESET_ASSIGN_COMP_FORM,
	SET_SHOW_ATTRIBUTE_VALUE_MODAL,
	SET_CURRENT_ATTRIBUTE,
	SET_SELECTED_STRUCTURE_CODE,
	RESET_ASSIGN_STRUCTURE_DETAILS,
	ADD_DRNO_MORE_PAGE,
	ADD_DRNO_MODAL,
	ADD_DRNO_MORE_MODAL,
} from "../../actions/types";

import AssignStructure from "../../pages/assignStructure/AssignStructure";

import {
	getProjList,
	getStructList,
	getAssignStructDetails,
	saveAssignStruct,
	saveAssignComp,
	resetExistingData,
	getStructureCodeList,
	getAssignStructDetailsByProjStrId,
} from "../../actions/StructCompAction";

const mapDispatchToProps = (dispatch) => {
	return {
		setInitialData() {
			dispatch({
				type: RESET_ASSIGN_STRUCT_FORM,
			});
			dispatch({
				type: RESET_ASSIGN_COMP_FORM,
			});

			dispatch(getProjList());
			dispatch(getStructList());
		},
		resetStructureData() {
			dispatch({ type: RESET_ASSIGN_STRUCT_FORM });
		},
		handleChangeComponentProjectName(obj) {
			dispatch({
				type: PROJECT_NAME,
				payload: obj,
			});
		},
		handleChangeComponentStructureName(value) {
			dispatch({
				type: STRUCTURE_NAME,
				payload: value,
			});
			dispatch(getAssignStructDetails());
			dispatch(getStructureCodeList());
		},
		handleChangeStructureCode(value) {
			dispatch({
				type: SET_SELECTED_STRUCTURE_CODE,
				payload: value,
			});
			if (value.value) {
				dispatch(getAssignStructDetailsByProjStrId(value.value));
			}
			if (value.value === null) {
				const scr = store.getState().scr;
				let attrData = JSON.parse(JSON.stringify(scr.structAttri));
				dispatch({ type: RESET_ASSIGN_STRUCTURE_DETAILS, payload: attrData });
			}
		},
		handleChangeComponentStructureFamily(value) {
			dispatch({
				type: STRUCTURE_TYPE,
				payload: value,
			});
		},
		handleAddDrNo(id) {
		
			dispatch({
				type: ADD_DRNO_MODAL,
				payload: true,
			});
		},
		handleChangeComponentDrawingNumber(value) {
			dispatch({
			  type: DRAWING_NO,
			  payload: value,
			});
		  },
		handleChangeEstimatedWeight(value) {
			dispatch({
				type: ESTIMATED_WEIGHT,
				payload: value,
			});
		},
		handleChangeNoOfComponents(value) {
			dispatch({
				type: NUMBER_OF_COMPONENTS,
				payload: value,
			});
		},
		handleOnDrop(data) {
			let wbsDataArr = [];
			data.forEach((a, i) => {
				console.log("index", i, a);
				if (i > 0 && a.data.length > 1) {
					let start = 0;
					let wbsSampleObject = {
						componentName: a.data[start] ? a.data[start] : "",
						compTypeName: a.data[start + 1] ? a.data[start + 1] : "",
						compId: a.data[start + 2] ? a.data[start + 2] : "",
						componentNo: a.data[start + 3] ? a.data[start + 3] : "",
						isGroup: a.data[start + 4] ? a.data[start + 4] : "",
						drawingNo: a.data[start + 5] ? a.data[start + 5] : "",
						leng: a.data[start + 6] ? parseFloat(a.data[start + 6]) : "",
						breath: a.data[start + 7] ? parseFloat(a.data[start + 7]) : "",
						height: a.data[start + 8] ? parseFloat(a.data[start + 8]) : "",
						thickness: a.data[start + 9] ? parseFloat(a.data[start + 9]) : "",
						width: a.data[start + 10] ? parseFloat(a.data[start + 10]) : "",
						weight: a.data[start + 11] ? parseFloat(a.data[start + 11]) : "",
						makeType: a.data[start + 12] ? a.data[start + 12] : "",
						isTag: a.data[start + 13] ? Boolean(a.data[start + 13]) : "",
					};
					wbsDataArr.push(wbsSampleObject);
				}
			});
			dispatch({
				type: ASSIGN_STRUCT_UPLOADED_DATA,
				payload: wbsDataArr,
			});
		},
		saveAssignStruct() {
			dispatch(saveAssignStruct()).then(() => {
				dispatch({ type: RESET_ASSIGN_STRUCT_FORM });
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
		removeFiles(file, index) {
			const scr = store.getState().scr;
			const tmpArr = [...scr.files];
			tmpArr.splice(index, 1);
			dispatch({
				type: ASSIGN_FILE_UPLOAD,
				payload: tmpArr,
			});
			let removeFiles = [...scr.removeFiles];
			!file.isNew && removeFiles.push(file.id);
			dispatch({
				type: ASSIGN_FILE_REMOVE,
				payload: removeFiles,
			});
		},
		handleChangeAssignStruct(value, id) {
			const as = store.getState().scr;
			let tmpArr = JSON.parse(JSON.stringify(as.structAttri));
			tmpArr.map((arr) => {
				if (arr.id === id) {
					arr.value = value;
					// console.log("test in if arr, eval",arr, e.target.value);
				}
				// console.log("test",arr)
			});
			dispatch({
				type: ON_CHANGE_ASSIGN_STRUCT,
				payload: tmpArr,
			});
		},
		clearStrcutAttri() {
			dispatch({ type: RESET_ASSIGN_STRUCT_FORM });
		},
		saveAssignComp() {
			dispatch(saveAssignComp()).then(() => {
				dispatch({ type: RESET_ASSIGN_COMP_FORM });
				dispatch({ type: RESET_ASSIGN_STRUCT_FORM });
			});
		},
		showAttributeValueModal(value) {
			dispatch({
				type: SET_SHOW_ATTRIBUTE_VALUE_MODAL,
				payload: value,
			});
		},
		setCurrentAttribute(attribute) {
			dispatch({
				type: SET_CURRENT_ATTRIBUTE,
				payload: attribute,
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

export default connect(mapStateToProps, mapDispatchToProps)(AssignStructure);
