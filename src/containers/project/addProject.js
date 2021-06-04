import { connect } from 'react-redux';
import store from '../../store';

import {
  PROJECT_NAME,
  SEGMENT,
  AREA,
  PROJECT_BUSINESS_UNIT,
  SITE_LOCATION,
  PROJECT_INDEPENDENT_COMPANY,
  RESET_STRUCTURE_FORM,
  PROJ_STATUS,

} from '../../actions/types';

import AddProject from '../../pages/project/AddProject';

const mapDispatchToProps = dispatch => {
  return {
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
    },

    handleChangeProjectName(value) {
      dispatch({
        type: PROJECT_NAME,
        payload: value,
      });
    },
    handleChangeSegment(value) {
      dispatch({
        type: SEGMENT,
        payload: value,
      });
    },
    handleChangeArea(value) {
      dispatch({
        type: AREA,
        payload: value,
      });
    },
    handleChangeBusinessUnit(value) {
      dispatch({
        type: PROJECT_BUSINESS_UNIT,
        payload: value,
      });
    },
    handleChangeSiteLocation(value) {
      dispatch({
        type: SITE_LOCATION,
        payload: value,
      });
    },
    handleChangeIndependentCompany(value) {
      dispatch({
        type: PROJECT_INDEPENDENT_COMPANY,
        payload: value,
      });
    },
    handleProjStatus(value) {
			dispatch({
			  type:PROJ_STATUS,
			  payload: value,
			});
		},
  };
};

const mapStateToProps = state => {
  const addproject = store.getState().addproject;
  return {
    addproject,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
