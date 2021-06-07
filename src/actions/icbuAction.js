import store from "../store";
import axios from "axios";
import config from "../config";
import { 
    LIST_ICBU,
    GET_SINGLE_ICBU,
    CREATE_ICBU,
    UPDATE_ICBU,
    GET_BU_LIST,
    GET_IC_LIST,
    IC_STATUS
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
  const {icbu,icStatus} = store.getState().icbu;
      let status;
      console.log(icStatus);
      if(icStatus.value === "Active"){
        status=true;
    } else{
        status=false;
    }
  const data = {
      name:icbu.icName,
      description:icbu.icDescription,
      isActive: status,
      isDelete: false,
    };
  return {
    type: CREATE_ICBU,
    payload: axios.post(config.BASE_URL + "/api/IC/createIC", data),
  };
};

export const updateIcbu = (id) => {
  const icbu = store.getState().icbu;
  //console.log(icStatus);

  const status=(icbu.icStatus.value==="InActive")?false:true
  const data = {
    id:icbu.icID,
    name: icbu.icName,
    description:icbu.icDescription,
    isActive: status,
    isDelete: false,
  };
  //console.log(`${config.BASE_URL}​/api/IC/updateIC/${icID}`);
  //console.log(data)
  return {
    type: UPDATE_ICBU,
    payload: axios.put(config.BASE_URL + "/api/IC/updateIC/" +icbu.icID, data),
  };
};
