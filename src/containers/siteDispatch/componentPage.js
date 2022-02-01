import { connect } from "react-redux";
import store from "../../store";
import {
  getComponentData,
  updateSiteDispatch,
} from "../../actions/siteDispatch";

import {
  SET_STRUCTURE_CODE,
  SET_STRUCTURE_NAME_VENDOR,
  SET_COMPONENT_COUNT,
  SET_SUB_CONT_ID,
  SET_DISP_STR_ID,
  UPLOAD_WO_FILE,
  SET_DISPATCH_DATE,
  TRANSFORM_COMPONENT_DATA,
  SET_SELECTED_COMPONENTS,
  RESET_UPDATE_SITE_DISPATCH_MODAL,
} from "../../actions/types";

import ComponentPage from "../../pages/siteDispatch/ComponentPage";
import swal from "sweetalert";

const mapDispatchToProps = (dispatch, props) => {
  return {
    getComponentData(dispStrId, subContId, count, name, code) {
      dispatch(getComponentData(dispStrId)).then((response) => {
        let componentData = JSON.parse(
          JSON.stringify(store.getState().siteDispatch.componentData)
        );
        componentData.map((item) => {
          item.checked = item.dispatchDate === null ? false : true;
          item.disabled = item.dispatchDate === null ? false : true;
        });
        dispatch({
          type: TRANSFORM_COMPONENT_DATA,
          payload: componentData,
        });
      });
      dispatch({
        type: SET_SUB_CONT_ID,
        payload: subContId,
      });
      dispatch({
        type: SET_DISP_STR_ID,
        payload: dispStrId,
      });
      dispatch({
        type: SET_COMPONENT_COUNT,
        payload: count,
      });
      dispatch({
        type: SET_STRUCTURE_CODE,
        payload: code,
      });
      dispatch({
        type: SET_STRUCTURE_NAME_VENDOR,
        payload: name,
      });
      dispatch({
        type: UPLOAD_WO_FILE,
        paayload: null,
      })
    },
    handleChangeWoFileUpload(file) {
      dispatch({
        type: UPLOAD_WO_FILE,
        payload: file,
      });
    },
    handleChangeDispatchDate(value) {
      dispatch({
        type: SET_DISPATCH_DATE,
        payload: value,
      });
    },
    setSelectedComponents(row) {
      let siteDispatch = store.getState().siteDispatch;
      let selectedComponents = JSON.parse(
        JSON.stringify(siteDispatch.selectedComponents)
      );
      let componentData = JSON.parse(
        JSON.stringify(siteDispatch.componentData)
      );
      if (row.checked === false) {
        componentData.map((item) => {
          if (item.dispStructureComponentId === row.dispStructureComponentId) {
            item.checked = true;
            selectedComponents.push(item.dispStructureComponentId);
          }
        });
      } else if (row.checked === true) {
        componentData.map((item) => {
          if (item.dispStructureComponentId === row.dispStructureComponentId) {
            item.checked = false;
            selectedComponents.map((item, index) => {
              if (item === row.dispStructureComponentId) {
                selectedComponents.splice(index, 1);
              }
            });
          }
        });
      }
      dispatch({
        type: TRANSFORM_COMPONENT_DATA,
        payload: componentData,
      });
      dispatch({
        type: SET_SELECTED_COMPONENTS,
        payload: selectedComponents,
      });
    },
    updateComponents() {
      dispatch(updateSiteDispatch())
        .then((response) => {
          props.history.push("/etrack/dispatch/vendor");
          dispatch({
            type: RESET_UPDATE_SITE_DISPATCH_MODAL,
          });
          swal("Dispatched Successfully", {
            icon: "success",
          });
        })
        .catch((err) => {
          swal("Dispatch failed", {
            icon: "error",
          });
        });
    },
    resetDispatchDetails() {
      let siteDispatch = store.getState().siteDispatch;
      let componentData = JSON.parse(
        JSON.stringify(siteDispatch.componentData)
      );
      componentData.map(item => {
        if(item.checked && !item.disabled){
          item.checked = false;
        }
      })
      dispatch({
        type: TRANSFORM_COMPONENT_DATA,
        payload: componentData,
      });
      dispatch({
        type: RESET_UPDATE_SITE_DISPATCH_MODAL,
			});
    }
  };
};

const mapStateToProps = (state) => {
  const siteDispatch = store.getState().siteDispatch;
  return {
    siteDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentPage);
