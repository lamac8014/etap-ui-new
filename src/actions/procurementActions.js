import axios from "axios";
import store from "../store";
import config from "../config";
import { POST_ASSIGN_VENDOR, SET_VENDOR_CODE_LIST } from "../actions/types";

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
      structureId: structure.structureId,
      fabricationCost: structure.fabricationCost,
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
      structureId: structure.structureId,
      monthlyRent: structure.monthlyRent,
      contractYears: structure.contractYears,
      planReleasedate: structure.plannedReleaseDate,
      expectedReleasedate: structure.expectedReleaseDate,
      actualStartdate: structure.actualStartDate,
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
