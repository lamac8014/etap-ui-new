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
const mapDispatchToProps = (dispatch) => {
  return {
    saveRequirement() {
      dispatch(addRequirement()).then(() => {
        dispatch({ type: RESET_REQUIREMENT_FORM });
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
    handleChangeRequirementRequiredWorkBreak(value) {
      let tempActiveItem = store.getState().requirement.activeItem;
      tempActiveItem.reqWbs = value;
      dispatch({
        type: REQUIRED_FOR_WORK_BREAK,
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
      dispatch(getWBSList());
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
    handleStructureNameChange(value, i) {
      const userDetails = getUserDetails();

      const requirement = store.getState().requirement;
      requirement.siteRequirementList[i].structName = value.label;
      let currentProject = requirement.structureProjectList.filter((ele) => {
        return ele.structureId === value.value;
      });
      // console.log(`Current Project is: ${currentProject[0]}`);
      console.log(currentProject[0]);
      requirement.siteRequirementList[i].structId =
        currentProject[0].structureId;
      requirement.siteRequirementList[i].structureAttributesVal = JSON.parse(
        currentProject[0].structureAttributes
      );
      dispatch({
        type: SITE_REQUIRMENT_LIST,
        payload: requirement.siteRequirementList,
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
    onQuantityChange(value, i) {
      const requirement = store.getState().requirement;
      const length = requirement.siteRequirementList.length;
      requirement.siteRequirementList[i].quantity = value;
      dispatch({
        type: SITE_REQUIRMENT_LIST,
        payload: requirement.siteRequirementList,
      });
    },
    onSiteRequirementRemove(i) {
      const requirement = store.getState().requirement;
      const siteRequirementList = [...requirement.siteRequirementList];
      siteRequirementList.splice(i, 1);
      dispatch({
        type: SITE_REQUIRMENT_LIST,
        payload: siteRequirementList,
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
