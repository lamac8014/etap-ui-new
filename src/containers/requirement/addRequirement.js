import { connect } from "react-redux";

import store from "../../store";

import {
  PROJECT_NAME,
  STRUCTURE_NAME,
  STRUCTURE_ID,
  NUMBER_OF_COMPONENTS,
  DRAWING_NO,
  QUANTITY,
  REQUIRED_FOR_WORK_BREAK,
  REQUIRED_BY,
  ACTUAL_WORK_BREAK,
  PLANNED_START_DATE,
  ACTUAL_START_DATE_OF_USAGE,
  PLANNED_RELEASE_DATE,
  EXPECTED_RELEASE_DATE,
  MR_NUMBER,
  REMARKS,
  RESET_REQUIREMENT_FORM,
  SITE_REQUIRMENT_LIST,
  SHOW_MODAL,
  SET_ACTIVE_ITEM,
  RESET_REQUIREMENT_MODAL,
  SAVE_REQUIREMENT_MODAL_VALUES,
  SET_ATTRIBUTE_VALUE,
  REQUIREMENT_VIEW_MORE,
  WBS_CODE_LIST,
  SET_WBS_CODE,
  SET_WBS_SEGMENT,
  SET_WBS_SUBSEGMENT,
  SET_WBS_ELEMENT,
  WBS_SEGMENT_LIST,
  WBS_SUBSEGMENT_LIST,
  WBS_ELEMENT_LIST,
} from "../../actions/types";
import AddRequirement from "../../pages/requirements/AddRequirements";
import { getUserDetails } from "../../utils/auth";
import {
  getProjectList,
  getWBSList,
  addSiteRequirement,
  addRequirement,
  getProjectStructureData,
} from "../../actions/requirementAction";
import swal from "sweetalert";

const mapDispatchToProps = (dispatch) => {
  return {
    saveRequirement() {
      dispatch(addRequirement())
        .then((response) => {
          swal(response.value.data.message, {
            icon: "success",
          });
          dispatch({ type: RESET_REQUIREMENT_FORM });
        })
        .catch((err) => {
          swal("Create requirement failed", {
            icon: "error",
          });
        });
    },
    resetRequirement() {
      dispatch({ type: RESET_REQUIREMENT_FORM });
    },

    handleChangeRequirementProjectName(value) {
      dispatch({
        type: PROJECT_NAME,
        payload: value,
      });
      dispatch(getProjectStructureData());
    },
    getStructureData() {
      dispatch(getProjectStructureData());
    },
    showModalOpen(id) {
      dispatch({ type: SET_ACTIVE_ITEM, payload: id });
      dispatch({ type: SHOW_MODAL, payload: true });
    },
    handleChangeRequirementAttributeValue(value, index) {
      let temp = store.getState().requirement.activeItem;
      temp.structureAttributesVal[index].value = value;
      dispatch({ type: SET_ATTRIBUTE_VALUE, payload: temp });
    },
    showModalClose() {
      dispatch({ type: RESET_REQUIREMENT_MODAL });
      dispatch({ type: SHOW_MODAL, payload: false });
    },
    // handleChangeRequirementStructureName(value,i) {
    //     dispatch({
    //         type: STRUCTURE_NAME,
    //         payload: value,
    //     });
    // },
    handleChangeRequirementStructureId(value) {
      dispatch({
        type: STRUCTURE_ID,
        payload: value,
      });
    },
    handleChangeRequirementNumberOfComponents(value) {
      dispatch({
        type: NUMBER_OF_COMPONENTS,
        payload: value,
      });
    },
    handleChangeRequirementDrawingNumber(value) {
      dispatch({
        type: DRAWING_NO,
        payload: value,
      });
    },
    handleChangeRequirementQuantity(value) {
      dispatch({
        type: QUANTITY,
        payload: value,
      });
    },
    handleChangeRequirementRequiredWorkBreak(obj) {
      let tempActiveItem = store.getState().requirement.activeItem;
      tempActiveItem.wbsName = obj;
      dispatch({
        type: REQUIRED_FOR_WORK_BREAK,
        payload: tempActiveItem,
      });
      const requirement = store.getState().requirement;
      let wbsCodesList = JSON.parse(JSON.stringify(requirement.wbsCodesList));
      let activeItem = requirement.activeItem;
      let segmentList = [];
      wbsCodesList = wbsCodesList.filter((item) => {
        return item.workBreakDownCode === activeItem.wbsName.value;
      });
      wbsCodesList.map((item) => {
        let currentItem = segmentList.find((wbs) => wbs.value === item.segment);
        if (!currentItem) {
          let tempObj = {
            label: item.segment,
            value: item.segment,
          };
          segmentList.push(tempObj);
        }
      });
      dispatch({
        type: WBS_SEGMENT_LIST,
        payload: segmentList,
      });
    },
    handleChangeRequirementWbsSubSegment(obj) {
      let tempActiveItem = store.getState().requirement.activeItem;
      tempActiveItem.subSegmentName = obj;
      dispatch({
        type: SET_WBS_SUBSEGMENT,
        payload: tempActiveItem,
      });
      const requirement = store.getState().requirement;
      let wbsCodesList = JSON.parse(JSON.stringify(requirement.wbsCodesList));
      let activeItem = requirement.activeItem;
      let elementList = [];
      wbsCodesList = wbsCodesList.filter((item) => {
        return (
          item.workBreakDownCode === activeItem.wbsName.value &&
          item.segment === activeItem.segmentName.value &&
          item.subSegment === activeItem.subSegmentName.value
        );
      });
      wbsCodesList.map((item) => {
        let currentItem = elementList.find((wbs) => wbs.value === item.element);
        if (!currentItem) {
          let tempObj = {
            label: item.element,
            value: item.element,
          };
          elementList.push(tempObj);
        }
      });
      dispatch({
        type: WBS_ELEMENT_LIST,
        payload: elementList,
      });
    },
    handleChangeRequirementWbsSegment(obj) {
      let tempActiveItem = store.getState().requirement.activeItem;
      tempActiveItem.segmentName = obj;
      dispatch({
        type: SET_WBS_SEGMENT,
        payload: tempActiveItem,
      });
      const requirement = store.getState().requirement;
      let wbsCodesList = JSON.parse(JSON.stringify(requirement.wbsCodesList));
      let activeItem = requirement.activeItem;
      let subSegmentList = [];
      wbsCodesList = wbsCodesList.filter((item) => {
        return (
          item.workBreakDownCode === activeItem.wbsName.value &&
          item.segment === activeItem.segmentName.value
        );
      });
      wbsCodesList.map((item) => {
        let currentItem = subSegmentList.find(
          (wbs) => wbs.value === item.subSegment
        );
        if (!currentItem) {
          let tempObj = {
            label: item.subSegment,
            value: item.subSegment,
          };
          subSegmentList.push(tempObj);
        }
      });
      dispatch({
        type: WBS_SUBSEGMENT_LIST,
        payload: subSegmentList,
      });
    },
    handleChangeRequirementWbsElement(obj) {
      let tempActiveItem = store.getState().requirement.activeItem;
      tempActiveItem.elementName = obj;
      dispatch({
        type: SET_WBS_ELEMENT,
        payload: tempActiveItem,
      });
    },
    handleChangeRequirementRequiredBy(value) {
      let tempActiveItem = store.getState().requirement.activeItem;
      tempActiveItem.requireByDate = value;
      dispatch({
        type: REQUIRED_BY,
        payload: tempActiveItem,
      });
    },
    handleChangeRequirementActualWorkBreak(value) {
      dispatch({
        type: ACTUAL_WORK_BREAK,
        payload: value,
      });
    },
    handleChangeRequirementPlannedStartDate(value) {
      let tempActiveItem = store.getState().requirement.activeItem;
      tempActiveItem.planStartdate = value;
      dispatch({
        type: PLANNED_START_DATE,
        payload: tempActiveItem,
      });
    },
    handleChangeRequirementActualStartDateOfUsage(value) {
      dispatch({
        type: ACTUAL_START_DATE_OF_USAGE,
        payload: value,
      });
    },
    handleChangeRequirementPlannedReleaseDate(value) {
      let tempActiveItem = store.getState().requirement.activeItem;
      tempActiveItem.planReleasedate = value;
      dispatch({
        type: PLANNED_RELEASE_DATE,
        payload: tempActiveItem,
      });
    },
    handleChangeRequirementExpectedReleaseDate(value) {
      dispatch({
        type: EXPECTED_RELEASE_DATE,
        payload: value,
      });
    },
    handleChangeRequirementMrNo(value) {
      dispatch({
        type: MR_NUMBER,
        payload: value,
      });
    },
    handleChangeRequirementRemarks(value) {
      dispatch({
        type: REMARKS,
        payload: value,
      });
    },
    getProjectList() {
      console.log("In Container");
      dispatch(getProjectList());
    },
    getWBSList() {
      dispatch(getWBSList()).then((response) => {
        const requirement = store.getState().requirement;
        let wbsCodesList = JSON.parse(JSON.stringify(requirement.wbsCodesList));
        let wbsList = [];
        wbsCodesList.map((item) => {
          let currentItem = wbsList.find(
            (wbs) => wbs.value === item.workBreakDownCode
          );
          if (!currentItem) {
            let tempObj = {
              label: item.workBreakDownCode,
              value: item.workBreakDownCode,
            };
            wbsList.push(tempObj);
          }
        });
        dispatch({
          type: WBS_CODE_LIST,
          payload: wbsList,
        });
      });
    },
    addSiteRequirement() {
      dispatch(addSiteRequirement());
    },
    onStructureIDChange(value, i) {
      const requirement = store.getState().requirement;
      const length = requirement.siteRequirementList.length;
      requirement.siteRequirementList[i].structId = parseInt(value);
      dispatch({
        type: SITE_REQUIRMENT_LIST,
        payload: requirement.siteRequirementList,
      });
    },
    handleStructureNameChange(value, id) {
      const userDetails = getUserDetails();

      const requirement = store.getState().requirement;
      let siteReqList = JSON.parse(
        JSON.stringify(requirement.siteRequirementList)
      );
      siteReqList.map((item) => {
        if (item.itemId === id) {
          item.structName = value.label;
          item.structureName = value;
          let currentProject = requirement.structureProjectList.filter(
            (ele) => {
              return ele.id === value.value;
            }
          )[0];
          item.structId = currentProject.id;
          while (typeof currentProject.structureAttributes === "string") {
            currentProject.structureAttributes = JSON.parse(
              currentProject.structureAttributes
            );
          }
          currentProject.structureAttributes.map((item) => (item.value = ""));
          item.structureAttributesVal = currentProject.structureAttributes;
        }
      });
      dispatch({
        type: SITE_REQUIRMENT_LIST,
        payload: siteReqList,
      });
    },
    ondrawingNumberChange(value, i) {
      const requirement = store.getState().requirement;
      const length = requirement.siteRequirementList.length;
      requirement.siteRequirementList[i].drawingNo = value;
      dispatch({
        type: SITE_REQUIRMENT_LIST,
        payload: requirement.siteRequirementList,
      });
    },
    onQuantityChange(e, id) {
      const requirement = store.getState().requirement;
      let siteReqList = JSON.parse(
        JSON.stringify(requirement.siteRequirementList)
      );
      siteReqList.map((item) => {
        if (item.itemId === id) {
          item.quantity = e.target.value;
        }
      });
      dispatch({
        type: SITE_REQUIRMENT_LIST,
        payload: siteReqList,
      });
    },
    onSiteRequirementRemove(id) {
      const requirement = store.getState().requirement;
      const siteRequirementList = [...requirement.siteRequirementList];
      let siteReqList = siteRequirementList.filter((item) => {
        return item.itemId !== id;
      });
      dispatch({
        type: SITE_REQUIRMENT_LIST,
        payload: siteReqList,
      });
    },
    onRequirementModalSave() {
      let tempSiteRequirementList = JSON.parse(
        JSON.stringify(store.getState().requirement.siteRequirementList)
      );
      let reqIndex = tempSiteRequirementList.findIndex(
        (item) => item.id === store.getState().requirement.activeItem.id
      );
      tempSiteRequirementList[reqIndex] = JSON.parse(
        JSON.stringify(store.getState().requirement.activeItem)
      );

      let tempSavedRequirementlist = JSON.parse(
        JSON.stringify(store.getState().requirement.savedRequirementList)
      );
      let index = tempSavedRequirementlist.findIndex(
        (item) => item.id === store.getState().requirement.activeItem.id
      );
      index === -1
        ? tempSavedRequirementlist.push(store.getState().requirement.activeItem)
        : (tempSavedRequirementlist[index] = JSON.parse(
            JSON.stringify(store.getState().requirement.activeItem)
          ));
      dispatch({
        type: SAVE_REQUIREMENT_MODAL_VALUES,
        payload: {
          savedReqList: tempSavedRequirementlist,
          siteReqList: tempSiteRequirementList,
        },
      });
      dispatch({ type: RESET_REQUIREMENT_MODAL });
      dispatch({ type: SHOW_MODAL, payload: false });
    },
    openViewMoreModal(id) {
      dispatch({
        type: REQUIREMENT_VIEW_MORE,
        payload: { flag: true, id },
      });
    },
    closeViewMoreModal() {
      dispatch({
        type: REQUIREMENT_VIEW_MORE,
        payload: { flag: false, id: null },
      });
    },
  };
};

const mapStateToProps = (state) => {
  const requirement = store.getState().requirement;
  return {
    requirement,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRequirement);
