import store from "../store";
import axios from "axios";
import config from "../config";
import {
  GET_PROJECT_LIST,
  GET_STRUCT_LIST,
  SAVE_ASSIGN_STRUCT,
  GET_ASSIGN_STRUCT_DETAILS_ID,
  SAVE_ASSIGN_COMP,
} from "./types";
import { getComponentsData } from "../pages/assignStructure/utils";

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

export const saveAssignStruct = () => {
  const scr = store.getState().scr;
  const postData = new FormData();
  postData.append("structureId", scr.structName.value);
  postData.append("projectId", scr.projName.value);
  postData.append("drawingNo", scr.drawingNum);
  postData.append("estimatedWeight", scr.estimatedWeight);
  postData.append("compCount", scr.noOfComponents);
  postData.append("structureCode", scr.structureCode);
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
  scr.uploadData.map((dt) => {
    tmpArr.push({
      compTypeName: dt.compTypeName,
      componentName: dt.component,
      drawingNo: dt.drawingNo,
      componentNo: dt.componentNo,
      isGroup: dt.isGroup,
      leng: dt.leng,
      breath: dt.breath,
      height: dt.height,
      thickness: dt.thickness,
      weight: dt.weight,
      makeType: dt.makeType,
      isTag: dt.isTag,
      qrCode: dt.qrCode,
    });
  });
  const data = {
    structureId: scr.structName.value,
    projectId: scr.projName.value,
    components: scr.uploadData,
  };
  return {
    type: SAVE_ASSIGN_COMP,
    payload: axios.post(
      config.BASE_URL + "/api/StructureComponent/AddComponents",
      data
    ),
  };
};
