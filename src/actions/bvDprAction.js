import {GET_FABRICATION_COST_LIST, GET_COST_HIRING} from "./types"
import axios from "axios"
import config from "../config"

export const getFabricationCostList = () => {
    return {
        type: GET_FABRICATION_COST_LIST,
        payload: axios.get(`${config.BASE_URL}/api/FabricationManagement/getFabricationCostList`)
    }
}

export const getCostHiring = (cost, date) => {
    date = date.split("T")[0]
    return {
        type: GET_COST_HIRING,
        payload: axios.get(`${config.BASE_URL}/api/PhysicalVerification/GetPhysicalVerificationCostHiring?amt=${cost}&dateval=${date}`)
    }
}