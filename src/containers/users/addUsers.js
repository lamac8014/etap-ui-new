import { connect } from 'react-redux';
import store from '../../store';
import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  PS_NO,
  USER_ROLE,
  RESET_STRUCTURE_FORM,
  PROJECT,
  BUSINESS_UNIT,
  SEGMENT,
  INDEPENDENT_COMPANY,
  CHANGE_ADD_USERS_MODAL_STATUS
  
} from '../../actions/types';
import AddUser from '../../pages/users/AddUser';
import {projectCodesList,getProjectDetails,getRolesList,addUser,usersList,updateUser} from '../../actions/usersAction'

const mapDispatchToProps = dispatch => {
  return {
    resetStructureData() {
      dispatch({ type: RESET_STRUCTURE_FORM });
    },
    closeAddUserModal(){
      dispatch({
        type:"RESET_CREATE_USER_FORM"
      });
      dispatch({
        type: CHANGE_ADD_USERS_MODAL_STATUS,
        payload: false,
      });
      
    },
    addUser(){
      dispatch(addUser()).then(() => {
        dispatch({
          type:"RESET_CREATE_USER_FORM"
        });
        dispatch({
          type: CHANGE_ADD_USERS_MODAL_STATUS,
          payload: false,
        });
        dispatch(usersList());
      })  
    },
    updateUser(){
      dispatch(updateUser()).then(() => {
        dispatch({
          type:"RESET_CREATE_USER_FORM"
        });
        dispatch({
          type: CHANGE_ADD_USERS_MODAL_STATUS,
          payload: false,
        });
        dispatch(usersList());
      })  
    },
    getProjectList(){
      dispatch(projectCodesList());
        },
        getRolesList(){
          dispatch(getRolesList());
        },
    handleChangeFirstName(value) {
      dispatch({
        type: FIRST_NAME,
        payload: value,
      });
    },
    handleChangeLastName(value) {
      dispatch({
        type: LAST_NAME,
        payload: value,
      });
    },
    handleChangeEmail(value) {
      dispatch({
        type: EMAIL,
        payload: value,
      });
    },
    handleChangePsNo(value) {
      dispatch({
        type: PS_NO,
        payload: value,
      });
    },
    handleChangeProject(value) {
      dispatch({
        type: PROJECT,
        payload: value,
      });
      dispatch(getProjectDetails());
    },
    handleChangeBusinessUnit(value) {
      dispatch({
        type: BUSINESS_UNIT,
        payload: value,
      });
    },
    handleChangeSegment(value) {
      dispatch({
        type: SEGMENT,
        payload: value,
      });
    },
    handleIndependentCompany(value) {
      dispatch({
        type: INDEPENDENT_COMPANY,
        payload: value,
      });
    },
    handleChangeRole(value) {
      dispatch({
        type: USER_ROLE,
        payload: value,
      });
    },
  };
};

const mapStateToProps = state => {
  const users = store.getState().users;
  return {
    users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
