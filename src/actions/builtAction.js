import store from '../store';
import axios from 'axios';
import config from '../config';

import{LIST_BUILT_DETAILS} from './types';
import {GET_AS_BUILD_STRUCTURE} from "./types";

export const builtList = () => {
    return {
        type: LIST_BUILT_DETAILS,
        payload: axios.get(config.BASE_URL + '/api/ComponentType/getcomponenttype')
    }
}

export const buildStructure = (projectId) => {
    return {
        type: GET_AS_BUILD_STRUCTURE,
        payload: axios.get(config.BASE_URL +'/api/FabricationManagement/GetAsBuildStructure/'+projectId)
    }
}