import store from "../store";
import axios from "axios";
import config from "../config";
import { 
    LIST_ICBU,
    GET_SINGLE_ICBU,
    CREATE_ICBU,
    UPDATE_ICBU,
    GET_BU_LIST,
    GET_IC_LIST

 } from "./types";

//Projects

export const icbuList = () => {
  return {
    type: LIST_ICBU,
    payload: axios.get(config.BASE_URL + "/api/IC/getIClist"),
  };
};

export const getSingleIcbu = (id) => {
  return {
    type: GET_SINGLE_ICBU,
    payload: axios.get(
      config.BASE_URL + "/api/IC/getICDetailsById/" + id
    ),
  };
};

export const getICList = () => {
  return {
    type: GET_IC_LIST,
    payload: axios.get(config.BASE_URL + "/api/IC/getIClist"),
  };
};

export const getBUList = () => {
  return {
    type: GET_BU_LIST,
    payload: axios.get(config.BASE_URL + "/api/BU/buCodeList"),
  };
};

export const createIcbu = () => {
  const icbu = store.getState().icbu;
  const data = {
      "name": icbu.icName,
      "description": icbu.icDescription
    };
  return {
    type: CREATE_ICBU,
    payload: axios.post(config.BASE_URL + "/api/IC/createIC", data),
  };
};

export const updateIcbu = () => {
  const icbu = store.getState().icbu;
  const data = {
    "name": icbu.icName,
    "description": icbu.icDescription
  };
  return {
    type: UPDATE_ICBU,
    payload: axios.put(config.BASE_URL + "/api/IC/updateIC/" + icbu.icID, data),
  };
};
