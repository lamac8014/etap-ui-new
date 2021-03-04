import {
  PROJECT_NAME,
  ON_CHANGE_SEGMENT,
  AREA,
  PROJECT_BUSINESS_UNIT,
  SITE_LOCATION,
  PROJECT_INDEPENDENT_COMPANY,
  RESET_STRUCTURE_FORM,
  LIST_PROJECT,
  SHOW_ADD_PROJ_MODAL,
  SET_EDIT_MODE,
  GET_SINGLE_PROJ,
  GET_IC_LIST,
  GET_SEGMENT_LIST,
  GET_BU_LIST,
  RESET_PROJECT_FORM,
  SHOW_ERR_MSG,
  ADD_LOCATION_FIELD,
  JOB_CODE,
  EDRC_CODE,
} from "../actions/types";

import { getSelectedValue } from "../utils/dataTransformer";

const initialState = {
  projectName: "",
  selectedSegment: null,
  area: "",
  businessUnit: "",
  siteLocation: "",
  independentCompany: "",
  projectList: [],
  isProjMsg: "",
  isEditMode: false,
  showAddProjModal: false,
  singleProj: {},
  segmentList: [],
  buList: [],
  icList: [],
  selectedProjId: "",
  locations: [],
  jobCode: "",
  edrcCode: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PROJECT_NAME:
      return {
        ...state,
        projectName: action.payload,
      };
      case JOB_CODE:
      return {
        ...state,
        jobCode: action.payload,
      };
      case EDRC_CODE:
      return {
        ...state,
        edrcCode: action.payload,
      };
    case ON_CHANGE_SEGMENT:
      return {
        ...state,
        selectedSegment: action.payload,
      };
    case AREA:
      return {
        ...state,
        area: action.payload,
      };
    case PROJECT_BUSINESS_UNIT:
      return {
        ...state,
        businessUnit: action.payload,
      };
    case SITE_LOCATION:
      return {
        ...state,
        locations: action.payload,
      };
    case PROJECT_INDEPENDENT_COMPANY:
      return {
        ...state,
        independentCompany: action.payload,
      };
    case RESET_STRUCTURE_FORM:
      return {
        ...state,
        projectName: "",
        segment: "",
        area: "",
        businessUnit: "",
        siteLocation: "",
        independentCompany: "",
      };
    case `${LIST_PROJECT}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${LIST_PROJECT}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${LIST_PROJECT}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        projectList: action.payload.data,
      };
    case SHOW_ADD_PROJ_MODAL:
      return {
        ...state,
        showAddProjModal: action.payload,
      };
    case SET_EDIT_MODE:
      return {
        ...state,
        isEditMode: action.payload,
      };
    case `${GET_SINGLE_PROJ}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_SINGLE_PROJ}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_SINGLE_PROJ}_FULFILLED`:
      const proj = action.payload.data;
      return {
        ...state,
        isLoading: false,
        projectName: proj.name,
        projCode: proj.projCode,
        jobCode: proj.jobCode,
        edrcCode: proj.edrcCode,
        selectedSegment: getSelectedValue(state.segmentList, proj.segmentId),
        businessUnit: getSelectedValue(state.buList, proj.buId),
        independentCompany: getSelectedValue(state.icList, proj.icId),
        area: proj.area,
        siteLocation: "",
        selectedProjId: proj.id,
        locations: proj.projectSiteLocationDetails,
      };
    case `${GET_IC_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_IC_LIST}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_IC_LIST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        icList: action.payload.data,
      };
    case `${GET_SEGMENT_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_SEGMENT_LIST}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_SEGMENT_LIST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        segmentList: action.payload.data,
      };
    case `${GET_BU_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_BU_LIST}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_BU_LIST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        buList: action.payload.data,
      };
    case RESET_PROJECT_FORM:
      return {
        ...state,
        isLoading: false,
        projectName: "",
        selectedSegment: {},
        businessUnit: {},
        independentCompany: {},
        area: "",
        siteLocation: "",
        isEditMode: false,
        selectedProjId: "",
        locations: [],
        jobCode: "",
        edrcCode: "",
      };
    case SHOW_ERR_MSG:
      return {
        ...state,
        isProjMsg: action.payload,
      };
    case ADD_LOCATION_FIELD:
      return {
        ...state,
        locations: action.payload,
      };
    default:
      return state;
  }
}
