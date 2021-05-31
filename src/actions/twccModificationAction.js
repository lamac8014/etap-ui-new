import store from "../store";
import axios from "axios";
import config from "../config";
import {
  GET_TWCC_MODIFICATION_TABLE_DATA,
  TWCC_GET_VENDOR_CODE,
  UPDATE_COMPONENT_HISTORY,
} from "./types";
import { getUserDetails } from "../utils/auth";

export const getTwccModificationData = () => {
  return {
    type: GET_TWCC_MODIFICATION_TABLE_DATA,
    payload: axios.get(
      config.BASE_URL +
        "/api/SiteDispatchReuse/GetDispatchStructureForCMPC?id=1"
    ),
  };
};

export const getVendorCodeList = () => {
  return {
    type: TWCC_GET_VENDOR_CODE,
    payload: axios.get(
      `${config.BASE_URL}/api/Vendor/vendorCodeListWithServiceType`
    ),
  };
};

export const updateComponentHistory = () => {
  const twcc = store.getState().twcc;
  let bodyData = {
    dispstructCompId: 0,
    dispatchRequirementId: twcc.currentStructure.dispatchRequirementId,
    projectStructureId: twcc.currentStructure.projectStructureId,
    dispStructureId: twcc.currentStructure.dispStructureId,
    componentId: 0,
    isSite: twcc.isSite,
    isVendor: twcc.isVendor,
    osDispatchReqSubCont: {
      dispreqId: twcc.currentStructure.dispatchRequirementId,
      dispatchNo: twcc.currentStructure.dcNumber,
      vendorStructures: [
        {
          subContId: twcc.subContId,
          projStructureId: twcc.currentStructure.projectStructureId,
        },
      ],
    },
  };

  return {
    type: UPDATE_COMPONENT_HISTORY,
    payload: axios.put(
      `${config.BASE_URL}/api/SiteDispatch/UpdateComponentHistory`,
      bodyData
    ),
  };
};
