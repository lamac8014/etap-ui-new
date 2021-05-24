import axios from "axios";
import store from "../store";
import config from "../config";
import {
  POST_ASSIGN_VENDOR,
  SET_VENDOR_CODE_LIST,
  SET_SITE_DISPATCH_DETAILS,
} from "../actions/types";
import { getUserDetails } from "../utils/auth";

export const getSiteDispatchDetails = () => {
  const roleName = getUserDetails().roleName;
  return {
    type: SET_SITE_DISPATCH_DETAILS,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}`
    ),
  };
};

export const getVendorCodeList = () => {
  return {
    type: SET_VENDOR_CODE_LIST,
    payload: axios.get(`${config.BASE_URL}/api/Vendor/vendorCodeList`),
  };
};

export const fbAssignVendor = () => {
  const procurement = store.getState().procurement;
  const headers = {
    "Content-Type": "application/json",
  };
  let tempArray = [];
  procurement.vendorStructures.map((structure) => {
    let tempObj = {
      subContId: structure.subContId,
      projStructureId: structure.projStructureId,
    };
    tempArray.push(tempObj);
  });
  const data = {
    dispreqId: procurement.activeItem.dispatchId,
    dispatchNo: procurement.activeItem.dispatchNo,
    isDelete: false,
    vendorStructures: tempArray,
  };

  return {
    type: POST_ASSIGN_VENDOR,
    payload: axios.post(
      `${config.BASE_URL}/api/SiteDispatch/fbAssignVendor`,
      data,
      headers
    ),
  };
};

export const osAssignVendor = () => {
  const procurement = store.getState().procurement;
  const headers = {
    "Content-Type": "application/json",
  };
  let tempArray = [];
  procurement.vendorStructures.map((structure) => {
    let tempObj = {
      subContId: structure.subContId,
      projStructureId: structure.projStructureId,
    };
    tempArray.push(tempObj);
  });
  const data = {
    serviceType: procurement.activeItem.serviceTypeId,
    dispreqId: procurement.activeItem.dispatchId,
    dispatchNo: procurement.activeItem.dispatchNo,
    vendorStructures: tempArray,
  };

  return {
    type: POST_ASSIGN_VENDOR,
    payload: axios.post(
      `${config.BASE_URL}/api/SiteDispatch/osAssignVendor`,
      data,
      headers
    ),
  };
};
