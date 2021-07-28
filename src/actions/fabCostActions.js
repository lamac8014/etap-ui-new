import store from '../store';
import axios from 'axios';
import config from '../config';
import {GET_FABRICATION_STRUCTURE,GET_FABRICATION_COST} from "./types";
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

export const getFabricationCost = () => {
    let projectId = JSON.parse(localStorage.getItem("userDetails")).projectId;
    return {
        type: GET_FABRICATION_COST,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/GetStructrueComponent?id=${projectId}`
        ),
    };
};