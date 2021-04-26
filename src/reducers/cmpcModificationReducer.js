import {
	GET_STRUCTURE_TABLE_DATA,
	GET_COMPONENT_DATA,
	SHOW_EDIT_COMPONENT_MODAL,
	RESET_EDIT_COMPONENT_FORM,
	MODIFY_BREADTH,
	MODIFY_HEIGHT,
	MODIFY_LENGTH,
	MODIFY_WEIGHT,
	MODIFY_THICKNESS,
	SET_CURRENT_COMP,
	SET_STRUCT_CODE,
	SET_STRUCT_NAME,
	MODIFY_COMPONENTS,
	SET_PROJECT_NAME,
	SET_ADD_PLATE,
	CMPC_TRANSFORM_COMPONENT_DATA,
	SET_IDS,
} from "../actions/types";

const initialState = {
	structureData: [],
	componentData: [],
	currentComp: {},
	isError: false,
	isSuccess: false,
	message: "",
	showEditComponentModal: false,
	structName: "",
	structCode: "",
	projectName: "",
	modifiedData: {
		length: "",
		breadth: "",
		thickness: "",
		height: "",
		weight: "",
	},
	addPlate: "",
	projStrId: 0,
	dispReqId: 0,
};

const reducerFn = (state = initialState, action) => {
	switch (action.type) {
		case `${GET_STRUCTURE_TABLE_DATA}_PENDING`:
			return { ...state, isLoading: true };
		case `${GET_STRUCTURE_TABLE_DATA}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.data.message,
			};
		case `${GET_STRUCTURE_TABLE_DATA}_FULFILLED`:
			let modificationData = action.payload.data.filter((item) => {
				return item.isModified === true;
			});
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: true,
				structureData: modificationData,
			};
		case `${GET_COMPONENT_DATA}_PENDING`:
			return { ...state, isLoading: true };
		case `${GET_COMPONENT_DATA}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.data.message,
			};
		case `${GET_COMPONENT_DATA}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: true,
				componentData: action.payload.data,
			};
		case CMPC_TRANSFORM_COMPONENT_DATA:
			return { ...state, componentData: action.payload };
		case `${MODIFY_COMPONENTS}_PENDING`:
			return { ...state, isLoading: true };
		case `${MODIFY_COMPONENTS}_REJECTED`:
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
				message: action.payload.data.message,
			};
		case `${MODIFY_COMPONENTS}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: true,
				message: action.payload.data.message,
			};
		case SHOW_EDIT_COMPONENT_MODAL:
			return { ...state, showEditComponentModal: action.payload };
		case RESET_EDIT_COMPONENT_FORM:
			return {
				...state,
				modifiedData: {
					length: "",
					breadth: "",
					thickness: "",
					weight: "",
					height: "",
				},
			};
		case SET_CURRENT_COMP:
			return { ...state, currentComp: action.payload };
		case SET_STRUCT_NAME:
			return { ...state, structName: action.payload };
		case SET_STRUCT_CODE:
			return { ...state, structCode: action.payload };
		case SET_PROJECT_NAME:
			return { ...state, projectName: action.payload };
		case MODIFY_BREADTH:
		case MODIFY_HEIGHT:
		case MODIFY_WEIGHT:
		case MODIFY_LENGTH:
		case MODIFY_THICKNESS:
			return { ...state, modifiedData: action.payload };
		case SET_ADD_PLATE:
			return { ...state, addPlate: action.payload };
		case SET_IDS:
			return {
				...state,
				projStrId: action.payload.projStrId,
				dispReqId: action.payload.dispReqId,
			};
		default:
			return state;
	}
};

export default reducerFn;
