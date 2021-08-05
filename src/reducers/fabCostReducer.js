import {
  GET_FABRICATION_STRUCTURE,
  GET_FABRICATION_COST,
  TRANSFORM_FABRICATION_STRUCTURE,
  FAB_MORE_MODAL,
  SET_COST,
  ADD_COMPONENT_COST,
  SET_CURRENT_FABCOST_STRUCTURE,
  RESET_FBCOST_MODAL,
  SET_PARAMS_DATA,
  GET_FABCOST_COMPONENT,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  showFabEditModal: false,
  message: "",
  cost: "",
  fabricationCost: [],
  componentsList: [],
  fabricationComponentCost: [],
  currentStructure: {},
  dcNo: "",
  structureName: "",
  structureCode: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_FABRICATION_STRUCTURE}_PENDING`:
      return {
        ...state,
        isloading: true,
      };
    case `${GET_FABRICATION_STRUCTURE}_REJECTED`:
      return {
        ...state,
        isloading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    case `${GET_FABRICATION_STRUCTURE}_FULFILLED`:
      return {
        ...state,
        isloading: false,
        isError: false,
        fabricationCost: action.payload.data,
      };
    case `${GET_FABCOST_COMPONENT}_PENDING`:
      return {
        ...state,
        isloading: true,
      };
    case `${GET_FABCOST_COMPONENT}_REJECTED`:
      return {
        ...state,
        isloading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    case `${GET_FABCOST_COMPONENT}_FULFILLED`:
      return {
        ...state,
        isloading: false,
        isError: false,
        componentsList: action.payload.data.components,
      };
    case `${ADD_COMPONENT_COST}_PENDING`:
      return {
        ...state,
        isloading: true,
      };
    case `${ADD_COMPONENT_COST}_REJECTED`:
      return {
        ...state,
        isloading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    case `${ADD_COMPONENT_COST}_FULFILLED`:
      return {
        ...state,
        isloading: false,
        isError: false,
        message: action.payload.data.jmessage,
      };
    case TRANSFORM_FABRICATION_STRUCTURE:
      return { ...state, fabricationCost: action.payload };
    case `${GET_FABRICATION_COST}_PENDING`:
      return {
        ...state,
        isloading: true,
      };
    case `${GET_FABRICATION_COST}_REJECTED`:
      return {
        ...state,
        isloading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    case `${GET_FABRICATION_COST}_FULFILLED`:
      return {
        ...state,
        isloading: false,
        isError: false,
        fabricationComponentCost: action.payload.data,
      };
    case FAB_MORE_MODAL:
      return { ...state, showFabEditModal: action.payload };
    case SET_COST:
      return { ...state, cost: action.payload };
    case SET_CURRENT_FABCOST_STRUCTURE:
      return { ...state, currentStructure: action.payload };
    case RESET_FBCOST_MODAL:
      return { ...state, currentStructure: {}, cost: "" };
    case SET_PARAMS_DATA:
      return {
        ...state,
        dcNo: action.payload.dcNo,
        structureName: action.payload.strName,
        structureCode: action.payload.strCode,
      };
    default:
      return state;
  }
};
