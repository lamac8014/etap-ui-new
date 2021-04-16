import React from "react";
import {
	LIST_CMPC_DETAILS,
	CHANGE_CMPC_MORE_MODAL_STATUS,
	SET_CMPC_EDIT_MODE,
	TRANSFORM_SITE_REQUIREMENTS,
	CMPC_SET_SELECTED_ITEMS,
	SET_MODIFICATION,
	TRANSFORM_STRUCTURE_DATA,
	CMPC_UPDATE_STRUCTURE,
	RESET_MESSAGE,
} from "../actions/types";

const initialState = {
	isAddComponentMsg: false,
	isEditMode: false,
	isLoading: false,
	isSuccess: false,
	isError: false,
	message: "",
	cmpcList: [],
	transformedCmpcList: [],
	selectedItems: [],
	isModification: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case `${LIST_CMPC_DETAILS}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${LIST_CMPC_DETAILS}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.response.data.message,
			};
		case `${LIST_CMPC_DETAILS}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: true,
				cmpcList: action.payload.data,
			};
		case `${CMPC_UPDATE_STRUCTURE}_PENDING`:
			return {
				...state,
				isLoading: true,
			};
		case `${CMPC_UPDATE_STRUCTURE}_REJECTED`:
			return {
				...state,

				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.response.data.message,
			};
		case `${CMPC_UPDATE_STRUCTURE}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: true,
				message: action.payload.data.message,
			};
		case CHANGE_CMPC_MORE_MODAL_STATUS:
			return {
				...state,
				showCmpcViewMoreModel: action.payload,
			};

		case SET_CMPC_EDIT_MODE:
			return {
				...state,
				isEditMode: action.payload,
			};
		case CMPC_SET_SELECTED_ITEMS:
			return {
				...state,
				selectedItems: action.payload,
				transformedCmpcList: action.cmpcList,
			};
		case SET_MODIFICATION:
			return { ...state, isModification: action.payload };
		case TRANSFORM_STRUCTURE_DATA:
			return { ...state, transformedCmpcList: action.payload };
		case RESET_MESSAGE:
			return { ...state, isError: false, isSuccess: false, message: "" };
		default:
			return state;
	}
}
