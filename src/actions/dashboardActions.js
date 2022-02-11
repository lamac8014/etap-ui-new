import { GET_BU_LIST_DASHBOARD, GET_DASHBOARD_DATA, GET_PROJECT_LIST_DASHBOARD } from "./types";
import store from "../store";
import config from "../config";
import axios from "axios";
import { getUserDetails } from "../utils/auth";


export const getDashboardData = (value) => {
    return {
        type: GET_DASHBOARD_DATA,
        payload: axios.get(`${config.BASE_URL}/api/FabricationManagement/getDashBoardDetails?projectId=${value}`)
    }
}

export const getBuList = () => {
    return {
        type: GET_BU_LIST_DASHBOARD,
        payload: axios.get(`${config.BASE_URL}/api/BU/buCodeList`)
    }
}

export const getProjectList = () => {
    return {
        type: GET_PROJECT_LIST_DASHBOARD,
        payload: axios.get(`${config.BASE_URL}/api/Project/projCodeList`)
    }
}