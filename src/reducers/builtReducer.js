import { act } from "react-dom/test-utils";
import {
  SET_BUILT_EDIT_MODE,
  LIST_BUILT_DETAILS,
  CHANGE_BUILT_MORE_MODAL_STATUS,
  CHANGE_BUILT_EDIT_MORE_MODAL_STATUS,
  GET_AS_BUILD_STRUCTURE,
  ADD_STRUCTURE_COMPONENT,
  SET_BUILD_STRUCT_CODE,
  SET_ESTIMATE_WEIGHT,
  SET_DCNO,
  SET_BUILD_STRUCT_NAME,
  SET_BUILD_FILES,
  SET_IMAGE_UPLOAD,
  SET_ACT_WBS,
  SET_FAB_YEAR,
  SET_EXP_REL_DATE,
  SET_REMARK,
  SET_REUSE,
  BUILT_VIEW_MODAL,
  SET_VIEW_MORE_MODE,
  AS_BUILT_SET_ELEMENT_LIST,
  AS_BUILT_SET_SEGMENT_LIST,
  AS_BUILT_SET_SUBSEGMENT_LIST,
  AS_BUILT_SET_WBS,
  AS_BUILT_SET_SEGMENT,
  AS_BUILT_SET_SUBSEGMENT,
  AS_BUILT_SET_ELEMENT,
  AS_BUILT_SET_WBS_LIST,
  RESET_BUILT_MODEL,
  AS_BUILT_LIST_WBS_CODES,
  AS_BUILT_SET_CURRENT_STRUCTURE,
  AS_BUILT_GET_COMPONENTS,
} from "../actions/types";

const initialState = {
  isAddComponentMsg: false,
  isEditMode: false,
  isLoading: false,
  isError: false,
  wbsError: false,
  message: "",
  asBuildStructure: [],
  componentsList: [],
  structName: "",
  structCode: "",
  dcNo: "",
  estWeight: "",
  files: {},
  imgUpload: {},
  actWbs: "",
  fabYear: "",
  expRelDate: "",
  rmark: "",
  reUse: "",
  viewMoreBuiltModal: [],
  wbsCodesList: [],
  wbsList: [],
  segmentList: [],
  subSegmentList: [],
  elementList: [],
  wbsItem: {},
  currentStructure: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST_BUILT_DETAILS:
      return {
        ...state,
        builtTypeList: action.payload,
      };
    case CHANGE_BUILT_MORE_MODAL_STATUS:
      return {
        ...state,
        showBuiltViewMoreModal: action.payload,
      };
    case CHANGE_BUILT_EDIT_MORE_MODAL_STATUS:
      return {
        ...state,
        showBuiltEditMoreModal: action.payload,
      };

    case SET_BUILT_EDIT_MODE:
      return {
        ...state,
        isEditMode: action.payload,
      };
    case `${GET_AS_BUILD_STRUCTURE}_PENDING`:
      return {
        ...state,
        isloading: true,
      };
    case `${GET_AS_BUILD_STRUCTURE}_REJECTED`:
      return {
        ...state,
        isloading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    case `${GET_AS_BUILD_STRUCTURE}_FULFILLED`:
      return {
        ...state,
        isloading: false,
        isError: false,
        asBuildStructure: action.payload.data,
      };
    case `${AS_BUILT_GET_COMPONENTS}_PENDING`:
      return {
        ...state,
        isloading: true,
      };
    case `${AS_BUILT_GET_COMPONENTS}_REJECTED`:
      return {
        ...state,
        isloading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    case `${AS_BUILT_GET_COMPONENTS}_FULFILLED`:
      return {
        ...state,
        isloading: false,
        isError: false,
        componentsList: action.payload.data.components,
      };
    case `${ADD_STRUCTURE_COMPONENT}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${ADD_STRUCTURE_COMPONENT}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.response.data.message,
      };
    case `${ADD_STRUCTURE_COMPONENT}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: action.payload.data.message,
      };
    case SET_BUILD_STRUCT_NAME:
      return {
        ...state,
        structName: action.payload,
      };
    case SET_ESTIMATE_WEIGHT:
      return {
        ...state,
        estWeight: action.payload,
      };
    case SET_BUILD_FILES:
      return {
        ...state,
        files: action.payload,
      };
    case SET_IMAGE_UPLOAD:
      return {
        ...state,
        imgUpload: action.payload,
      };
    case SET_FAB_YEAR:
      return {
        ...state,
        fabYear: action.payload,
      };
    case SET_EXP_REL_DATE:
      return {
        ...state,
        expRelDate: action.payload,
      };
    case SET_BUILD_STRUCT_CODE:
      return {
        ...state,
        structCode: action.payload,
      };
    case SET_ACT_WBS:
      return {
        ...state,
        actWbs: action.payload,
      };
    case SET_DCNO:
      return {
        ...state,
        dcNo: action.payload,
      };
    case SET_REMARK:
      return {
        ...state,
        rmark: action.payload,
      };
    case SET_REUSE:
      return {
        ...state,
        reUse: action.payload,
      };
    case BUILT_VIEW_MODAL:
      return {
        ...state,
        openViewMoreModal: action.payload,
      };

    case SET_VIEW_MORE_MODE:
      return {
        ...state,
        isEditMode: action.payload,
      };
    case `${AS_BUILT_LIST_WBS_CODES}_PENDING`:
      return { ...state, isLoading: true };
    case `${AS_BUILT_LIST_WBS_CODES}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        wbsError: action.payload.response.data.message,
      };
    case `${AS_BUILT_LIST_WBS_CODES}_FULFILLED`:
      return { ...state, isLoading: false, wbsCodesList: action.payload.data };
    case AS_BUILT_SET_WBS_LIST:
      return { ...state, wbsList: action.payload };
    case AS_BUILT_SET_SEGMENT_LIST:
      return { ...state, segmentList: action.payload };
    case AS_BUILT_SET_SUBSEGMENT_LIST:
      return { ...state, subSegmentList: action.payload };
    case AS_BUILT_SET_ELEMENT_LIST:
      return { ...state, elementList: action.payload };
    case AS_BUILT_SET_WBS:
    case AS_BUILT_SET_SEGMENT:
    case AS_BUILT_SET_ELEMENT:
    case AS_BUILT_SET_SUBSEGMENT:
      return { ...state, wbsItem: action.payload };
    case AS_BUILT_SET_CURRENT_STRUCTURE:
      return { ...state, currentStructure: action.payload };
    case RESET_BUILT_MODEL:
      return {
        ...state,
        wbsItem: {},
        currentStructure: {},
        wbsList: [],
        segmentList: [],
        subSegmentList: [],
        elementList: [],
        expRelDate: "",
        estWeight: "",
        fabYear: "",
        reUse: {},
        rmark: "",
        files: {},
        imgUpload: {},
      };
    default:
      return state;
  }
}
