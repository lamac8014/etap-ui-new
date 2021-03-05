import {
  VENDOR_CODE,
  VENDOR_CONTACT_NUMBER,
  VENDOR_EMAIL,
  VENDOR_NAME,
  VENDOR_LIST,
  LIST_VENDOR,
  SHOW_ERR_MSG,
  RESET_VENDOR_FORM,
  GET_SINGLE_VENDOR,
  SET_EDIT_MODE,
  SHOW_ADD_VENDOR_MODAL,
  VENDOR_STATUS,
  GET_VENDOR_TYPE,
  ON_CHANGE_VEN_SERV_TYPES,
  ON_CHANGE_VEN_STS,
} from "../actions/types";
import { tranformServTypeList,tranformServTypeListEnableCheck } from "../pages/subcontractor/utils";

const initialState = {
  vendorName: "",
  vendorCode: "",
  email: "",
  contactNumber: "",
  vendorStatus: false,
  vendorList: [],
  isVendorMsg: "",
  isEditMode: false,
  showAddVendorModal: false,
  selectedVendorId: "",
  isStatus: true,
  venServList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case VENDOR_NAME:
      return {
        ...state,
        vendorName: action.payload,
      };
    case VENDOR_CODE:
      return {
        ...state,
        vendorCode: action.payload,
      };
    case VENDOR_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case VENDOR_CONTACT_NUMBER:
      return {
        ...state,
        contactNumber: action.payload,
      };
    case VENDOR_LIST:
      return {
        ...state,
        vendorList: action.payload,
      };
    case VENDOR_STATUS:
      return {
        ...state,
        isStatus: action.payload,
      };
    case `${LIST_VENDOR}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${LIST_VENDOR}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${LIST_VENDOR}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        vendorList: action.payload.data,
      };
    case SHOW_ADD_VENDOR_MODAL:
      return {
        ...state,
        showAddVendorModal: action.payload,
      };
    case SET_EDIT_MODE:
      return {
        ...state,
        isEditMode: action.payload,
      };
    case `${GET_SINGLE_VENDOR}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_SINGLE_VENDOR}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_SINGLE_VENDOR}_FULFILLED`:
      const vendor = action.payload.data;
      let currentStatus;
      if (vendor.isStatus){
        currentStatus = { "label": "Active", "value": "Active"};
      }else{
        currentStatus = { "label": "InActive", "value": "InActive"};
      }
      return {
        ...state,
        id: vendor.id,
        isLoading: false,
        vendorName: vendor.name,
        vendorCode: vendor.vendorCode,
        email: vendor.email,
        contactNumber: vendor.phoneNunmber,
        vendorStatus: currentStatus,
        venServList: tranformServTypeListEnableCheck(vendor.vendorServiceTypeDetails),
      };

    case RESET_VENDOR_FORM:
      return {
        ...state,
        isLoading: false,
        vendorName: "",
        vendorCode: "",
        email: "",
        contactNumber: "",
      };
    case SHOW_ERR_MSG:
      return {
        ...state,
        isVendorMsg: action.payload,
      };
    case `${GET_VENDOR_TYPE}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_VENDOR_TYPE}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_VENDOR_TYPE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        venServList: tranformServTypeList([
          {
            name: "Fabrication",
            id: 1,
          },
          {
            name: "Outsourcing",
            id: 2,
          },
          {
            name: "Scrap",
            id: 3,
          },
        ]),
      };
    case ON_CHANGE_VEN_SERV_TYPES:
      return {
        ...state,
        venServList: action.payload,
      };
    case ON_CHANGE_VEN_STS:
      return {
        ...state,
        vendorStatus: action.payload,
      };
    default:
      return state;
  }
}
