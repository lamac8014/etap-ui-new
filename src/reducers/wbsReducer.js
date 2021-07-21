import { act } from 'react-dom/test-utils';
import {
  WORK_BREAK_PROJECT_NAME,
  RESET_WBS_FORM,
  WBS_UPLOADED_DATA,
  LIST_PROJECT_CODES,
  SAVE_WBS_DATA,
  LIST_WBS_DATA,
  SINGLE_WBS_DATA
} from '../actions/types';

const initialState = {
  componentType: '',
  isAddComponentMsg: false,
  componentTypeID: '',
  componentTypeStatus: '',
  listProjectCodes: [],
  wbsSingle: []

};

export default function (state = initialState, action) {
  switch (action.type) {
    case WORK_BREAK_PROJECT_NAME:
      return {
        ...state,
        wbsProjectName: action.payload,
      };
    case WBS_UPLOADED_DATA:
      return {
        ...state,
        wbsUploadedData: action.payload
      }

    case RESET_WBS_FORM:
      return {
        ...state,
        wbsProjectName: '',
        wbsUploadedData: '',
        isLoading: false
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
    case `${SAVE_WBS_DATA}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${SAVE_WBS_DATA}_REJECTED`:
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
    case `${SAVE_WBS_DATA}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: action.payload.data.message,
      };
    case `${LIST_WBS_DATA}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${LIST_WBS_DATA}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${LIST_WBS_DATA}_FULFILLED`:
      const projectname = state.wbsProjectName;
      const singleProjectData = action.payload.data.filter(ele => ele.projectId === projectname.value)
      console.log(projectname)
      console.log(singleProjectData)
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        wbsUploadedData: singleProjectData,
        wbsList: action.payload.data,
      };
    case `${SINGLE_WBS_DATA}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${SINGLE_WBS_DATA}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${SINGLE_WBS_DATA}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        wbsUploadedData: [action.payload.data],
      };

    default:
      return state;
  }
}
