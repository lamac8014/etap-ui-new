import { act } from 'react-dom/test-utils';
import {
  ADD_STRUCTURE_FAMILY_TYPE,
  CHANGE_ADD_STRUCTURE_FAMILY_MODAL_STATUS,
  GET_STRUCTURE_FAMILY_TYPE,
  LIST_STRUCTURE_FAMILY,
  RESET_CREATE_STRUCTURE_FAMILY_FORM,
  RESET_CREATE_STRUCTURE_FAMILY_TYPE_FORM,
  SET_STRUCTURE_FAMILY_EDIT_MODE,
  SHOW_ADD_STRUCTURE_FAMILY_MSG,
  STRUCTURE_FAMILY_STATUS,
  STRUCTURE_FAMILY_TYPE,
  UPDATE_STRUCTURE_FAMILY_TYPE,
  STRUCTURE_FAMILY_TYPE_STATUS
} from '../actions/types';

const initialState = {
  structureFamilyType: '',
  structureFamilyTypeList: '',
  isAddStructureFamilyMsg: false,
  structureFamilyTypeID: '',
  structureFamilyTypeStatus: '',
  isEditMode: false,
  isLoading: false

};

export default function (state = initialState, action) {
  switch (action.type) {
    case STRUCTURE_FAMILY_TYPE:
      return {
        ...state,
        structureFamilyType: action.payload,
      };
    case STRUCTURE_FAMILY_TYPE_STATUS:
      return {
        ...state,
        structureFamilyTypeStatus: action.payload
      }

    case RESET_CREATE_STRUCTURE_FAMILY_FORM:
      return {
        ...state,
        structureFamilyType: '',
        structureFamilyTypeStatus: '',
        structureFamilyTypeID: '',
        isLoading: false,
        isEditMode: false
      };

    case SHOW_ADD_STRUCTURE_FAMILY_MSG:
      return {
        ...state,
        showAddStructureFamilyMessage: true
      }
    case CHANGE_ADD_STRUCTURE_FAMILY_MODAL_STATUS:
      return {
        ...state,
        showAddStructureFamilyModal: action.payload
      }

    case SHOW_ADD_STRUCTURE_FAMILY_MSG:
      return {
        ...state,
        showAddStructureFamilyMessage: true
      }
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
        structureFamilyTypeList: action.payload.data,
      };
    case `${ADD_STRUCTURE_FAMILY_TYPE}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${ADD_STRUCTURE_FAMILY_TYPE}_REJECTED`:
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
    case `${ADD_STRUCTURE_FAMILY_TYPE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: action.payload.data.message,
      };
    case `${UPDATE_STRUCTURE_FAMILY_TYPE}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${UPDATE_STRUCTURE_FAMILY_TYPE}_REJECTED`:
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
    case `${UPDATE_STRUCTURE_FAMILY_TYPE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: action.payload.data.message,
      };
    case SET_STRUCTURE_FAMILY_EDIT_MODE:
      return {
        ...state,
        isEditMode: action.payload,
      };
    case `${GET_STRUCTURE_FAMILY_TYPE}_FULFILLED`:
      return {
        ...state,
        structureFamilyTypeID: action.payload.data.id,
        structureFamilyType: action.payload.data.name,
        structureFamilyTypeStatus: action.payload.data.isActive
      }
    case `${GET_STRUCTURE_FAMILY_TYPE}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${GET_STRUCTURE_FAMILY_TYPE}_REJECTED`:
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
    default:
      return state;
  }
}
