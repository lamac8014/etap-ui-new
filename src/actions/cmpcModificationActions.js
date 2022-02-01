import {
  GET_STRUCTURE_TABLE_DATA,
  GET_COMPONENT_DATA,
  MODIFY_COMPONENTS,
} from "./types";
import store from "../store";
import axios from "axios";
import config from "../config";
import { getUserDetails } from "../utils/auth";

export const getStructureTableData = () => {
  return {
    type: GET_STRUCTURE_TABLE_DATA,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteDispatchReuse/GetDispatchStructureForCMPC?id=1`
    ),
  };
};

export const getComponentData = (id) => {
  return {
    type: GET_COMPONENT_DATA,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteDispatchReuse/GetStructrueComponent?id=${id}`
    ),
  };
};

export const modifyComponents = () => {
  let cmpc = store.getState().cmpc;
  let componentData = cmpc.componentData;
  let uploadData = cmpc.uploadData;
  let id = getUserDetails().id;
  // let data = {
  // 	id: 0,
  // 	dispstructCompId: 0,
  // 	dispatchRequirementId: 0,
  // 	projectStructureId: 0,
  // 	dispStructureId: 0,
  // 	componentId: 0,
  // 	leng: 0,
  // 	breath: 0,
  // 	height: 0,
  // 	thickness: 0,
  // 	weight: 0,
  // 	makeType: "string",
  // 	addplate: "string",
  // 	qrCode: "string",
  // 	createdBy: 0,
  //   }
  let payload = [];
  uploadData.map((item) => {
    if (item.isModified.toLowerCase()[0] === "y") {
      let { dispstructCompId, dispStructureId, makeType } = componentData.find(
        (component) => {
          return component.compId === item.compId;
        }
      );
      let data = {
        dispstructCompId: dispstructCompId,
        dispatchRequirementId: parseInt(cmpc.dispReqId),
        projectStructureId: parseInt(cmpc.projStrId),
        dispStructureId: dispStructureId,
        leng: item.leng,
        breath: item.breath,
        height: item.height,
        thickness: item.thickness,
        weight: item.weight,
        makeType: makeType,
        dcNumber: cmpc.dcNumber,
        createdBy: id,
      };

      payload.push(data);
    }
  });

  return {
    type: MODIFY_COMPONENTS,
    payload: axios.put(
      `${config.BASE_URL}/api/SiteDispatchReuse/ModifyComponentsForDispatch`,
      payload
    ),
  };
};
