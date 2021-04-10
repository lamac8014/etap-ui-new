import {
  GET_DISPATCH_STRUCTURE_DATA,
  GET_ASSIGNED_STRUCTURE_DETAILS,
} from "./types";
import axios from "axios";
import config from "../config";

export const getDispatchStructureData = () => {
  return {
    type: GET_DISPATCH_STRUCTURE_DATA,
    payload: axios.get(
      `${config.BASE_URL}/api/SiteDispatch/GetDispatchStructureForCMPC`
    ),
  };
};

export const getAssignedStructureData = (projStructId) => {
  return {
    type: GET_ASSIGNED_STRUCTURE_DETAILS,
    payload: axios.get(
      `${config.BASE_URL}/api/StructureComponent/GetAssignedStructureDetailsByProjStructId?projStructId=${projStructId}`
    ),
  };
};
