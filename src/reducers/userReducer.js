import {
	FIRST_NAME,
	LAST_NAME,
	EMAIL,
	PS_NO,
	USER_ROLE,
	RESET_STRUCTURE_FORM,
	PROJECT,
	BUSINESS_UNIT,
	SEGMENT,
	INDEPENDENT_COMPANY,
	LIST_USERS,
	CHANGE_ADD_USERS_MODAL_STATUS,
	SHOW_ADD_USERS_MSG,
	LIST_PROJECT_CODES,
	GET_PROJECT_DETAILS,
	GET_ROLES_LIST,
	ADD_USER,
	RESET_CREATE_USER_FORM,
	GET_USER_SINGLE,
	USER_EDIT_PAGE,
	UPDATE_USER,
	GET_VENDOR_CODE_LIST,
	USERS_SET_VENDOR_CODE,
} from "../actions/types";
import { getSelectedValue } from "../utils/dataTransformer";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	psNo: "",
	project: "",
	role: "",
	businessUnit: "",
	segment: "",
	independentCompany: "",
	usersList: [],
	showAddUsersModal: false,
	listProjectCodes: [],
	vendorCodeList: [],
	userId: "",
	vendor: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case USER_EDIT_PAGE:
			return {
				...state,
				isEdit: action.payload,
			};
		case FIRST_NAME:
			return {
				...state,
				firstName: action.payload,
			};
		case LAST_NAME:
			return {
				...state,
				lastName: action.payload,
			};
		case EMAIL:
			return {
				...state,
				email: action.payload,
			};
		case PS_NO:
			return {
				...state,
				psNo: action.payload,
			};
		case PROJECT:
			return {
				...state,
				project: action.payload,
			};
		case BUSINESS_UNIT:
			return {
				...state,
				businessUnit: action.payload,
			};
		case SEGMENT:
			return {
				...state,
				segment: action.payload,
			};
		case INDEPENDENT_COMPANY:
			return {
				...state,
				independentCompany: action.payload,
			};
		case USER_ROLE:
			return {
				...state,
				role: action.payload,
			};
		case RESET_STRUCTURE_FORM:
			return {
				...state,
				firstName: "",
				lastName: "",
				role: "",
			};
		case `${LIST_USERS}_PENDING`:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case `${LIST_USERS}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
			};
		case `${LIST_USERS}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: false,
				usersList: action.payload.data,
			};
		case `${LIST_PROJECT_CODES}_PENDING`:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case `${LIST_PROJECT_CODES}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
			};
		case `${LIST_PROJECT_CODES}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: false,
				projectCodesList: action.payload.data,
			};
		case `${GET_PROJECT_DETAILS}_PENDING`:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case `${GET_PROJECT_DETAILS}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
			};
		case `${GET_PROJECT_DETAILS}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: false,
				bu: action.payload.data.buName,
				buId: action.payload.data.buId,
				segment: action.payload.data.segmentName,
				segmentId: action.payload.data.segmentId,
				ic: action.payload.data.icName,
				icId: action.payload.data.icId,
			};
		case `${GET_ROLES_LIST}_PENDING`:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case `${GET_ROLES_LIST}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
			};
		case `${GET_ROLES_LIST}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: false,
				rolesList: action.payload.data,
			};
		case CHANGE_ADD_USERS_MODAL_STATUS:
			return {
				...state,
				showAddUsersModal: action.payload,
			};
		case `${ADD_USER}_PENDING`:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case `${ADD_USER}_REJECTED`:
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
		case `${ADD_USER}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: false,
				message: action.payload.data.message,
			};
		case `${GET_USER_SINGLE}_PENDING`:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case `${GET_USER_SINGLE}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
			};
		case `${GET_USER_SINGLE}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: false,
				firstName: action.payload.data.firstName,
				lastName: action.payload.data.lastName,
				psNo: action.payload.data.userName,
				email: action.payload.data.email,
				project: getSelectedValue(
					state.projectCodesList,
					action.payload.data.projectId
				),
				role: getSelectedValue(state.rolesList, action.payload.data.roleId),
				userId: action.payload.data.userId,
			};
		case `${GET_VENDOR_CODE_LIST}_PENDING`:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case `${GET_VENDOR_CODE_LIST}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
			};
		case `${GET_VENDOR_CODE_LIST}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: false,
				vendorCodeList: action.payload.data,
			};
		case USERS_SET_VENDOR_CODE:
			return { ...state, vendor: action.payload };
		case `${UPDATE_USER}_PENDING`:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case `${UPDATE_USER}_REJECTED`:
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
		case `${UPDATE_USER}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: false,
				message: action.payload.data.message,
			};
		case RESET_CREATE_USER_FORM:
			return {
				...state,
				firstName: "",
				lastName: "",
				psNo: "",
				email: "",
				project: "",
				icId: "",
				buId: "",
				segmentId: "",
				ic: "",
				bu: "",
				segment: "",
				role: "",
				isLoading: false,
				isEdit: false,
			};

		default:
			return state;
	}
}
