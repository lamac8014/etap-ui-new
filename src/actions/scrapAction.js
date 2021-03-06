import store from '../store';
import axios from 'axios';
import config from '../config';
import { LIST_SCRAP_CODES,GET_SCRAP_DATA_SINGLE,ACTION_SCRAP,SCRAP_APPROVAL_LIST,ADD_SCRAP,LIST_PROJECT_CODES, LIST_WBS_CODES,SITE_REQUIRMENT_LIST,ADD_REQUIREMENT,SCRAP_LIST_STRUCTURE_PROJECT_DATA } from "./types";
import { getUserDetails } from "../utils/auth";

export const getProjectList = () => {
    return {
        type: LIST_PROJECT_CODES,
        payload: axios.get(config.BASE_URL + '/api/Project/projCodeList')
    }
}
export const scrapList = () => {
    return {
        type: LIST_PROJECT_CODES,
        payload: axios.get(config.BASE_URL + '/api/Project/projCodeList')
    }
}

export const getVendorList = () => {
    return {
        type: LIST_SCRAP_CODES,
        payload: axios.get(config.BASE_URL + '/api/Vendor/vendorCodeList')
    }
}

export const getWBSList = () => {
    return {
        type: LIST_WBS_CODES,
        payload: axios.get(config.BASE_URL + '/api/WBS/GetWBSCode')
    }
}

export const addScrap = () => {
    const scrap = store.getState().scrap;
    const postData = new FormData();
    postData.append("subconId",  parseInt(scrap.scrapVendor.value));
    postData.append("structId", parseInt(scrap.structureID.value));
    postData.append("scrapRate",  parseFloat(scrap.scrapRate));
    postData.append("auctionId", scrap.auctionId);
    postData.append("uploadDocs",scrap.scrapFile)
    const configHeader = {
        headers: { "content-type": "multipart/form-data" },
      };

    return {
        type: ADD_SCRAP,
        payload: axios.post(config.BASE_URL + '/api/ScrapStructure/createScrapStruct', postData,
      configHeader)
    }
}

export const getProjectStructureData = () => {
    return {
        type: SCRAP_LIST_STRUCTURE_PROJECT_DATA,
        payload: axios.get(config.BASE_URL + '/api/StructureComponent/GetAssignedStructureDetails')
    }
}

export const getScrap = () => {
    const ROLE_NAME= getUserDetails().roleName;
    return {
        type: SCRAP_APPROVAL_LIST,
        payload: axios.get(config.BASE_URL + '/api/Scrap/getScrap?role_name='+ROLE_NAME)
    }
}

export const ScrapAction = (id,action) => {
    const ROLE_NAME= getUserDetails().roleName;
    let ScrapList = store.getState().Scrap.ScrapList;
    let singleScrap=ScrapList[id];
      const body={
            "siteReqId": singleScrap.id,
            "mode": action,
            "role_name": ROLE_NAME,
          }
      
    return {
        type: ACTION_SCRAP,
        payload: axios.post(config.BASE_URL + '/api/Scrap/WorkflowManagement', body)
    }
}


export const singleScrapFetch = (id) => {
    const scrap = store.getState().scrap;
    const data=scrap.scrapList[id];
      return {
        type: GET_SCRAP_DATA_SINGLE,
        payload: data,
      };
}
