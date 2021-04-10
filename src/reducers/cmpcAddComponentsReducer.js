import {
  GET_DISPATCH_STRUCTURE_DATA,
  GET_ASSIGNED_STRUCTURE_DETAILS,
  SET_EST_WEIGHT,
  SET_NO_OF_COMPONENTS,
  SET_FILES,
  REMOVE_FILES,
  CMPC_SET_UPLOAD_DATA,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  dispatchStructure: [],
  assignedStructureDetails: {},
  files: [],
  removeFiles: [],
  uploadData: [],
  noOfComp: 0,
  estWeight: 0,
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
        message: action.payload.data.message,
      };
    case `${GET_ASSIGNED_STRUCTURE_DETAILS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        assignedStructureDetails: action.payload.data,
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
    default:
      return state;
  }
};
