import {
  SET_SHOW_EDIT_MODAL_FLAG,
  SET_SITE_DISPATCH_DETAILS,
  SET_ACTIVE_ITEM,
  SET_STRUCTURE_LIST_CODE,
  SET_STRUCTURE_ID,
  SET_DISPATCH_DATE,
  SET_WORK_ORDER_NUMBER,
  SET_UPLOADED_FILE,
  UPDATE_SITE_DISPATCH,
  RESET_UPDATE_SITE_DISPATCH_MODAL,
} from "../actions/types";
const initialState = {
  isLoading: false,
  showEditModalFlag: false,
  isError: false,
  isSuccess: false,
  message: "",
  siteDispatchDetails: [],
  activeItem: {},
  structureListCode: [],
  structureId: 0,
  dispatchDate: "",
  wordOrderNumber: "",
  uploadedFile: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${SET_SITE_DISPATCH_DETAILS}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${SET_SITE_DISPATCH_DETAILS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.error,
      };
    case `${SET_SITE_DISPATCH_DETAILS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        siteDispatchDetails: action.payload.data,
      };

    case `${SET_STRUCTURE_LIST_CODE}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${SET_STRUCTURE_LIST_CODE}_REJECTED`:
      const errorObj = action.payload.errors;
      const errors = Object.keys(errorObj)[0];
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: errors[0],
      };
    case `${SET_STRUCTURE_LIST_CODE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        structureListCode: action.payload.data,
      };
    case SET_ACTIVE_ITEM:
      const activeItem = state.siteDispatchDetails.filter((item) => {
        return item.dispatchId === action.payload;
      })[0];
      return { ...state, activeItem: activeItem };
    case SET_SHOW_EDIT_MODAL_FLAG:
      return { ...state, showEditModalFlag: action.payload };
    case SET_STRUCTURE_ID:
      return {
        ...state,
        structureId: action.payload,
      };
    case SET_DISPATCH_DATE:
      return { ...state, dispatchDate: action.payload };
    case SET_WORK_ORDER_NUMBER:
      return { ...state, workOrderNumber: action.payload };
    case SET_UPLOADED_FILE:
      return { ...state, uploadedFile: action.payload };
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
    default:
      return state;
  }
};
