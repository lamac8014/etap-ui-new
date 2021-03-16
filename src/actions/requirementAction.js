import store from "../store";
import axios from "axios";
import config from "../config";
import { getUserDetails } from "../utils/auth";

import {
  GET_REQUIREMENT_DATA_SINGLE,
  ACTION_REQUIREMENT,
  LIST_REQUIREMENTS,
  LIST_PROJECT_CODES,
  LIST_WBS_CODES,
  SITE_REQUIRMENT_LIST,
  ADD_REQUIREMENT,
  LIST_STRUCTURE_PROJECT_DATA,
} from "./types";

export const getProjectList = () => {
  console.log("In Action")
  const userDetails = getUserDetails();
  const projectName = userDetails ? userDetails.projectName : "";
  const projectID = userDetails ? userDetails.projectId : "";
  let project={name: projectName, id: projectID}
  console.log(`Project Name: ${projectName} ID: ${JSON.stringify(projectID)}`)
  return {
    type: LIST_PROJECT_CODES,
    payload: project
  };
};

export const getWBSList = () => {
  return {
    type: LIST_WBS_CODES,
    payload: axios.get(config.BASE_URL + "/api/WBS/GetWBSCode"),
  };
};

export const addSiteRequirement = () => {
  const requirement = store.getState().requirement;
  let siteRequirementList = requirement.siteRequirementList;
  const asiteRequirementObj = {
    structId: "",
    drawingNo: "",
    quantity: "",
    structName: "",
    structFamily: "",
    componentsCount: "",
  };
  siteRequirementList.push(asiteRequirementObj);
  return {
    type: SITE_REQUIRMENT_LIST,
    payload: siteRequirementList,
  };
};

export const addRequirement = () => {
  const requirement = store.getState().requirement;
  const siteRequirementStructures = [];
  requirement.siteRequirementList.map((dt) => {
    siteRequirementStructures.push({
      componentsCount: dt.componentsCount,
      drawingNo: dt.drawingNo,
      quantity: dt.quantity,
      structFamily: dt.structFamily,
      structId: dt.structId,
      structName: dt.structName.label,
    });
  });
  const userDetails = getUserDetails();
  const body = {
    projectId: userDetails.projectId,
    planStartdate: requirement.planedStartDate + "T00:00:00.000Z",
    planReleasedate: requirement.plannedReleaseDate + "T00:00:00.000Z",
    actualStartdate: requirement.actualStartDateOfUsage + "T00:00:00.000Z",
    actualReleasedate: requirement.expectedReleaseDate + "T00:00:00.000Z",
    requireWbsId: requirement.requiredWorkBreak.value,
    actualWbsId: requirement.actualWorkBreak.value,
    remarks: requirement.remarks,
    status: "NEW",
    statusInternal: "NEW",
    siteRequirementStructures: siteRequirementStructures,
  };
  return {
    type: ADD_REQUIREMENT,
    payload: axios.post(
      config.BASE_URL + "/api/SiteRequirement/createSiteReq",
      body
    ),
  };
};

export const getProjectStructureData = () => {
  return {
    type: LIST_STRUCTURE_PROJECT_DATA,
    payload: axios.get(
      config.BASE_URL + "/api/StructureComponent/GetAssignedStructureDetails"
    ),
  };
};

export const getRequirementsList = () => {
  const userDetails = getUserDetails();
  let ROLE_NAME=userDetails.roleName;
  return {
    type: LIST_REQUIREMENTS,
    payload: axios.get(
      config.BASE_URL +
        `/api/SiteRequirement/getSiteReqDetails?role_name=${ROLE_NAME}`
    ),
  };
};

export const requirementAction = (id, action) => {
  let auth = store.getState().auth;
  const ROLE_NAME = auth.token.roleName;
  let requirementList = store.getState().requirement.requirementsList;
  let singleRequirement = requirementList[id];
  const body = {
    siteReqId: singleRequirement,
    mode: action,
    role_name: auth.token.roleName,
  };

  return {
    type: ACTION_REQUIREMENT,
    payload: axios.post(
      config.BASE_URL + "/api/SiteRequirement/WorkflowManagement",
      body
    ),
  };
};

export const singleRequirementFetch = (id) => {
  const requirement = store.getState().requirement;
  const data = requirement.requirementsList[id];
  console.log(`Single Requirement Data: ${JSON.stringify(data)}`);
  return {
    type: GET_REQUIREMENT_DATA_SINGLE,
    payload: data,
  };
};
