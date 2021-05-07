import {
	SAVE_PHYSICAL_VERIFICATION_STRUCTURE,
	PHY_GET_PROJECT_DETAILS,
	SHOW_SAVE_MODAL,
	PHY_SET_PROJECT_NAME,
	PHY_SET_SELECTED_ITEMS,
	SET_PHYSICAL_VERIFICATION_DETAILS,
	FROM_DUE,
	TO_DUE,
	RESET_UPDATE_PHYSICAL_VERIFICATION_MODAL,
	TRANSFORM_PHYSICAL_VERIFICATION_DATA,
} from "../actions/types";
const initialState = {
	isLoading: false,
	showSaveModal: false,
	isError: false,
	isSuccess: false,
	message: "",
	physicalVerificationDetails: [],
	selectedItems: [],
	projectList: [],
	projectName: "",
	fromDue: "",
	toDue: "",
};

export default (state = initialState, action) => {
	switch (action.type) {
		case `${SET_PHYSICAL_VERIFICATION_DETAILS}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${SET_PHYSICAL_VERIFICATION_DETAILS}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.response.data.message,
			};
		case `${SET_PHYSICAL_VERIFICATION_DETAILS}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				physicalVerificationDetails: action.payload.data,
			};
		case TRANSFORM_PHYSICAL_VERIFICATION_DATA:
			return { ...state, physicalVerificationDetails: action.payload };
		case `${PHY_GET_PROJECT_DETAILS}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${PHY_GET_PROJECT_DETAILS}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.response.data.message,
			};
		case `${PHY_GET_PROJECT_DETAILS}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				projectList: action.payload.data,
			};
		case `${SAVE_PHYSICAL_VERIFICATION_STRUCTURE}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${SAVE_PHYSICAL_VERIFICATION_STRUCTURE}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.response.data.message,
			};
		case `${SAVE_PHYSICAL_VERIFICATION_STRUCTURE}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isSuccess: true,
				message: action.payload.data.message,
			};
		case PHY_SET_PROJECT_NAME:
			return {
				...state,
				projectName: action.payload,
			};
		case FROM_DUE:
			return {
				...state,
				fromDue: action.payload,
			};
		case TO_DUE:
			return {
				...state,
				toDue: action.payload,
			};

		case PHY_SET_SELECTED_ITEMS:
			return {
				...state,
				selectedItems: action.payload,
				physicalVerificationDetails: action.physicalVerificationDetails,
			};
		case SHOW_SAVE_MODAL:
			return { ...state, showSaveModal: action.payload };
		case RESET_UPDATE_PHYSICAL_VERIFICATION_MODAL:
			return {
				...state,
				isLoading: false,
				showSaveModal: false,
				isError: false,
				isSuccess: false,
				message: "",
				selectedItems: [],
				fromDue: "",
				toDue: "",
			};
		default:
			return state;
	}
};
