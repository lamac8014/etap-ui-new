import { connect } from "react-redux";
import {
	getSiteReqDetailsById,
	createDispatch,
	setActiveItem,
	setSelectedItem,
} from "../../actions/createDispatchActions";
import { sortstructuresBasedOnAttributes } from "../../pages/createDispatch/utils";
import {
	SET_SELECTED_ITEMS,
	RESET_MESSAGE,
	SET_MODAL_DATA,
	CD_SET_SERVICE_TYPE_ID,
	SET_DISPATCH_ERROR,
	RESET_SELECTION,
	SET_SHOW_ATTRIBUTE_MODAL,
	SET_CURRENT_ATTRIBUTE_MODAL_DATA,
	SET_STRUCTURES_FOR_REUSE,
	DISABLE_SITE_REQUIREMENTS,
	TRANSFORM_SITE_REQUIREMENTS,
	SET_SHOW_QUANTITY_MODAL_FLAG,
	SET_QUANTITY,
	SET_NOTES,
	SET_CONFIRMATION_MODAL_FLAG,
	SET_RELEASE_FILTER,
	SET_IS_ATTRIBUTE_FILTER,
} from "../../actions/types";
import { getUserDetails } from "../../utils/auth";

import DispatchStructure from "../../pages/createDispatch/DispatchStructure";
import store from "../../store";
const mapDispatchToProps = (dispatch, props) => {
	return {
		onPageLoad(structId, siteReqId) {
			dispatch(getSiteReqDetailsById(structId, siteReqId)).then(() => {
				this.transformSiteRequirement(structId, siteReqId);
			});
			// dispatch({
			//   type: CD_SET_CURRENT_REQUIREMENT,
			//   payload: JSON.parse(localStorage.getItem("currentRequirementInfo")),
			// });
			// dispatch(setActiveItem(structId,siteReqId));
		},
		transformSiteRequirement(structId, siteReqId, sort = false) {
			let createDisp = store.getState().createDispatch;
			let siteReq = JSON.parse(JSON.stringify(createDisp.siteReqDetailsById));
			let tmpArr = [];
			let availability = "-",
				availDate = "-",
				disabled = false;
			let currentDate = new Date();
			siteReq &&
				siteReq.map((structure) => {
					if (structure.surPlusFromDate) {
						let surplusDate = new Date(structure.surPlusFromDate);
						if (currentDate.getTime() > surplusDate.getTime()) {
							availability = "YES";
							availDate = structure.surPlusFromDate.split("T")[0];
							// disabled = false;
						}
					} else {
						availability = "-";
						availDate = "-";
						disabled = true;
					}
					let parsedAttr = JSON.parse(structure.projectStructureAttributes);
					structure.projectStructureAttributes = parsedAttr;
					parsedAttr.map((item) => {
						structure[item.name] = item.value ? item.value : 0;
					});
					let tmpObj = {
						...structure,
						availability,
						availDate,
						disabled,
					};
					tmpArr.push(tmpObj);
				});
			tmpArr = sort
				? sortstructuresBasedOnAttributes(
						tmpArr,
						store.getState().createDispatch.chosenAttribute
				  )
				: tmpArr;
			dispatch({
				type: TRANSFORM_SITE_REQUIREMENTS,
				payload: tmpArr,
				structId,
				siteReqId,
			});
		},
		handleChangeReleaseFilter(obj) {
			dispatch({
				type: SET_RELEASE_FILTER,
				payload: obj.value,
			});
			let createDisp = store.getState().createDispatch;
			let siteReqId = createDisp.siteReqId;
			let structId = createDisp.structId;
			let releaseFilter = createDisp.releaseFilter;
			dispatch(getSiteReqDetailsById(structId, siteReqId, releaseFilter)).then(
				() => {
					this.transformSiteRequirement(structId, siteReqId);
				}
			);
		},
		handleChangeAttributeFilter(obj) {
			dispatch({
				type: SET_IS_ATTRIBUTE_FILTER,
				payload: {
					flag: true,
					chosenAttr: obj.value,
				},
			});
			let createDisp = store.getState().createDispatch;
			let siteReqId = createDisp.siteReqId;
			let structId = createDisp.structId;
			let isAttributeBasedFilter = createDisp.isAttributeBasedFilter;
			dispatch(
				getSiteReqDetailsById(structId, siteReqId, null, isAttributeBasedFilter)
			).then(() => {
				this.transformSiteRequirement(structId, siteReqId, true);
			});
		},
		setSelectedStructures(value) {
			// dispatch({
			//   type: SET_SELECTED_ITEMS,
			//   payload: value,
			// });
			dispatch(setSelectedItem(value));
		},
		showAttributeViewMore(structCode) {
			let currentAttr = store
				.getState()
				.createDispatch.transformedSiteReq.filter((item) => {
					return item.structureCode === structCode;
				})[0];
			dispatch({
				type: SET_CURRENT_ATTRIBUTE_MODAL_DATA,
				payload: currentAttr.projectStructureAttributes,
			});
			dispatch({
				type: SET_SHOW_ATTRIBUTE_MODAL,
				payload: true,
			});
		},
		hideAttributeViewMore() {
			dispatch({
				type: SET_CURRENT_ATTRIBUTE_MODAL_DATA,
				payload: "",
			});
			dispatch({
				type: SET_SHOW_ATTRIBUTE_MODAL,
				payload: false,
			});
		},
		setStructuresForReuse(servTypeId) {
			let createDisp = store.getState().createDispatch;
			let selectedItems = JSON.parse(JSON.stringify(createDisp.selectedItems));
			let transformedSiteReq = JSON.parse(
				JSON.stringify(createDisp.transformedSiteReq)
			);
			selectedItems.map((item) => {
				item.serviceTypeId = servTypeId;
			});
			let totalStructures = [
				...createDisp.dispatchStructures,
				...selectedItems,
			];
			dispatch({
				type: SET_STRUCTURES_FOR_REUSE,
				payload: totalStructures,
			});
			//disable the checkboxes
			totalStructures.map((item) => {
				transformedSiteReq.map((req) => {
					if (req.structureCode === item.structureCode) {
						req.disabled = true;
					}
				});
			});
			dispatch({
				type: DISABLE_SITE_REQUIREMENTS,
				payload: transformedSiteReq,
			});
			dispatch({
				type: SET_SELECTED_ITEMS,
				payload: selectedItems,
				reuseResult: true,
				fabOutResult: false,
			});
		},
		setStructuresForFabOut() {
			let createDisp = store.getState().createDispatch;
			let currentReqInfo = JSON.parse(
				localStorage.getItem("currentRequirementInfo")
			);
			let tempObj = {
				...currentReqInfo,
				serviceTypeId: createDisp.serviceTypeId,
				quantity: createDisp.quantity,
				notes: createDisp.notes,
			};
			let totalStructures = [...createDisp.dispatchStructures, tempObj];
			dispatch({
				type: SET_STRUCTURES_FOR_REUSE,
				payload: totalStructures,
			});
			dispatch({
				type: SET_SHOW_QUANTITY_MODAL_FLAG,
				payload: false,
			});
			dispatch({
				type: SET_QUANTITY,
				payload: "",
			});
			dispatch({
				type: SET_NOTES,
				payload: "",
			});
		},
		setServiceTypeId(value) {
			dispatch({
				type: CD_SET_SERVICE_TYPE_ID,
				payload: value,
			});
		},
		setDispatchError(flag, message) {
			dispatch({
				type: SET_DISPATCH_ERROR,
				payload: {
					flag,
					message,
				},
			});
		},
		showGetQuantityModal() {
			dispatch({
				type: SET_SHOW_QUANTITY_MODAL_FLAG,
				payload: true,
			});
		},
		hideGetQuantityModal() {
			dispatch({
				type: SET_SHOW_QUANTITY_MODAL_FLAG,
				payload: false,
			});
			dispatch({
				type: CD_SET_SERVICE_TYPE_ID,
				payload: "",
			});
		},
		showConfirmationModal() {
			dispatch({
				type: SET_CONFIRMATION_MODAL_FLAG,
				payload: true,
			});
		},
		hideConfirmationModal() {
			dispatch({
				type: SET_CONFIRMATION_MODAL_FLAG,
				payload: false,
			});
			let createDispatch = store.getState().createDispatch;
			let transformedSiteReq = JSON.parse(
				JSON.stringify(createDispatch.transformedSiteReq)
			);
			transformedSiteReq.map((item) => {
				if (item.availability === "YES") {
					item.disabled = false;
				}
				item.checked = false;
			});
			dispatch({
				type: DISABLE_SITE_REQUIREMENTS,
				payload: transformedSiteReq,
			});
			dispatch({
				type: SET_STRUCTURES_FOR_REUSE,
				payload: [],
			});
			dispatch({
				type: SET_SELECTED_ITEMS,
				reuseResult: false,
				fabOutResult: true,
			});
		},

		handleChangeQuantity(value) {
			dispatch({
				type: SET_QUANTITY,
				payload: value,
			});
		},
		handleChangeNotes(value) {
			dispatch({
				type: SET_NOTES,
				payload: value,
			});
		},
		createDispatchApi() {
			let createDisp = store.getState().createDispatch;
			let userDetails = getUserDetails();
			createDisp.dispatchStructures.map((item) => {
				let tempObj = {
					siteRequirementId: item.siteRequirementId,
					toProjectId: item.projectId ? item.projectId : item.fromProjectId,
					projectStructureId: item.projectStructureId
						? item.projectStructureId
						: 0,
					structureId: item.structureId,
					serviceTypeId: item.serviceTypeId,
					quantity: item.quantity
						? item.quantity
						: createDisp.dispatchStructures.filter((struct) => {
								return struct.serviceTypeId === item.serviceTypeId;
						  }).length,
					transferPrice: " ",
					status: item.projectCurrentStatus ? item.projectCurrentStatus : "NEW",
					statusInternal: item.projectStructureStatus
						? item.projectStructureStatus
						: "NEW",
					roleId: userDetails.roleId,
					createdBy: userDetails.id,
					isDelete: false,
					notes: item.notes ? item.notes : " ",
				};
				console.log("inside here dispatch api", tempObj);
				dispatch(createDispatch(tempObj));
			});
			props.history.push("/etrack/dispatch/twccDispatch");
			dispatch({
				type: SET_SELECTED_ITEMS,
				payload: [],
				reuseResult: true,
				fabOutResult: false,
			});
			dispatch({
				type: RESET_SELECTION,
			});
		},
		resetMessage() {
			dispatch({
				type: RESET_MESSAGE,
			});
		},
	};
};

const mapStateToProps = (state) => {
	const createDispatch = store.getState().createDispatch;
	return {
		createDispatch,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DispatchStructure);
