import axios from "axios";
import store from "../store";
import config from "../config";
import {
  SET_PHYSICAL_VERIFICATION_DETAILS,
  PHY_GET_PROJECT_DETAILS,
  SAVE_PHYSICAL_VERIFICATION_STRUCTURE,
} from "../actions/types";
import { getUserDetails } from "../utils/auth";

export const getPhysicalVerificationDetails = () => {
  const physical = store.getState().physicalVerification;
  let project = physical.projectName;
  return {
    type: SET_PHYSICAL_VERIFICATION_DETAILS,
    payload: axios.get(
      `${config.BASE_URL}/api/PhysicalVerification/GetPhysicalVerificationStructure?id=${project.value}`
    ),
  };
};

export const getProjectCodeList = () => {
  return {
    type: PHY_GET_PROJECT_DETAILS,
    payload: axios.get(`${config.BASE_URL}/api/Project/projCodeList`),
  };
};

export const savePhysicalVerification = () => {
  let physical = store.getState().physicalVerification;
  let selectedItems = physical.selectedItems;
  selectedItems.map((item) => {
    delete item.checked;
    delete item.temp_id;
    item.status = "NEW";
    item.statusInternal = "NEW";
  });
  let fromDueDate = physical.fromDue;
  let toDueDate = physical.toDue;
  let payload = {
    fromDueDate,
    toDueDate,
    inspectionId: "",
    structList: selectedItems,
  };

  return {
    type: SAVE_PHYSICAL_VERIFICATION_STRUCTURE,
    payload: axios.post(
      `${config.BASE_URL}/api/PhysicalVerification/SiteStructurePhysicalverify`,
      payload
    ),
  };
};

// export const addTransferPrice = () => {
//     const { roleName } = getUserDetails();
//     const transferPrice = store.getState().transferPrice;
//     const data = {
//         "dispReqId": transferPrice.dispReqId,
//         "roleName": roleName,
//         "transferPrice": transferPrice.transferPrice

//     };
//     return {
//         type: ADD_TRANSFER_PRICE,
//         payload: axios.post(`${config.BASE_URL}/api/SiteDispatch/DispatchTransferPrice`, data),
//     };
// };
