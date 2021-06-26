import {
  SET_FABRICATION_COST,
  SET_FABCOST_MODAL_FLAG,
  FABCOST_VIEWMORE_FLAG,
  SET_UPLOAD_DATA,
  HANDLE_WO_UPLOAD,
  RESET_FABCOST_MODAL,
  GET_AS_BUILD_STRUCTURE_COST,
  ADD_STRUCTURE_COST,
  GET_COMPONENT_DETAILS_COST
} from "../actions/types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  viewMoreFlag: false,
  fabCostModalflag: false,
  message: "",
  uploadData: [],
  woFile: {},
  fabCost: "",
  buildCost: [],
  compDetails: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FABCOST_MODAL_FLAG:
      return { ...state, fabCostModalflag: action.payload };
    case FABCOST_VIEWMORE_FLAG:
      return { ...state, viewMoreFlag: action.payload };
    case SET_UPLOAD_DATA:
      return { ...state, uploadData: action.payload };
    case SET_FABRICATION_COST:
      return { ...state, fabCost: action.payload };
    case HANDLE_WO_UPLOAD:
      return { ...state, woFile: action.payload };
    case RESET_FABCOST_MODAL:
      return { ...state, fabCost: "", woFile: {} };
    case `${GET_AS_BUILD_STRUCTURE_COST}_PENDING`:
      return {
        ...state,
        isloading: true
      };
    case `${GET_AS_BUILD_STRUCTURE_COST}_REJECTED`:
      return {
        ...state,
        isloading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    case `${GET_AS_BUILD_STRUCTURE_COST}_FULFILLED`:
      return {
        ...state,
        isloading: false,
        isError: false,
        buildCost: action.payload.data,
      };
    case `${ADD_STRUCTURE_COST}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${ADD_STRUCTURE_COST}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.response.data.message,
      };
    case `${ADD_STRUCTURE_COST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: action.payload.data,
      };
    case `${GET_COMPONENT_DETAILS_COST}_PENDING`:
      return {
        ...state,
        isloading: true
      };
    case `${GET_COMPONENT_DETAILS_COST}_REJECTED`:
      return {
        ...state,
        isloading: false,
        isError: true,
        isSuccess:false,
        message: action.payload.response.data.message,
      };
    case `${GET_COMPONENT_DETAILS_COST}_FULFILLED`:
      return {
        ...state,
        isloading: false,
        isError: false,
        compDetails: action.payload.data,
      };
    default:
      return state;
  }
};
