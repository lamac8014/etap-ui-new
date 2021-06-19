import store from '../store';
import axios from 'axios';
import config from '../config';

import{LIST_BUILT_DETAILS} from './types';
import {GET_AS_BUILD_STRUCTURE,ADD_STRUCTURE_COMPONENT} from "./types";

export const builtList = () => {
    return {
        type: LIST_BUILT_DETAILS,
        payload: axios.get(config.BASE_URL + '/api/ComponentType/getcomponenttype')
    }
}

export const buildStructure = () => {
    let projectId = JSON.parse(localStorage.getItem("userDetails")).projectId;
    return {
        type: GET_AS_BUILD_STRUCTURE,
        payload: axios.get(config.BASE_URL +'/api/FabricationManagement/GetAsBuildStructure?id='+projectId),
    };
};

export const addComponent =() => {
    let built= store.getState().built;
    let headers = {
        "Content-Type": "multipart/form-data",
    };
    let data = new FormData();
    data.append("structureId", parseInt(built.structId));
	data.append("dispatchRequirementId", parseInt(built.dispatchReqId));
	data.append("structureCode", built.structCode);
    data.append("projectId", parseInt(built.projId));
    data.append("projectStructureId", parseInt(built.projStructId));
    data.append("drawingNo", built.drNo);
    data.append("estimatedWeight", built.estWeight);
    data.append("structureAttributes", built.structAttri);
    data.append("compCount",parseInt(built.numOfComp));
	data.append("uploadDocs", built.files);
	data.append("remove_docs_filename", built.removeFiles);
    data.append("actualWbs", parseInt(built.actWbs));
	data.append("fabricationYear", built.fabYear);
	data.append("remarks", built.rmark);
	data.append("actualWeight", parseFloat(built.actWeight));
    data.append("reusuability",built.reUse);
    
    return {
		type: ADD_STRUCTURE_COMPONENT,
		payload: axios.post(
			`${config.BASE_URL}/api/FabricationManagement/addStructureComponentForasbuild`,
			data,
			headers
		),
	};
};