import store from '../store';
import axios from 'axios';
import config from '../config';
import {GET_AS_BUILD_STRUCTURE_COST,
        ADD_STRUCTURE_COST,
        GET_COMPONENT_DETAILS_COST} from "./types";
import { getUserDetails } from "../utils/auth";
export const buildStructureCost = () => {
    //let projId = JSON.parse(localStorage.getItem("userDetails")).projId;
    return {
        type: GET_AS_BUILD_STRUCTURE_COST,
        payload: axios.get(
           `${config.BASE_URL}/api/FabricationManagement/GetAsBuildStructureCost?id=1`
        ),
    };
};
export const addStructCost = () => {
    let fabCost= store.getState().fabCost;
    let headers = {
        "Content-Type": "multipart/form-data",
    };
    let data = new FormData();
    data.append("structureId", parseInt(fabCost.structId));
	data.append("dispatchRequirementId", parseInt( fabCost.dispatchReqId));
	data.append("structureCode",  fabCost.structCode);
    data.append("projectId", parseInt( fabCost.projId));
    data.append("projectStructureId", parseInt( fabCost.projStructId));
    data.append("uploadDocs", fabCost.files);
    data.append("remove_docs_filename", fabCost.removeFiles);
    data.append("cost", parseInt( fabCost.structCost));

    return {
		type: ADD_STRUCTURE_COST,
		payload: axios.post(
			`${config.BASE_URL}/api/FabricationManagement/AddStructureCost`,
			data,
			headers
		),
	};
};
export const getCompDetails = () => {
    //const projectId = getUserDetails().projectId;
    return {
        type: GET_COMPONENT_DETAILS_COST,
        payload: axios.get(
           `${config.BASE_URL}/api/FabricationManagement/GetStructrueFabraiationComponent?id=1`
        ),
    };
    
}