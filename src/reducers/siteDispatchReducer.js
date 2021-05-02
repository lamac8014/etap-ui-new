import {
	GET_VENDOR_DETAILS,
	GET_COMPONENT_DETAILS_VENDOR,
	SET_STRUCTURE_CODE,
	SET_STRUCTURE_NAME_VENDOR,
	SET_COMPONENT_COUNT,
	SET_SUB_CONT_ID,
	SET_DISP_STR_ID,
	UPLOAD_WO_FILE,
	SET_DISPATCH_DATE,
	UPDATE_SITE_DISPATCH,
	SET_SELECTED_COMPONENTS,
	RESET_UPDATE_SITE_DISPATCH_MODAL,
	TRANSFORM_COMPONENT_DATA,
	SET_SHOW_VIEW_MORE,
} from "../actions/types";
const initialState = {
	isLoading: false,
	isError: false,
	isSuccess: false,
	showViewMore: false,
	message: "",
	siteDispatchDetails: [],
	componentData: [],
	selectedComponents: [],
	dispStrId: 0,
	subContId: 0,
	structCode: "",
	structName: "",
	totalCompCount: "",
	compCount: "",
	dispatchDate: "",
	woFile: null,
	currentStructure: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case `${GET_VENDOR_DETAILS}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${GET_VENDOR_DETAILS}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.error,
			};
		case `${GET_VENDOR_DETAILS}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				siteDispatchDetails: action.payload.data,
			};
		case `${GET_COMPONENT_DETAILS_VENDOR}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${GET_COMPONENT_DETAILS_VENDOR}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.error,
			};
		case `${GET_COMPONENT_DETAILS_VENDOR}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				componentData: action.payload.data,
				compCount: action.payload.data.length,
			};
		case SET_STRUCTURE_CODE:
			return { ...state, structCode: action.payload };
		case SET_STRUCTURE_NAME_VENDOR:
			return { ...state, structName: action.payload };
		case SET_DISP_STR_ID:
			return { ...state, dispStrId: action.payload };
		case SET_SUB_CONT_ID:
			return { ...state, subContId: action.payload };
		case SET_COMPONENT_COUNT:
			return { ...state, totalCompCount: action.payload };
		case SET_DISPATCH_DATE:
			return { ...state, dispatchDate: action.payload };
		case UPLOAD_WO_FILE:
			return { ...state, woFile: action.payload };
		case SET_SELECTED_COMPONENTS:
			return { ...state, selectedComponents: action.payload };
		case TRANSFORM_COMPONENT_DATA:
			return { ...state, componentData: action.payload };
		case `${UPDATE_SITE_DISPATCH}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${UPDATE_SITE_DISPATCH}_REJECTED`:
			const errorObject = action.payload.response.data.errors;
			const error = Object.keys(errorObject)[0];
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: errorObject[error][0],
			};
		case `${UPDATE_SITE_DISPATCH}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isSuccess: true,
				isError: false,
				message: action.payload.data.message,
			};
		case RESET_UPDATE_SITE_DISPATCH_MODAL:
			return {
				...state,
				isLoading: false,
				structureName: "",
				dispatchDate: "",
				workOrderNumber: "",
				uploadedFile: null,
				activeItem: {},
				structureListCode: [],
			};
		case SET_SHOW_VIEW_MORE:
			return {
				...state,
				showViewMore: action.payload.viewMoreFlag,
				currentStructure: action.payload.currentStr,
			};
		default:
			return state;
	}
};
