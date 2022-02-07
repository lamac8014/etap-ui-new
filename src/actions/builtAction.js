import store from "../store";
import axios from "axios";
import config from "../config";

import {
  AS_BUILT_GET_COMPONENTS,
  AS_BUILT_LIST_WBS_CODES,
  LIST_BUILT_DETAILS,
} from "./types";
import { GET_AS_BUILD_STRUCTURE, ADD_STRUCTURE_COMPONENT } from "./types";
import { parseDate } from "../utils/common";
import { getUserDetails } from "../utils/auth";

export const builtList = () => {
  return {
    type: LIST_BUILT_DETAILS,
    payload: axios.get(config.BASE_URL + "/api/ComponentType/getcomponenttype"),
  };
};

export const getWbsList = () => {
  let id = getUserDetails().projectId
  return {
    type: AS_BUILT_LIST_WBS_CODES,
    payload: axios.get(config.BASE_URL + "/api/WBS/GetProjectWBSCodeList/" + id),
  };
};

export const buildStructure = () => {
  let projectId = JSON.parse(localStorage.getItem("userDetails")).projectId;
  return {
    type: GET_AS_BUILD_STRUCTURE,
    payload: axios.get(
      config.BASE_URL +
        "/api/FabricationManagement/GetAsBuildStructure?id=" +
        projectId
    ),
  };
};

export const addComponent = () => {
  let built = store.getState().built;
  let currentStructure = built.currentStructure;
  let actualWbs = built.wbsCodesList.find((wbs) => {
    return (
      wbs.workBreakDownCode === built.wbsItem.wbsName &&
      wbs.segment === built.wbsItem.segmentName &&
      wbs.subSegment === built.wbsItem.subSegmentName &&
      wbs.element === built.wbsItem.elementName
    );
  });
  // console.log(built.wbsItem, actualWbs);

  built.expRelDate = built.expRelDate.replace("-", "/")
  let headers = {
    "Content-Type": "multipart/form-data",
  };
  let data = new FormData();
  data.append("structureId", parseInt(currentStructure.structureId));
  data.append(
    "dispatchRequirementId",
    parseInt(currentStructure.dispatchRequirementId)
  );
  data.append("structureCode", currentStructure.structureCode);
  data.append("projectId", parseInt(currentStructure.projectId));
  data.append(
    "projectStructureId",
    parseInt(currentStructure.projectStructureId)
  );
  // data.append("drawingNo", built.drNo);
  data.append("estimatedWeight", built.estWeight);
  // data.append("structureAttributes", built.structAttri);
  // data.append("compCount", parseInt(built.numOfComp));
  data.append("uploadDocs", built.files);
  data.append("actualWbs", parseInt(actualWbs.id));
  data.append("fabricationYear", parseDate(built.fabYear));
  data.append("remarks", built.rmark);
  data.append("actualWeight", parseFloat(built.estWeight));
  data.append("reusuability", built.reUse.value);
  data.append("expReleaseDate", built.expRelDate);

  
  return {
    type: ADD_STRUCTURE_COMPONENT,
    payload: axios.post(
      `${config.BASE_URL}/api/FabricationManagement/addStructureComponentForasbuild`,
      data,
      headers
    ),
  };
};

export const getComponentList = (projectStrId) => {
  return {
    type: AS_BUILT_GET_COMPONENTS,
    payload: axios.get(
      `${config.BASE_URL}/api/StructureComponent/GetAssignedStructureDetailsByProjStructId?projStructId=${projectStrId}`
    ),
  };
};
