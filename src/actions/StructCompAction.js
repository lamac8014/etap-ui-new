import store from "../store";
import axios from "axios";
import config from "../config";
import {
  GET_PROJECT_LIST,
  GET_STRUCT_LIST,
  SAVE_ASSIGN_STRUCT,
  GET_ASSIGN_STRUCT_DETAILS_ID,
  SAVE_ASSIGN_COMP,
  GET_STRUCTURE_CODE_LIST,
  GET_ASSIGN_STRUCTURE_BY_PROJSTR_ID,
} from "./types";
import { getComponentsData } from "../pages/assignStructure/utils";

export const getStructureCodeList = () => {
  const scr = store.getState().scr;
  const projId = scr.projName.value;
  const structId = scr.structName.value;
  return {
    type: GET_STRUCTURE_CODE_LIST,
    payload: axios.get(
      `${config.BASE_URL}/api/StructureComponent/GetStructureCodeList?projectId=${projId}&strcutureId=${structId}`
    ),
  };
};

export const getProjList = () => {
  return {
    type: GET_PROJECT_LIST,
    payload: axios.get(config.BASE_URL + "/api/Project/projCodeList"),
  };
};

export const getStructList = () => {
  const scr = store.getState().scr;
  return {
    type: GET_STRUCT_LIST,
    payload: axios.get(config.BASE_URL + "/api/Structure/structureCodeList"),
  };
};

export const getAssignStructDetails = () => {
  const scr = store.getState().scr;
  const projId = scr.projName.value;
  const structId = scr.structName.value;
  return {
    type: GET_ASSIGN_STRUCT_DETAILS_ID,
    payload: axios.get(
      config.BASE_URL +
        "/api/StructureComponent/GetAssignedStructureDetailsById?structId=" +
        structId +
        "&projectId=" +
        projId
    ),
  };
};

export const getAssignStructDetailsByProjStrId = (projStrId) => {
  return {
    type: GET_ASSIGN_STRUCTURE_BY_PROJSTR_ID,
    payload: axios.get(
      `${config.BASE_URL}/api/StructureComponent/GetAssignedStructureDetailsByProjStructId?projStructId=${projStrId}`
    ),
  };
};

export const saveAssignStruct = () => {
  const scr = store.getState().scr;
  const postData = new FormData();
  postData.append("structureId", scr.structName.value);
  postData.append("projectId", scr.projName.value);
  postData.append("drawingNo", scr.drawingNum);
  postData.append("estimatedWeight", scr.estimatedWeight);
  postData.append("compCount", scr.noOfComponents);
  postData.append("structureCode", scr.structureCode.label);
  scr.structureCode.value ?
    postData.append("projectStructureId", scr.structureCode.value) : 
    postData.append("projectStructureId", 0)
  scr.structAttri.map((attr) => {
    delete attr.id;
  });
  postData.append("structureAttributes", JSON.stringify(scr.structAttri));
  for (let i = 0; i < scr.files.length; i++) {
    if (scr.files[i].isNew === true) {
      postData.append("uploadDocs", scr.files[i]);
    }
  }
  scr.removeFiles.length > 0 &&
    postData.append("remove_docs_filename", scr.removeFiles.join());

  const configHeader = {
    headers: { "content-type": "multipart/form-data" },
  };
  return {
    type: SAVE_ASSIGN_STRUCT,
    payload: axios.post(
      config.BASE_URL + "/api/StructureComponent/assignStructureComponent",
      postData,
      configHeader
    ),
  };
};

export const saveAssignComp = () => {
  const scr = store.getState().scr;
  let tmpArr = [];
  debugger;
  scr.uploadData.map((dt) => {
    tmpArr.push({
      compTypeName: dt.compTypeName,
      compId: dt.compId ? dt.compId : null,
      componentName: dt.component,
      drawingNo: dt.drawingNo,
      componentNo: dt.componentNo,
      isGroup: dt.isGroup === "yes" ? "true" : "false",
      leng: dt.leng,
      breath: dt.breath,
      height: dt.height,
      thickness: dt.thickness,
      weight: dt.weight,
      makeType: dt.makeType,
      isTag: dt.isTag === "yes" ? "true" : "false",
      qrCode: dt.qrCode,
    });
  });
  const data = {
    projStructId: scr.structureCode.value,
    components: tmpArr,
  };
  return {
    type: SAVE_ASSIGN_COMP,
    payload: axios.post(
      config.BASE_URL + "/api/StructureComponent/AddComponents",
      data
    ),
  };
};
