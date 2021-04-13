import {
	GET_STRUCTURE_TABLE_DATA,
	GET_COMPONENT_DATA,
	MODIFY_COMPONENTS,
} from "./types";
import store from "../store";
import axios from "axios";
import config from "../config";

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
			`${config.BASE_URL}/api/SiteDispatch/GetStructrueComponent?id=${id}`
		),
	};
};

export const modifyComponents = () => {
	let cmpc = store.getState().cmpc;
	let currentComp = cmpc.currentComp;
	let modifiedData = cmpc.modifiedData;
	let id = 0;
	let data = {
		dispstructCompId: currentComp.dispStructureId,
		leng: modifiedData.length,
		breath: modifiedData.breadth,
		height: modifiedData.height,
		thickness: modifiedData.thickness,
		weight: modifiedData.weight,
		makeType: currentComp.makeType,
		addplate: "string",
		qrCode: "string",
		createdBy: 0,
	};
	return {
		type: MODIFY_COMPONENTS,
		payload: axios.put(
			`${config.BASE_URL}/api/SiteDispatch/GetStructrueComponent?id=${id}`,
			data
		),
	};
};
