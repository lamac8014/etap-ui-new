import store from "../store";
import axios from "axios";
import config from "../config";
import {
  LIST_PROJECT,
  GET_SINGLE_PROJ,
  GET_SEGMENT_LIST,
  GET_IC_LIST,
  GET_BU_LIST,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  PROJ_STATUS
} from "./types";

//Projects

export const projectList = () => {
  return {
    type: LIST_PROJECT,
    payload: axios.get(config.BASE_URL + "/api/Project/getProjDetails"),
  };
};

export const getSingleProj = (id) => {
  return {
    type: GET_SINGLE_PROJ,
    payload: axios.get(
      config.BASE_URL + "/api/Project/getProjDetailsById/" + id
    ),
  };
};

export const getSegmentList = () => {
  return {
    type: GET_SEGMENT_LIST,
    payload: axios.get(config.BASE_URL + "/api/Segment/getsegmentlist"),
  };
};

export const getICList = () => {
  return {
    type: GET_IC_LIST,
    payload: axios.get(config.BASE_URL + "/api/IC/icCodeList"),
  };
};

export const getBUList = () => {
  return {
    type: GET_BU_LIST,
    payload: axios.get(config.BASE_URL + "/api/BU/buCodeList"),
  };
};

export const createProj = () => {
  const proj = store.getState().proj;
  const data = {
    name: proj.projectName,
    jobCode: proj.jobCode,
    edrcCode: proj.edrcCode,
    area: proj.area,
    projCode: proj.projectName+"-code",
    icId: proj.independentCompany.value,
    buId: proj.businessUnit.value,
    projectSiteLocationDetails: proj.locations,
  };
  return {
    type: CREATE_PROJECT,
    payload: axios.post(config.BASE_URL + "/api/Project/createProj", data),
  };
};

export const updateProj = () => {
  const proj = store.getState().proj;
  const status=(proj.projStatus.value==="InActive")?false:true
  const data = {
    id: proj.selectedProjId,
    name: proj.projectName,
    jobCode: proj.jobCode,
    edrcCode: proj.edrcCode,
    projCode: proj.projCode,
    area: proj.area,
    icId: proj.independentCompany.value,
    buId: proj.businessUnit.value,
    projectSiteLocationDetails: proj.locations,
    isActive: status,
    isDelete: false,
  };
  return {
    type: UPDATE_PROJECT,
    payload: axios.put(config.BASE_URL + "/api/Project/updateProj/" + proj.selectedProjId, data),
  };
};
