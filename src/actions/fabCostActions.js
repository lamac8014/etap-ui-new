import store from "../store";
import axios from "axios";
import config from "../config";
import {
  GET_FABRICATION_STRUCTURE,
  GET_FABRICATION_COST,
  ADD_COMPONENT_COST,
  GET_FABCOST_COMPONENT,
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
  };
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
