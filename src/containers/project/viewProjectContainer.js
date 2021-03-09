import { connect } from "react-redux";
import store from "../../store";
import { 
  projectList, 
  getSingleProj,
  getSegmentList,
  getICList,
  getBUList,
  createProj,
  updateProj,
 } from "../../actions/masterAction";

import {
  COMPONENT_TYPE,
  RESET_PROJECT_FORM,
  SHOW_ADD_COMPONENT_MSG,
  COMPONENT_TYPE_STATUS,
  SHOW_ADD_PROJ_MODAL,
  PROJECT_NAME,
  AREA,
  PROJECT_BUSINESS_UNIT,
  SITE_LOCATION,
  PROJECT_INDEPENDENT_COMPANY,
  SET_EDIT_MODE,
  ON_CHANGE_SEGMENT,
  SHOW_ERR_MSG,
  ADD_LOCATION_FIELD,
  JOB_CODE,
  EDRC_CODE
} from "../../actions/types";
import ViewProject from "../../pages/project/ViewProject";

const mapDispatchToProps = (dispatch) => {
  return {
    projectList() {
      dispatch(projectList());
    },

    handleChangeComponentType(value) {
      dispatch({
        type: COMPONENT_TYPE,
        payload: value,
      });
    },
    handleComponentTypeStatus(value) {
      dispatch({
        type: COMPONENT_TYPE_STATUS,
        payload: value,
      });
    },
    showAddProjModal() {
      dispatch({
        type: SHOW_ADD_PROJ_MODAL,
        payload: true,
      });
      dispatch({
        type: SHOW_ADD_COMPONENT_MSG,
        payload: false,
      });
      dispatch(getSegmentList());
      dispatch(getICList());
      dispatch(getBUList());
    },
    closeAddProjModal() {
      dispatch({
        type: SHOW_ADD_PROJ_MODAL,
        payload: false,
      });
      dispatch({type: RESET_PROJECT_FORM});
    },
    //Add Project
    handleChangeProjectName(value) {
      dispatch({
        type: PROJECT_NAME,
        payload: value,
      });
    },
    handleChangeJobCode(value) {
      dispatch({
        type: JOB_CODE,
        payload: value,
      });
    },
    handleChangeEdrcCode(value) {
      dispatch({
        type: EDRC_CODE,
        payload: value,
      });
    },
    handleChangeSegment(obj) {
      dispatch({
        type: ON_CHANGE_SEGMENT,
        payload: obj,
      });
    },
    handleChangeArea(value) {
      dispatch({
        type: AREA,
        payload: value,
      });
    },
    handleChangeBusinessUnit(obj) {
      dispatch({
        type: PROJECT_BUSINESS_UNIT,
        payload: obj,
      });
    },
    handleChangeSiteLocation(value, index) {
      console.log("value",value);
      const proj = store.getState().proj;
      let tmpArr = [...proj.locations];
      tmpArr[index].name = value;
      console.log("tmparr",tmpArr);
      dispatch({
        type: SITE_LOCATION,
        payload: tmpArr,
      });
    },
    addLocation() {
      const proj = store.getState().proj;
      let tmpArr = [...proj.locations];
      tmpArr.push({
        id: 0,
        name: ""
      });
      dispatch({type: ADD_LOCATION_FIELD, payload: tmpArr});
    },
    removeLocation(index) {
      const proj = store.getState().proj;
      let tmpArr = [...proj.locations];
      tmpArr.splice(index, 1);
      dispatch({type: ADD_LOCATION_FIELD, payload: tmpArr});
    },
    handleChangeIndependentCompany(value) {
      dispatch({
        type: PROJECT_INDEPENDENT_COMPANY,
        payload: value,
      });
    },
    createProject() {
      dispatch(createProj()).then(() => {
        dispatch({
          type: SHOW_ADD_PROJ_MODAL,
          payload: false,
        });
        dispatch({type: RESET_PROJECT_FORM});
        dispatch(projectList());
      })
    },
    //Edit Proj
    updateProject() {
      dispatch(updateProj()).then(() => {
        dispatch({
          type: SHOW_ADD_PROJ_MODAL,
          payload: false,
        });
        dispatch({type: RESET_PROJECT_FORM});
        dispatch(projectList());
      }).catch(() => {
        dispatch({type: SHOW_ERR_MSG, payload: true});
      })
    },
    handleEdit(id) {
      dispatch(getSegmentList());
      dispatch(getICList());
      dispatch(getBUList());
      dispatch({
        type: SHOW_ADD_PROJ_MODAL,
        payload: true,
      });
      dispatch({
        type: SET_EDIT_MODE,
        payload: true,
      });
      dispatch(getSingleProj(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    proj: state.proj,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProject);
