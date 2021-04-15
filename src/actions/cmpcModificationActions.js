import {
	GET_STRUCTURE_TABLE_DATA,
	GET_COMPONENT_DATA,
	MODIFY_COMPONENTS,
} from "./types";
import store from "../store";
import axios from "axios";
import config from "../config";
import { getUserDetails } from "../utils/auth";

export const getStructureTableData = () => {
	return {
		type: GET_STRUCTURE_TABLE_DATA,
		payload: axios.get(
			`${config.BASE_URL}/api/SiteDispatchReuse/GetDispatchStructureForCMPC?id=1`
		),
	};
};

export const getComponentData = (id) => {
	return {
		type: GET_COMPONENT_DATA,
		payload: axios.get(
			`${config.BASE_URL}/api/SiteDispatchReuse/GetStructrueComponent?id=${id}`
		),
	};
};

export const modifyComponents = () => {
	let cmpc = store.getState().cmpc;
	let currentComp = cmpc.currentComp;
	let modifiedData = cmpc.modifiedData;
	let id = getUserDetails().id;
	let data = {
		dispstructCompId: currentComp.dispStructureId,
		leng: parseInt(modifiedData.length),
		breath: parseInt(modifiedData.breadth),
		height: parseInt(modifiedData.height),
		thickness: parseInt(modifiedData.thickness),
		weight: parseInt(modifiedData.weight),
		makeType: currentComp.makeType,
		addplate: "string",
		qrCode: "string",
		createdBy: id,
	};
	return {
		type: MODIFY_COMPONENTS,
		payload: axios.put(
			`${config.BASE_URL}/api/SiteDispatchReuse/ModifyComponentsForDispatch`,
			data
		),
	};
};
