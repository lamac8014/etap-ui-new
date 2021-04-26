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
	// let data = {
	// 	id: 0,
	// 	dispstructCompId: 0,
	// 	dispatchRequirementId: 0,
	// 	projectStructureId: 0,
	// 	dispStructureId: 0,
	// 	componentId: 0,
	// 	leng: 0,
	// 	breath: 0,
	// 	height: 0,
	// 	thickness: 0,
	// 	weight: 0,
	// 	makeType: "string",
	// 	addplate: "string",
	// 	qrCode: "string",
	// 	createdBy: 0,
	//   }
	let data = {
		id: 0,
		dispstructCompId: currentComp.dispStructureId,
		dispatchRequirementId: parseInt(cmpc.dispReqId),
		projectStructureId: parseInt(cmpc.projStrId),
		dispStructureId: currentComp.dispStructureId,
		componentId: 0,
		leng: modifiedData.length
			? parseInt(modifiedData.length)
			: currentComp.leng,
		breath: modifiedData.breadth
			? parseInt(modifiedData.breadth)
			: currentComp.breath,
		height: modifiedData.height
			? parseInt(modifiedData.height)
			: currentComp.height,
		thickness: modifiedData.thickness
			? parseInt(modifiedData.thickness)
			: currentComp.thickness,
		weight: modifiedData.weight
			? parseInt(modifiedData.weight)
			: currentComp.weight,
		makeType: currentComp.makeType,
		addplate: cmpc.addplate ? cmpc.addPlate : "0",
		qrCode: "0",
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
