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

export const getSiteReqDetails = () => {
  // ! roleName is to be get from the userDetails
  return {
    type: GET_SITE_REQ_DETAILS,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteDispatch/getTWCCDispatchDetails`
    ),
  };
};

export const twccDispatchDataFetch = () => {
  // ! roleName is to be get from the userDetails
  return {
    type: GET_SITE_REQ_DETAILS,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteRequirement/getSiteReqDetails?role_name=TWCC&role_hierarchy=1`
    ),
  };
};

export const setSelectedItem = (value) => {
let createDispatch = store.getState().createDispatch;
let lstStructforDispatch=createDispatch.lstStructforDispatch;
let selectedData=createDispatch.selectedItems;
console.log(` Structure Dispatch : ${JSON.stringify(lstStructforDispatch)}`)
console.log(JSON.stringify(value))
lstStructforDispatch.map(a => {
  if(a.projectName === value.projectName && a.structureCode === value.structureCode){
    a.checked=!a.checked;
  }
})
console.log(` Structure Dispatch : ${JSON.stringify(lstStructforDispatch)}`)
value.checked=true;

let finder=selectedData.filter(a => a.projectName === value.projectName && a.structureCode === value.structureCode)
console.log(`Finder: ${JSON.stringify(finder)}`)
if (finder.length  == 0){
    selectedData.push(value)
} else {
    // console.log(`Selected Data: ${JSON.stringify(selectedData)}`);
    // selectedData = selectedData.filter(item => item.projectName !== value.projectName && item.structureCode !== value.structureCode)
    // console.log(`Selected Data: ${JSON.stringify(selectedData)}`);
    selectedData.forEach((a,i)=> {
      if(a.projectName === value.projectName && a.structureCode === value.structureCode){
        selectedData.splice(i,1);
      }
    })
}
  // let reuse=(selectedData && selectedData[0].availProjectId === null)? true: false;
  // let fabOut=(selectedData && selectedData[0].availProjectId !== null)?false:true;
  let disableReuse=true;
  let disableFabOut=true;
  if (selectedData.length >0 && selectedData[0].availProjectId === null){
    console.log(`in Ifloop and ${JSON.stringify(selectedData[0])}`)
    
    disableFabOut=false;
  }
  else if (selectedData.length >0 && selectedData[0].availProjectId !== null){
    console.log(`in elseloop and ${JSON.stringify(selectedData[0])}`)
    disableReuse=false
  }

  return {
    type: SET_SELECTED_ITEMS,
    payload: selectedData,
    structureList:lstStructforDispatch,
    reuseResult:disableReuse,
    fabOutResult:disableFabOut
  }
}
export const getSiteReqDetailsById = (structId,siteReqId) => {
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

export const createDispatch = () => {
  let createDispatch = store.getState().createDispatch;
  let dispStructureDtls = [];
  createDispatch.selectedItems.map((item) => {
    let tempObj =
      createDispatch.serviceTypeId === 4
        ? {
            serviceTypeId: createDispatch.serviceTypeId,
            projectId: item.projectId,
            structureId: item.structureId,
            structureName: item.structureName,
            fromProjectId: item.availProjectId,
            surPlusDeclId: item.surPlusDeclId,
          }
        : {
            serviceTypeId: createDispatch.serviceTypeId,
            projectId: item.projectId,
            structureId: item.structureId,
            structureName: item.structureName,
          };
    dispStructureDtls.push(tempObj);
  });
  // TODO : get rolename from userdetails
  const data = {
    roleName: "TWCC",
    requirementId: createDispatch.activeItem.id,
    toProjectId: createDispatch.activeItem.projectId,
    dispStructureDtls,
  };
  return {
    type: CREATE_DISPATCH,
    payload: axios.post(
      `${config.BASE_URL}/api/SiteDispatch/getTWCCDispatchDetails`,
      data
    ),
  };
};