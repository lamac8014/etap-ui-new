import {
	SURPLUS_DATE,
	SURPLUS_UPLOAD,
	SURPLUS_LIST_STRUCTURE_PROJECT_DATA,
	ADD_SURPLUS,
	RESET_SURPLUS_FORM,
	SURPLUS_APPROVAL_LIST,
	GET_SURPLUS_DATA_SINGLE,
	VIEW_SURPLUS_MORE_PAGE,
	SURPLUS_SET_EDIT_MODAL_FLAG,
	SURPLUS_SET_ACTION,
	SURPLUS_VIEW_MODAL,
	SET_VIEW_MODE,
} from "../actions/types";
import { getUserDetails } from "../utils/auth";

const initialState = {
	isLoading: false,
	isError: false,
	isSuccess: false,
	showViewMore: false,
	showEditModal: false,
	dateFrom: "",
	upload: [],
	currentFile: {},
	structureList: [],
	surplusViewMore: {},
	surplusList: [],
	isSurplusChecked: false,
	isScrapChecked: false,
	isEditMode:false,
	surplusViewModal:[]
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SURPLUS_DATE:
			return {
				...state,
				dateFrom: action.payload,
			};
		case SURPLUS_UPLOAD:
			return {
				...state,
				upload: action.payload.docs,
				currentFile: action.payload.file,
			};
		case `${SURPLUS_LIST_STRUCTURE_PROJECT_DATA}_PENDING`:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case `${SURPLUS_LIST_STRUCTURE_PROJECT_DATA}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
			};
		case `${SURPLUS_LIST_STRUCTURE_PROJECT_DATA}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: false,
				structureList: action.payload.data,
			};
		case `${SURPLUS_APPROVAL_LIST}_PENDING`:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case `${SURPLUS_APPROVAL_LIST}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
			};
		case `${SURPLUS_APPROVAL_LIST}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: false,
				surplusList: action.payload.data,
			};

		case `${ADD_SURPLUS}_PENDING`:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case `${ADD_SURPLUS}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message:
					action.payload.response && action.payload.response.data
						? action.payload.response.data.message
						: "Please check your form data and retry",
			};
		case `${ADD_SURPLUS}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: false,
				message: action.payload.data.message,
			};
		case RESET_SURPLUS_FORM:
			return {
				...state,
				upload: [],
				isSurplusChecked: false,
				isScrapChecked: false,
				dateFrom: "",
				currentFile: {},
			};
		case GET_SURPLUS_DATA_SINGLE:
			return {
				...state,
				surplusViewMore: action.payload,
			};
		case VIEW_SURPLUS_MORE_PAGE:
			return {
				...state,
				showViewMore: action.payload,
			};
		case SURPLUS_SET_EDIT_MODAL_FLAG:
			return { ...state, showEditModal: action.payload };
		case SURPLUS_SET_ACTION:
			return {
				...state,
				isSurplusChecked: action.payload.surplus,
				isScrapChecked: action.payload.scrap,
			};
		case SURPLUS_VIEW_MODAL:
				return {
				  ...state,
				  showSurplusViewModal: action.payload,
				}
		
		case SET_VIEW_MODE:
				return {
				  ...state,
				  isEditMode: action.payload,
				}
		default:
			return state;
	}
};

