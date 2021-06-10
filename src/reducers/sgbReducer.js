import {
  GET_SGB_DATA,
  SET_SBG_NAME,
  SET_EDIT_MODE,
  SHOW_ADD_SBG_MODAL,
  RESET_SBG_FORM,
  ADD_SBG_DATA,
  SET_STATUS,
  UPDATE_SBG_DATA,
  GET_SINGLE_SBG,
} from "../actions/types";

const intialState = {
  sbgData: [],
  isEditMode: false,
  showModal: false,
  isError: false,
  sbgId: 0,
  message: "",
  sbgName: "",
  status: "",
};
const reducerFn = (state = intialState, action) => {
  switch (action.type) {
    case `${GET_SGB_DATA}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_SGB_DATA}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.message,
      };
    case `${GET_SGB_DATA}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        sbgData: action.payload.data,
      };
    case `${ADD_SBG_DATA}_PENDING`:
      return { ...state, isLoading: true };
    case `${ADD_SBG_DATA}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.message,
      };
    case `${ADD_SBG_DATA}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    case `${GET_SINGLE_SBG}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_SINGLE_SBG}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.message,
      };
    case `${GET_SINGLE_SBG}_FULFILLED`:
      let status = action.payload.data.isActive ? "Active" : "InActive";
      return {
        ...state,
        isLoading: false,
        isError: false,
        sbgId: action.payload.data.id,
        sbgName: action.payload.data.name,
        status: { label: status, value: status },
      };
    case `${UPDATE_SBG_DATA}_PENDING`:
      return { ...state, isLoading: true };
    case `${UPDATE_SBG_DATA}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.message,
      };
    case `${UPDATE_SBG_DATA}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    case SET_SBG_NAME:
      return { ...state, sbgName: action.payload };
    case SET_STATUS:
      return { ...state, status: action.payload };
    case SET_EDIT_MODE:
      return { ...state, isEditMode: action.payload };
    case SHOW_ADD_SBG_MODAL:
      return { ...state, showModal: action.payload };
    case RESET_SBG_FORM:
      return { ...state, sbgName: "", status: "", sbgId: 0 };
    default:
      return state;
  }
};

export default reducerFn;
