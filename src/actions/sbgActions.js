import {
  ADD_SBG_DATA,
  GET_SGB_DATA,
  GET_SINGLE_SBG,
  UPDATE_SBG_DATA,
} from "./types";
import axios from "axios";
import config from "../config";
import store from "../store";

export const getSbgData = () => {
  return {
    type: GET_SGB_DATA,
    payload: axios.get(
      `${config.BASE_URL}/api/StrategicBusiness/getStrategicBusinessList`
    ),
  };
};

export const addSbgData = () => {
  let sbg = store.getState().sbg;
  let sbgName = sbg.sbgName;
  let bodyData = {
    name: sbgName,
    isActive: sbg.status.value === "Active" ? true : false,
  };
  return {
    type: ADD_SBG_DATA,
    payload: axios.post(
      `${config.BASE_URL}/api/StrategicBusiness/createStrategicBusiness`,
      bodyData
    ),
  };
};

export const getSingleSbg = (id) => {
  return {
    type: GET_SINGLE_SBG,
    payload: axios.get(
      `${config.BASE_URL}/api/StrategicBusiness/getStrategicBusinessById/${id}`
    ),
  };
};

export const updateSbgData = () => {
  let sbg = store.getState().sbg;
  let id = sbg.sbgId;
  let sbgName = sbg.sbgName;
  let bodyData = {
    name: sbgName,
    isActive: sbg.status.value === "Active" ? true : false,
  };
  return {
    type: UPDATE_SBG_DATA,
    payload: axios.put(
      `${config.BASE_URL}/api/StrategicBusiness/updateStrategicBusiness/${id}`,
      bodyData
    ),
  };
};
