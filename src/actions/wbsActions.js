import store from '../store';
import axios from 'axios';
import config from '../config';
import { LIST_PROJECT_CODES,SAVE_WBS_DATA,LIST_WBS_DATA,SINGLE_WBS_DATA } from "./types";



export const projectCodesList = () => {
    return {
        type: LIST_PROJECT_CODES,
        payload: axios.get(config.BASE_URL + '/api/Project/projCodeList')
    }
}

export const wbsList = () => {
    return {
        type: LIST_WBS_DATA,
        payload: axios.get(config.BASE_URL + '/api/WBS/GetWBS')
    }
}

export const singleWBS = (id) => {
    return {
        type: SINGLE_WBS_DATA,
        payload: axios.get(config.BASE_URL + '/api/WBS/GetWBS/'+id)
    }
}

export const saveWBSData = () => {
    const wbs = store.getState().wbs;
    const wbsProjectName = wbs.wbsProjectName.value;
    let wbsUploadedData=wbs.wbsUploadedData;
    let result = wbsUploadedData.map(function(el) {
        var o = Object.assign({}, el);
        o.projectId = wbsProjectName;
        return o;
      })
    return {
        type: SAVE_WBS_DATA,
        payload: axios.post(config.BASE_URL + '/api/WBS/BulkUpload',result)
    }
}

