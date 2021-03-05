import axios from "axios";
import store from "../store";
import config from "../config";
import {
  SET_SITE_DISPATCH_DETAILS,
  SET_STRUCTURE_LIST_CODE,
  UPDATE_SITE_DISPATCH,
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

export const getStructureListCode = (id, heirarchy) => {
  return {
    type: SET_STRUCTURE_LIST_CODE,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteDispatch/getStructureListCode?dispReqId=${id}&role_hierarchy=${heirarchy}`
    ),
  };
};

export const updateSiteDispatch = () => {
  const siteDispatch = store.getState().siteDispatch;
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  const data = new FormData();
  data.append(
    "dispatchRequestSubContractorId",
    siteDispatch.activeItem.dispatchRequestSubContractorId
  );
  data.append("workOrderNumber", siteDispatch.workOrderNumber);
  data.append("dispatchDate", siteDispatch.dispatchDate);
  data.append("updatedBy", 1);
  data.append("structureId", siteDispatch.structureId.split("R")[1]);
  data.append("uploadDocs", siteDispatch.uploadedFile);

  return {
    type: UPDATE_SITE_DISPATCH,
    payload: axios.put(
      `${config.BASE_URL}/api/SiteDispatch/UpdateSiteDispatch`,
      data,
      headers
    ),
  };
};
