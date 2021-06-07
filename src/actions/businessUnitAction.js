import store from '../store';
import axios from 'axios';
import config from '../config';
import { 
    ADD_BUSINESS_UNIT,
    GET_BUSINESS_UNIT_TYPE,
    LIST_BUSINESS_UNIT,
    UPDATE_BUSINESS_UNIT,
    LIST_IC_CODES,
    BU_STATUS,
} from "./types";

export const addBusinessUnit = () => {
    const businessUnit = store.getState().businessUnit;
    let status;
    //console.log(buStatus);
    if(businessUnit.buStatus.value === "Active"){
        status=true;
    } else{
        status=false;
    }
      const body={
        icId : businessUnit.icCode.value,
        lstBussUnit: businessUnit.businessUnitList,
        isActive:status,
        };
    return {
        type: ADD_BUSINESS_UNIT,
        payload: axios.post(config.BASE_URL + '/api/BU/createBU', body)
    }
}
export const updateBusinessUnitType = (id) => {
    
    const businessUnit = store.getState().businessUnit;
    //console.log(buStatus);
    const status=(businessUnit.buStatus.value==="InActive")?false:true
      const body={
        icId:businessUnit.icCode.value,
        name: businessUnit.buName,
        isActive:status,
        isDelete: false,
      };
    //console.log("++++++++++++")
    //console.log(businessUnit)
    //console.log(buID)
    //console.log(buStatus)
    //console.log("++++++++++++")
    return {
        type: UPDATE_BUSINESS_UNIT,
        payload: axios.put(config.BASE_URL+"/api/BU/updateBU/"+businessUnit.buID, body)
    }
}


export const businessUnitList = () => {
    return {
        type: LIST_BUSINESS_UNIT,
        payload: axios.get(config.BASE_URL + '/api/BU/getBUlist')
    }
}


export const getICCodes = () => {
    return {
        type: LIST_IC_CODES,
        payload: axios.get(config.BASE_URL + '/api/IC/icCodeList')
    }
}

export const getSingleBusinessUnitType = (id) => {
    return {
        type: GET_BUSINESS_UNIT_TYPE,
        payload: axios.get(config.BASE_URL + '/api/BU/getBUDetailsById/'+id)
    }
}
