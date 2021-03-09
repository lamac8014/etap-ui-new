import { connect } from 'react-redux';

import store from '../../store';

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
    SHOW_MODAL
} from '../../actions/types';
import AddRequirement from '../../pages/requirements/AddRequirements';
import { getUserDetails } from "../../utils/auth";
import {getProjectList,getWBSList, addSiteRequirement,addRequirement,getProjectStructureData} from '../../actions/requirementAction'
const mapDispatchToProps = dispatch => {
    return {
        saveRequirement(){
            dispatch(addRequirement()).then(() => {
                dispatch({ type: RESET_REQUIREMENT_FORM })
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
        getStructureData(){
            dispatch(getProjectStructureData());
        },
        showModalOpen(){
            dispatch({type:SHOW_MODAL,payload:true});
        },
        showModalClose(){
            dispatch({type:SHOW_MODAL,payload:false});

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
            dispatch({
                type: REQUIRED_FOR_WORK_BREAK,
                payload: value,
            });
        },
        handleChangeRequirementRequiredBy(value) {
            dispatch({
                type: REQUIRED_BY,
                payload: value,
            });
        },
        handleChangeRequirementActualWorkBreak(value) {
            dispatch({
                type: ACTUAL_WORK_BREAK,
                payload: value,
            });
        },
        handleChangeRequirementPlannedStartDate(value) {
            dispatch({
                type: PLANNED_START_DATE,
                payload: value,
            });
        },
        handleChangeRequirementActualStartDateOfUsage(value) {
            dispatch({
                type: ACTUAL_START_DATE_OF_USAGE,
                payload: value,
            });
        },
        handleChangeRequirementPlannedReleaseDate(value) {
            dispatch({
                type: PLANNED_RELEASE_DATE,
                payload: value,
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
        getProjectList(){
            console.log("In Container")
            dispatch(getProjectList());
        },
        getWBSList(){
            dispatch(getWBSList());
        },
        addSiteRequirement(){
            dispatch(addSiteRequirement());
        },
        onStructureIDChange(value, i){
            const requirement = store.getState().requirement;
            const length = requirement.siteRequirementList.length;
            requirement.siteRequirementList[i].structId = parseInt(value);
            dispatch({
                type: SITE_REQUIRMENT_LIST,
                payload: requirement.siteRequirementList,
            });
        },
        handleStructureNameChange(value, i){
            const userDetails = getUserDetails();

            const requirement = store.getState().requirement;
            requirement.siteRequirementList[i].structName = value;
            let currentProject = requirement.structureProjectList.filter((ele) => {
                return (ele.structureId === value.value) 
              })
            console.log(`Current Project is: ${currentProject}`)
            requirement.siteRequirementList[i].structFamily = currentProject[0].strcutureTypeName;
            requirement.siteRequirementList[i].drawingNo = currentProject[0].drawingNo;
            requirement.siteRequirementList[i].componentsCount = currentProject[0].componentsCount;
            requirement.siteRequirementList[i].structId = currentProject[0].structureId;
            dispatch({
                type: SITE_REQUIRMENT_LIST,
                payload: requirement.siteRequirementList,
            });
        },
        ondrawingNumberChange(value, i){
            const requirement = store.getState().requirement;
            const length = requirement.siteRequirementList.length;
            requirement.siteRequirementList[i].drawingNo = value;
            dispatch({
                type: SITE_REQUIRMENT_LIST,
                payload: requirement.siteRequirementList,
            });
        },
        onQuantityChange(value, i){
            const requirement = store.getState().requirement;
            const length = requirement.siteRequirementList.length;
            requirement.siteRequirementList[i].quantity = parseInt(value);
            dispatch({
                type: SITE_REQUIRMENT_LIST,
                payload: requirement.siteRequirementList,
            });
        },
        onSiteRequirementRemove(i){
            const requirement = store.getState().requirement;
            const siteRequirementList = [...requirement.siteRequirementList];
            siteRequirementList.splice(i, 1);
            dispatch({
                type: SITE_REQUIRMENT_LIST,
                payload: siteRequirementList,
            });
        }
    };
};

const mapStateToProps = state => {
    const requirement = store.getState().requirement;
    return {
        requirement,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRequirement);
