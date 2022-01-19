import {
	GET_PROJECT_LIST,
	PROJECT_NAME,
	GET_STRUCT_LIST,
	STRUCTURE_NAME,
	STRUCTURE_TYPE,
	DRAWING_NO,
	ASSIGN_STRUCT_UPLOADED_DATA,
	ESTIMATED_WEIGHT,
	NUMBER_OF_COMPONENTS,
	ASSIGN_FILE_UPLOAD,
	GET_ASSIGN_STRUCT_DETAILS_ID,
	ASSIGN_FILE_REMOVE,
	RESET_ASSIGN_STRUCT_FORM,
	SAVE_ASSIGN_STRUCT,
	ON_CHANGE_ASSIGN_STRUCT,
	SAVE_ASSIGN_COMP,
	RESET_ASSIGN_COMP_FORM,
	SET_SHOW_ATTRIBUTE_VALUE_MODAL,
	RESET_SHOW_ATTRIBUTE_VALUE_MODAL,
	SET_CURRENT_ATTRIBUTE,
	GET_STRUCTURE_CODE_LIST,
	SET_SELECTED_STRUCTURE_CODE,
	GET_ASSIGN_STRUCTURE_BY_PROJSTR_ID,
	RESET_ASSIGN_STRUCTURE_DETAILS,
	ADD_DRNO_MODAL,
	SET_ADD_MODE,
} from "../actions/types";

import {
	transformDocs,
	transformAttri,
	getAssignExcelHeaders,
} from "../pages/assignStructure/utils";

const initialState = {
	projList: [],
	structList: [],
	projName: {},
	structName: {},
	structFamily: "",
	drawingNum: "",
	uploadData: [],
	estimatedWeight: "",
	noOfComponents: "",
	files: [],
	removeFiles: [],
	structAttri: [],
	strcutureType: "",
	ic: "",
	bu: "",
	components: [],
	currentAttribute: {},
	fileInput: "",
	showAttributeValueModal: false,
	structureCodeList: [],
	structureCode: {},
	showAddModal:false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case `${GET_PROJECT_LIST}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${GET_PROJECT_LIST}_REJECTED`:
			return {
				...state,
				isLoading: false,
			};
		case `${GET_PROJECT_LIST}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				projList: action.payload.data,
			};
		case `${GET_STRUCTURE_CODE_LIST}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${GET_STRUCTURE_CODE_LIST}_REJECTED`:
			return {
				...state,
				isLoading: false,
			};
		case `${GET_STRUCTURE_CODE_LIST}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				structureCodeList: action.payload.data,
			};
		case SET_SELECTED_STRUCTURE_CODE:
			return { ...state, structureCode: action.payload };
		case PROJECT_NAME:
			return {
				...state,
				projName: action.payload,
			};
		case `${GET_STRUCT_LIST}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${GET_STRUCT_LIST}_REJECTED`:
			return {
				...state,
				isLoading: false,
			};
		case `${GET_STRUCT_LIST}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				structList: action.payload.data,
			};
		case STRUCTURE_NAME:
			return {
				...state,
				structName: action.payload,
			};
		case STRUCTURE_TYPE:
			return {
				...state,
				structFamily: action.payload,
			};
		case DRAWING_NO:
			return {
				...state,
				drawingNum: action.payload,
			};
		case ASSIGN_STRUCT_UPLOADED_DATA:
			return {
				...state,
				uploadData: action.payload,
			};
		case ESTIMATED_WEIGHT:
			return {
				...state,
				estimatedWeight: action.payload,
			};
		case NUMBER_OF_COMPONENTS:
			return {
				...state,
				noOfComponents: action.payload,
			};
		case ASSIGN_FILE_UPLOAD:
			return {
				...state,
				files: action.payload,
			};
		case `${GET_ASSIGN_STRUCT_DETAILS_ID}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${GET_ASSIGN_STRUCT_DETAILS_ID}_REJECTED`:
			return {
				...state,
				isLoading: false,
			};
		case `${GET_ASSIGN_STRUCT_DETAILS_ID}_FULFILLED`:
			const scr = action.payload.data;
			return {
				...state,
				isLoading: false,
				ic: scr.icName,
				bu: scr.buName,
				drawingNum: "",
				strcutureType:
					scr.strcutureTypeName !== null ? scr.strcutureTypeName : "",
				estimatedWeight: 0,
				structureCode: scr.structureCode !== null ? scr.structureCode : {},
				structAttri: transformAttri(JSON.parse(scr.structureAttributes)),
				// files: transformDocs(scr.structureDocs),
				uploadData: [],
				noOfComponents: 0,
			};
		case `${GET_ASSIGN_STRUCTURE_BY_PROJSTR_ID}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${GET_ASSIGN_STRUCTURE_BY_PROJSTR_ID}_REJECTED`:
			return {
				...state,
				isLoading: false,
			};
		case `${GET_ASSIGN_STRUCTURE_BY_PROJSTR_ID}_FULFILLED`:
			const data = action.payload.data;
			return {
				...state,
				isLoading: false,
				ic: data.icName,
				bu: data.buName,
				drawingNum: data.drawingNo,
				strcutureType:
					data.strcutureTypeName !== null ? data.strcutureTypeName : "",
				estimatedWeight: data.estimatedWeight ? data.estimatedWeight : "",
				// structureCode: data.structureCode !== null ? data.structureCode : "",
				structAttri: transformAttri(JSON.parse(data.structureAttributes), true),
				files: transformDocs(data.structureDocs),
				uploadData: data.components,
				noOfComponents: data.componentsCount,
			};
		case RESET_ASSIGN_STRUCTURE_DETAILS:
			return {
				...state,
				drawingNum: "",
				estimatedWeight: 0,
				structAttri: transformAttri(action.payload),
				files: [],
				uploadData: [],
				noOfComponents: 0,
			};
		case ASSIGN_FILE_REMOVE:
			return {
				...state,
				removeFiles: action.payload,
			};
		case RESET_ASSIGN_STRUCT_FORM:
			return {
				...state,
				isLoading: false,
				drawingNum: "",
				estimatedWeight: "",
				structAttri: [],
				files: [],
				strcutureType: "",
				structureCode: {},
				removeFiles: [],
				fileInput: null,
				ic: "",
				bu: "",
				noOfComponents: "",
			};
		case RESET_ASSIGN_COMP_FORM:
			return {
				...state,
				ic: "",
				bu: "",
				projName: {},
				structName: {},
				uploadData: [],
			};
		case `${SAVE_ASSIGN_STRUCT}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${SAVE_ASSIGN_STRUCT}_REJECTED`:
			return {
				...state,
				isLoading: false,
			};
		case `${SAVE_ASSIGN_STRUCT}_FULFILLED`:
			return {
				...state,
				isLoading: false,
			};
		case `${SAVE_ASSIGN_COMP}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${SAVE_ASSIGN_COMP}_REJECTED`:
			return {
				...state,
				isLoading: false,
			};
		case `${SAVE_ASSIGN_COMP}_FULFILLED`:
			return {
				...state,
				isLoading: false,
			};
		case ON_CHANGE_ASSIGN_STRUCT:
			return {
				...state,
				structAttri: action.payload,
			};
		case SET_SHOW_ATTRIBUTE_VALUE_MODAL:
			return { ...state, showAttributeValueModal: action.payload };
		case SET_CURRENT_ATTRIBUTE:
			return { ...state, currentAttribute: action.payload };
		case ADD_DRNO_MODAL:
			return {
				...state,
				showAddModal: action.payload,
			}

		case SET_ADD_MODE:
			return {
				...state,
				isEditMode: action.payload,
			}
		default:
			return state;
	}
}
