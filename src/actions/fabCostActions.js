import store from "../store";
import axios from "axios";
import config from "../config";
import {
  GET_FABRICATION_STRUCTURE,
  GET_FABRICATION_COST,
  ADD_COMPONENT_COST,
  GET_FABCOST_COMPONENT,
  GET_FABRICATIONCOST_APPROVAL_DATA,
  APPROVE_FABRICATION_STRUCTURE
} from "./types";
import { getUserDetails } from "../utils/auth";

export const fabricationStructure = () => {
  let projectId = JSON.parse(localStorage.getItem("userDetails")).projectId;
  return {
    type: GET_FABRICATION_STRUCTURE,
    payload: axios.get(
      `${config.BASE_URL}/api/FabricationManagement/GetAsBuildStructureCost?id=${projectId}`
    ),
  };
};

export const addComponentCost = () => {
  let fabCost = store.getState().fabricationCost;
  let currentStructure = fabCost.currentStructure;
  let payload = {
    projStructId: parseInt(currentStructure.projectStructureId),
    cost: parseFloat(fabCost.cost),
    dispatchRequirementId: currentStructure.dispatchRequirementId,
    dispatchNo: currentStructure.dispatchNo
  };

  // console.log(payload)
  return {
    type: ADD_COMPONENT_COST,
    payload: axios.put(
      `${config.BASE_URL}/api/FabricationManagement/AddComponentCost`,
      payload
    ),
  };
};

export const getFabricationCost = () => {
  let projectId = JSON.parse(localStorage.getItem("userDetails")).projectId;
  return {
    type: GET_FABRICATION_COST,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteDispatch/GetStructrueComponent?id=${projectId}`
    ),
  };
};

export const getComponentList = (projectStrId) => {
  return {
    type: GET_FABCOST_COMPONENT,
    payload: axios.get(
      `${config.BASE_URL}/api/StructureComponent/GetAssignedStructureDetailsByProjStructId?projStructId=${projectStrId}`
    ),
  };
};


export const getFabricationCostApprovalData = () => {
  const roleName = getUserDetails().roleName
  return {
    type: GET_FABRICATIONCOST_APPROVAL_DATA,
    payload: axios.get(`${config.BASE_URL}/api/FabricationManagement/getFabrication?role_name=${roleName}`)
  }
}

export const approveFabrication = () => {
  const fabCostApprove = store.getState().fabCostApprove
  let currentStructure = JSON.parse(JSON.stringify(fabCostApprove.currentStructure))
  let roleName = getUserDetails().roleName
  let data = {
    "fabCost_id": currentStructure.id,
    "mode": fabCostApprove.approveMode,
    "role_name": roleName === "SITE" ? "SITE-FAA" : roleName,
    "role_hierarchy": null
  }

  // console.log(data)
  return {
    type: APPROVE_FABRICATION_STRUCTURE,
    payload: axios.post(`${config.BASE_URL}/api/FabricationManagement/FabricationApprove`, data)
  }
}