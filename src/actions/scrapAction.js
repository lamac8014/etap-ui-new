import store from "../store";
import axios from "axios";
import config from "../config";
import {
  LIST_SCRAP_CODES,
  GET_SCRAP_DATA_SINGLE,
  ACTION_SCRAP,
  SCRAP_APPROVAL_LIST,
  ADD_SCRAP,
  LIST_PROJECT_CODES,
  LIST_WBS_CODES,
  SITE_REQUIRMENT_LIST,
  ADD_REQUIREMENT,
  SCRAP_LIST_STRUCTURE_PROJECT_DATA,
  GET_WORKFLOW_SCRAP_DETAILS,
} from "./types";
import { getUserDetails } from "../utils/auth";

export const getProjectList = () => {
  return {
    type: LIST_PROJECT_CODES,
    payload: axios.get(config.BASE_URL + "/api/Project/projCodeList"),
  };
};
export const scrapList = () => {
  return {
    type: LIST_PROJECT_CODES,
    payload: axios.get(config.BASE_URL + "/api/Project/projCodeList"),
  };
};

export const getVendorList = () => {
  return {
    type: LIST_SCRAP_CODES,
    payload: axios.get(config.BASE_URL + "/api/Vendor/vendorCodeList"),
  };
};

export const getWBSList = () => {
  return {
    type: LIST_WBS_CODES,
    payload: axios.get(config.BASE_URL + "/api/WBS/GetWBSCode"),
  };
};

// export const addScrap = () => {
//   const scrap = store.getState().scrap;
//   const postData = new FormData();
//   postData.append("subconId", parseInt(scrap.scrapVendor.value));
//   postData.append("structId", parseInt(scrap.structureID.value));
//   postData.append("scrapRate", parseFloat(scrap.scrapRate));
//   postData.append("auctionId", scrap.auctionId);
//   postData.append("uploadDocs", scrap.scrapFile);
//   const configHeader = {
//     headers: { "content-type": "multipart/form-data" },
//   };

//   return {
//     type: ADD_SCRAP,
//     payload: axios.post(
//       config.BASE_URL + "/api/ScrapStructure/createScrapStruct",
//       postData,
//       configHeader
//     ),
//   };
// };

export const getProjectStructureData = () => {
  return {
    type: SCRAP_LIST_STRUCTURE_PROJECT_DATA,
    payload: axios.get(
      config.BASE_URL + "/api/StructureComponent/GetAssignedStructureDetails"
    ),
  };
};

export const getScrap = () => {
  const ROLE_NAME = getUserDetails().roleName;
  return {
    type: SCRAP_APPROVAL_LIST,
    payload: axios.get(
      config.BASE_URL + "/api/Scrap/getScrap?role_name=" + ROLE_NAME
    ),
  };
};

export const getWorkFlowDetails = (workFlowPage = true) => {
  const roleName = workFlowPage ? getUserDetails().roleName : "QA";
  return {
    type: GET_WORKFLOW_SCRAP_DETAILS,
    payload: axios.get(
      `${config.BASE_URL}/api/ScrapStructure/getWorkFlowScrapDetails?role_name=${roleName}`
    ),
  };
};

export const scrapAction = (id, action) => {
  const ROLE_NAME = getUserDetails().roleName;
  let workflowDetails = store.getState().scrap.workflowDetails;
  let singleScrap = workflowDetails.filter((item) => {
    return item.id === id;
  })[0];
  const body = {
    dispatch_structure_id: singleScrap.dispStructId,
    scrap_id: singleScrap.id,
    mode: action,
    role_name: ROLE_NAME,
    role_hierarchy: null,
  };

  return {
    type: ACTION_SCRAP,
    payload: axios.post(
      config.BASE_URL + "/api/ScrapStructure/WorkflowManagement",
      body
    ),
  };
};

export const singleScrapFetch = (id) => {
  const scrap = store.getState().scrap;
  const data = scrap.scrapList[id];
  return {
    type: GET_SCRAP_DATA_SINGLE,
    payload: data,
  };
};

export const postProcScrapStruct = () => {
  const scrap = store.getState().scrap;
  let id = scrap.currentScrap.id;
  let projStrId = scrap.currentScrap.projStructId;
  const postData = new FormData();
  const configHeader = {
    headers: { "content-type": "multipart/form-data" },
  };
  postData.append("subconId", parseInt(scrap.scrapVendor.value));
  postData.append("projStructId", parseInt(projStrId));
  postData.append("scrapRate", parseFloat(scrap.scrapRate));
  postData.append("auctionId", scrap.auctionID);
  postData.append("isDelete", false);
  postData.append("uploadDocs", scrap.upload);

  return {
    type: ADD_SCRAP,
    payload: axios.post(
      `${config.BASE_URL}/api/ScrapStructure/ProcScrapStruct/${id}`,
      postData,
      configHeader
    ),
  };
};
