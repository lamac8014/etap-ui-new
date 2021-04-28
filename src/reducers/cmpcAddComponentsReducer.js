import {
	GET_DISPATCH_STRUCTURE_DATA,
	GET_ASSIGNED_STRUCTURE_DETAILS,
	SET_EST_WEIGHT,
	SET_NO_OF_COMPONENTS,
	SET_FILES,
	REMOVE_FILES,
	CMPC_SET_UPLOAD_DATA,
	UPDATE_STRUCTURE_MODIFY,
	SET_DISP_STRUCT_ID,
	UPDATE_DISPATCH_STRUCTURE,
	SET_PROJ_STRUCT_ID,
	SET_DR_NUMBER,
} from "../actions/types";

const initialState = {
	isLoading: false,
	isError: false,
	isSuccess: false,
	message: "",
	dispatchStructure: [],
	assignedStructureDetails: {},
	drNo: "",
	files: [],
	removeFiles: [],
	uploadData: [],
	noOfComp: 0,
	estWeight: 0,
	dispStructId: 0,
	projStructId: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case `${GET_DISPATCH_STRUCTURE_DATA}_PENDING`:
			return { ...state, isLoading: true };
		case `${GET_DISPATCH_STRUCTURE_DATA}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.data.message,
			};
		case `${GET_DISPATCH_STRUCTURE_DATA}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: true,
				dispatchStructure: action.payload.data,
			};
		case `${GET_ASSIGNED_STRUCTURE_DETAILS}_PENDING`:
			return { ...state, isLoading: true };
		case `${GET_ASSIGNED_STRUCTURE_DETAILS}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.response.data.message,
			};
		case `${GET_ASSIGNED_STRUCTURE_DETAILS}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: true,
				assignedStructureDetails: action.payload.data,
				uploadData: action.payload.data.components,
				noOfComp: action.payload.data.componentsCount,
				estWeight: action.payload.data.estimatedWeight,
				drNo: action.payload.data.drawingNo,
				files: action.payload.structureDocs ? action.payload.structureDocs : [],
			};
		case `${UPDATE_STRUCTURE_MODIFY}_PENDING`:
			return { ...state, isLoading: true };
		case `${UPDATE_STRUCTURE_MODIFY}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.response.data.message,
			};
		case `${UPDATE_STRUCTURE_MODIFY}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: true,
				message: action.payload.data.message,
			};
		case `${UPDATE_DISPATCH_STRUCTURE}_PENDING`:
			return { ...state, isLoading: true };
		case `${UPDATE_DISPATCH_STRUCTURE}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.response.data.message,
			};
		case `${UPDATE_DISPATCH_STRUCTURE}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: true,
				message: action.payload.data.message,
			};
		case SET_NO_OF_COMPONENTS:
			return {
				...state,
				noOfComp: action.payload,
			};
		case SET_EST_WEIGHT:
			return {
				...state,
				estWeight: action.payload,
			};
		case SET_FILES:
			return {
				...state,
				files: action.payload,
			};
		case SET_DR_NUMBER:
			return { ...state, drNo: action.payload };
		case REMOVE_FILES:
			return {
				...state,
				removeFiles: action.payload,
			};
		case CMPC_SET_UPLOAD_DATA:
			return {
				...state,
				uploadData: action.payload,
			};
		case SET_DISP_STRUCT_ID:
			return { ...state, dispStructId: action.payload };
		case SET_PROJ_STRUCT_ID:
			return { ...state, projStructId: action.payload };
		default:
			return state;
	}
};
