import {
  STRUCTURE_NAME,
  LIST_STRUCTURE,
  RESET_STRUCTURE_FORM,
  STRUCTURE_FAMILY,
  NUMBER_OF_ATTRIBUTES,
  CHANGE_ADD_STRUCTURE_MODAL_STATUS,
  STRUCTURE_ATTRIBUTE_LIST,
  ADD_STRUCTURE,
  GET_STRUCTURE_DATA,
  STRUCTURE_EDIT_PAGE,
  UPDATE_STRUCTURE,
  LIST_STRUCTURE_FAMILY,
} from "../actions/types";

import { getSelectedValue } from "../utils/dataTransformer";
const initialState = {
  structureName: "",
  structureFamily: "",
  noOfAttributes: "",
  isEdit: false,
  attributeList: [],
  structureFamilyList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STRUCTURE_NAME:
      return {
        ...state,
        structureName: action.payload,
      };
    case STRUCTURE_FAMILY:
      return {
        ...state,
        structureFamily: action.payload,
      };
    case NUMBER_OF_ATTRIBUTES:
      return {
        ...state,
        noOfAttributes: action.payload,
      };
    case STRUCTURE_EDIT_PAGE:
      return {
        ...state,
        isEdit: action.payload,
      };
    case RESET_STRUCTURE_FORM:
      return {
        ...state,
        structureName: "",
        structureFamily: "",
        attributeList: [],
        id: "",
      };

    case CHANGE_ADD_STRUCTURE_MODAL_STATUS:
      return {
        ...state,
        showAddStructureModal: action.payload,
      };
    case STRUCTURE_ATTRIBUTE_LIST:
      return {
        ...state,
        attributeList: action.payload,
      };
    case `${LIST_STRUCTURE}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${LIST_STRUCTURE}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${LIST_STRUCTURE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        structureList: action.payload.data,
      };
    case `${LIST_STRUCTURE_FAMILY}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${LIST_STRUCTURE_FAMILY}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${LIST_STRUCTURE_FAMILY}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        structureFamilyList: action.payload.data,
      };
    case `${ADD_STRUCTURE}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${ADD_STRUCTURE}_REJECTED`:
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
    case `${ADD_STRUCTURE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: action.payload.data.message,
      };
    case `${GET_STRUCTURE_DATA}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${GET_STRUCTURE_DATA}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${GET_STRUCTURE_DATA}_FULFILLED`:
      let parsedAttribute = JSON.parse(action.payload.data.structureAttributes);
      while (typeof parsedAttribute === "string") {
        parsedAttribute = JSON.parse(parsedAttribute);
      }
      console.log(typeof parsedAttribute);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        id: action.payload.data.id,
        structureName: action.payload.data.name,
        isActive: action.payload.data.isActive,
        structureFamily: getSelectedValue(
          state.structureFamilyList,
          action.payload.data.structureTypeId
        ),
        attributeList: parsedAttribute,
      };
    case `${UPDATE_STRUCTURE}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${UPDATE_STRUCTURE}_REJECTED`:
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
    case `${UPDATE_STRUCTURE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: action.payload.data.message,
      };
    default:
      return state;
  }
}
