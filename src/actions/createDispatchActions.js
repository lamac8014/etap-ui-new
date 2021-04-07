import axios from "axios";
import store from "../store";
import config from "../config";
import {
  GET_SITE_REQ_DETAILS,
  GET_SITE_REQ_DETAILS_BY_ID,
  CREATE_DISPATCH,
  SET_SELECTED_ITEMS,
  SET_ACTIVE_ITEM,
  RESET_CREATE_USER_FORM,
} from "../actions/types";
import { getUserDetails } from "../utils/auth";

export const getSiteReqDetails = () => {
  // ! roleName is to be get from the userDetails
  return {
    type: GET_SITE_REQ_DETAILS,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteDispatch/getTWCCDispatchDetails`
    ),
  };
};

export const setSelectedItem = (value) => {
  let createDispatch = store.getState().createDispatch;
  let lstStructforDispatch = createDispatch.lstStructforDispatch;
  let selectedData = createDispatch.selectedItems;
  // console.log(` Structure Dispatch : ${JSON.stringify(lstStructforDispatch)}`);
  console.log(JSON.stringify(value));
  // lstStructforDispatch.map((a) => {
  //   if (
  //     a.projectName === value.projectName &&
  //     a.structureCode === value.structureCode
  //   ) {
  //     a.checked = !a.checked;
  //   }
  // });
  // console.log(` Structure Dispatch : ${JSON.stringify(lstStructforDispatch)}`);
  // value.checked = true;

  let finder = selectedData.filter(
    (a) =>
      a.projectName === value.projectName &&
      a.structureCode === value.structureCode
  );
  console.log(`Finder: ${JSON.stringify(finder)}`);
  if (finder.length == 0) {
    value.checked = true;
    selectedData.push(value);
  } else {
    // console.log(`Selected Data: ${JSON.stringify(selectedData)}`);
    // selectedData = selectedData.filter(item => item.projectName !== value.projectName && item.structureCode !== value.structureCode)
    // console.log(`Selected Data: ${JSON.stringify(selectedData)}`);
    selectedData.forEach((a, i) => {
      if (
        a.projectName === value.projectName &&
        a.structureCode === value.structureCode
      ) {
        a.checked = false;
        selectedData.splice(i, 1);
      }
    });
  }
  // let reuse=(selectedData && selectedData[0].availProjectId === null)? true: false;
  // let fabOut=(selectedData && selectedData[0].availProjectId !== null)?false:true;
  let disableReuse =
    selectedData.length > 0 ? createDispatch.disableReuse : true;
  let disableFabOut =
    selectedData.length > 0 ? createDispatch.disableFabrication : false;
  // if (selectedData.length > 0 && selectedData[0].disabled) {
  //   console.log(`in Ifloop and ${JSON.stringify(selectedData[0])}`);
  //   disableFabOut = false;
  // } else if (selectedData.length > 0 && selectedData[0].disabled) {
  //   console.log(`in elseloop and ${JSON.stringify(selectedData[0])}`);
  //   disableReuse = false;
  // }
  selectedData.map((item, index) => {
    if (item.availability === "YES") {
      disableReuse = false;
      disableFabOut = true;
    }
    // if (item.availability === "-") {
    //   disableFabOut = false;
    // }
    // if (!disableReuse && !disableFabOut) {
    //   disableFabOut = true;
    //   disableReuse = true;
    // }
  });

  return {
    type: SET_SELECTED_ITEMS,
    payload: selectedData,
    structureList: lstStructforDispatch,
    reuseResult: disableReuse,
    fabOutResult: disableFabOut,
  };
};
export const getSiteReqDetailsById = (structId, siteReqId) => {
  return {
    type: GET_SITE_REQ_DETAILS_BY_ID,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteDispatch/getTWCCDispatchInnerStructurDetails?structureId=${structId}&siteRequirementId=${siteReqId}`
    ),
  };
};

export const setActiveItem = (id) => {
  return {
    type: SET_ACTIVE_ITEM,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteRequirement/getSiteReqDetailsById/${id}`
    ),
  };
};

export const createDispatch = (payloadData) => {
  let createDispatch = store.getState().createDispatch;
  let reuseStructures = createDispatch.reuseStructures;
  let userDetails = getUserDetails();
  let dispStructureDtls = [];
  let data = {};
  // createDispatch.reuseStructures.map((item) => {
  //   let tempObj = {
  //     siteRequirementId: item.siteRequirementId,
  //     toProjectId: item.projectId,
  //     projectStructureId: item.projectStructureId,
  //     structureId: item.structureId,
  //     serviceTypeId: item.serviceTypeId,
  //     quantity: 0,
  //     transferPrice: " ",
  //     status: item.projectCurrentStatus,
  //     statusInternal: item.projectStructureStatus,
  //     roleId: userDetails.roleId,
  //     createdBy: userDetails.id,
  //     isDelete: false,
  //     notes: " ",
  //   };
  //   // console.log("inside here dispatch api", tempObj);
  //   data = tempObj;
  // });
  // TODO : get rolename from userdetails
  return {
    type: CREATE_DISPATCH,
    payload: axios.post(
      `${config.BASE_URL}/api/SiteDispatch/CreateDispatch`,
      payloadData
    ),
  };
};
