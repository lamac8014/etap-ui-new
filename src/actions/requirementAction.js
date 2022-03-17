import store from "../store";
import axios from "axios";
import config from "../config";
import { getUserDetails } from "../utils/auth";
import { nanoid } from "nanoid";

import {
  GET_REQUIREMENT_DATA_SINGLE,
  ACTION_REQUIREMENT,
  LIST_REQUIREMENTS,
  LIST_PROJECT_CODES,
  LIST_WBS_CODES,
  SITE_REQUIRMENT_LIST,
  ADD_REQUIREMENT,
  LIST_STRUCTURE_PROJECT_DATA,
  EDIT_ATTRIBUTES,
} from "./types";

export const getProjectList = () => {
  console.log("In Action");
  const userDetails = getUserDetails();
  const projectName = userDetails ? userDetails.projectName : "";
  const projectID = userDetails ? userDetails.projectId : "";
  let project = { name: projectName, id: projectID };
  console.log(`Project Name: ${projectName} ID: ${JSON.stringify(projectID)}`);
  return {
    type: LIST_PROJECT_CODES,
    payload: project,
  };
};

export const getWBSList = () => {
  let id = getUserDetails().projectId

  return {
    type: LIST_WBS_CODES,
    payload: axios.get(config.BASE_URL + "/api/WBS/GetProjectWBSCodeList/" + id),
  };
};

export const addSiteRequirement = () => {
  const requirement = store.getState().requirement;
  let siteRequirementList = requirement.siteRequirementList;
  const asiteRequirementObj = {
    itemId: "",
    quantity: "",
    structId: "",
    structName: "",
    structureName: "",
    planStartdate: "",
    planReleasedate: "",
    requireWbsId: "",
    actualWbsId: "",
    requireByDate: "",
    wbsName: "",
    segmentName: "",
    subSegmentName: "",
    elementName: "",
    structureAttributesVal: [],
  };
  asiteRequirementObj.itemId = nanoid();
  siteRequirementList.push(asiteRequirementObj);
  return {
    type: SITE_REQUIRMENT_LIST,
    payload: siteRequirementList,
  };
};

export const addRequirement = () => {
  const requirement = store.getState().requirement;
  let wbsCodesList = JSON.parse(JSON.stringify(requirement.wbsCodesList));
  const siteRequirementStructures = [];
  requirement.savedRequirementList.map((dt) => {
    let wbs = wbsCodesList.find((item) => {
      return (
        item.workBreakDownCode === dt.wbsName.value &&
        item.segment === dt.segmentName.value &&
        item.subSegment === dt.subSegmentName.value &&
        item.element === dt.elementName.value
      );
    });
    siteRequirementStructures.push({
      quantity: parseInt(dt.quantity),
      structId: dt.structId,
      structName: dt.structName,
      planStartdate: dt.planStartdate + "T00:00:00.00Z",
      planReleasedate: dt.planReleasedate + "T00:00:00.00Z",
      requireByDate: dt.requireByDate + "T00:00:00.00Z",
      requireWbsId: wbs.id,
      structureAttributesVal: JSON.stringify(dt.structureAttributesVal),
    });
  });
  const userDetails = getUserDetails();
  const body = {
    projectId: userDetails.projectId,
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
    payload: axios.get(config.BASE_URL + "/api/Structure/getstructure"),
  };
};

export const getRequirementsList = () => {
  const userDetails = getUserDetails();
  let ROLE_NAME = userDetails.roleName;
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
  const ROLE_NAME = getUserDetails().roleName;
  let requirementList = store.getState().requirement.requirementsList;
  let singleRequirement = requirementList[id];
  const body = {
    siteReqId: singleRequirement.id,
    mode: action,
    role_name: ROLE_NAME,
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
  return {
    type: GET_REQUIREMENT_DATA_SINGLE,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteRequirement/getSiteReqDetailsById/${id}`
    ),
  };
};

export const saveAttributeValues = () => {
  let payload = {
    siteReqStructureId: 0,
    structureAttributesVal: "",
  };
  const requirement = store.getState().requirement;
  let requirementViewMore = requirement.requirementViewMore;
  let { structId } = requirement.currentStructureAttributes;
  requirementViewMore.siteRequirementStructures.map((structure) => {
    if (structure.id === structId) {
      payload.siteReqStructureId = structId;
      payload.structureAttributesVal = JSON.stringify(
        structure.structureAttributesVal
      );
    }
  });

  return {
    type: EDIT_ATTRIBUTES,
    payload: axios.put(
      `${config.BASE_URL}/api/FabricationManagement/UpdatetructureAttributes`,
      payload
    ),
  };
};
