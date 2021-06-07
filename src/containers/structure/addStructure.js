import { connect } from "react-redux";
import AddStructure from "../../pages/structure/AddStructure";
import store from "../../store";
import {
	addAttribute,
	addStructure,
	structureList,
	updateStructure,
	structureFamilyList,
} from "../../actions/structureAction";
import {
	STRUCTURE_NAME,
	RESET_STRUCTURE_FORM,
	STRUCTURE_FAMILY,
	NUMBER_OF_ATTRIBUTES,
	CHANGE_ADD_STRUCTURE_MODAL_STATUS,
	STRUCTURE_ATTRIBUTE_LIST,
	STRUCTURE_EDIT_PAGE,
	STRUCT_STATUS,
} from "../../actions/types";

const mapDispatchToProps = (dispatch) => {
	return {
		resetStructureData() {
			dispatch({ type: RESET_STRUCTURE_FORM });
		},
		structureFamilyList() {
			dispatch(structureFamilyList());
		},
		handleChangeStructureName(value) {
			dispatch({
				type: STRUCTURE_NAME,
				payload: value,
			});
		},
		handleChangeStructureFamily(value) {
			dispatch({
				type: STRUCTURE_FAMILY,
				payload: value,
			});
		},
		handleChangeNumberOfAttributes(value) {
			dispatch({
				type: NUMBER_OF_ATTRIBUTES,
				payload: value,
			});
		},
		closeAddStructureModal() {
			dispatch({
				type: STRUCTURE_EDIT_PAGE,
				payload: false,
			});
			dispatch({
				type: CHANGE_ADD_STRUCTURE_MODAL_STATUS,
				payload: false,
			});
			dispatch({
				type: RESET_STRUCTURE_FORM,
			});
		},
		onNameChange(value, i) {
			const structure = store.getState().structure;
			const attributeList = [...structure.attributeList];
			attributeList[i].name = value;
			dispatch({
				type: STRUCTURE_ATTRIBUTE_LIST,
				payload: attributeList,
			});
		},
		onTypeOfInputChange(value, i) {
			const structure = store.getState().structure;
			const attributeList = [...structure.attributeList];
			attributeList[i].typeOfInput = { id: value, label: value };
			dispatch({
				type: STRUCTURE_ATTRIBUTE_LIST,
				payload: attributeList,
			});
		},
		onUoMChange(value, i) {
			const structure = store.getState().structure;
			const attributeList = [...structure.attributeList];
			attributeList[i].uom = value;
			dispatch({
				type: STRUCTURE_ATTRIBUTE_LIST,
				payload: attributeList,
			});
		},
		onAttributeRemove(i) {
			const structure = store.getState().structure;
			const attributeList = [...structure.attributeList];
			attributeList.splice(i, 1);
			dispatch({
				type: STRUCTURE_ATTRIBUTE_LIST,
				payload: attributeList,
			});
		},
		addAttribute() {
			dispatch(addAttribute());
		},
		addStructure() {
			dispatch(addStructure()).then(() => {
				dispatch({
					type: CHANGE_ADD_STRUCTURE_MODAL_STATUS,
					payload: false,
				});
				dispatch({
					type: RESET_STRUCTURE_FORM,
				});
				dispatch(structureList());
			});
		},
		updateStructure() {
			dispatch(updateStructure()).then(() => {
				dispatch({
					type: CHANGE_ADD_STRUCTURE_MODAL_STATUS,
					payload: false,
				});
				dispatch({
					type: RESET_STRUCTURE_FORM,
				});
				dispatch(structureList());
			});
		},
		handleStructStatus(value) {
			dispatch({
			  type:STRUCT_STATUS,
			  payload:value,
			});
		},
	};
};

const mapStateToProps = (state) => {
	const structure = store.getState().structure;
	return {
		structure,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStructure);
