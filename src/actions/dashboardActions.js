import { GET_DASHBOARD_DATA } from "./types";
import store from "../store";
import config from "../config";
import axios from "axios";
import { getUserDetails } from "../utils/auth";


export const getDashboardData = () => {
    const projectId = getUserDetails().projectId
    return {
        type: GET_DASHBOARD_DATA,
        payload: axios.get(`${config.BASE_URL}/api/FabricationManagement/getDashBoardDetails?projectId=${projectId}`)
    }
}