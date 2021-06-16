import { connect } from "react-redux";
import {
  SHOW_EDIT_COMPONENT_MODAL,
  RESET_EDIT_COMPONENT_FORM,
  MODIFY_BREADTH,
  MODIFY_HEIGHT,
  MODIFY_LENGTH,
  MODIFY_WEIGHT,
  MODIFY_THICKNESS,
  SET_STRUCT_CODE,
  SET_STRUCT_NAME,
  SET_CURRENT_COMP,
  SET_PROJECT_NAME,
  SET_ADD_PLATE,
  CMPC_TRANSFORM_COMPONENT_DATA,
  SET_IDS,
  CMPC_SET_COMPONENT_DATA_FROM_EXCEL,
  REMOVE_EXCEL_DATA,
} from "../../actions/types";
import {
  getComponentData,
  modifyComponents,
} from "../../actions/cmpcModificationActions";
import ModifyComponents from "../../pages/cmpcModification/ModifyComponents";
import store from "../../store";
import swal from "sweetalert";

const mapDispatchToProps = (dispatch, props) => {
  return {
    getComponentData(
      dispStrId,
      dispReqId,
      projStrId,
      name,
      code,
      proj,
      dcNumber
    ) {
      dispatch(getComponentData(dispStrId)).then((response) => {
        const cmpc = store.getState().cmpc;
        let componentData = JSON.parse(JSON.stringify(cmpc.componentData));
        componentData.map((item) => {
          if (item.modStageCompId !== null) {
            item.leng = item.modStageLength;
            item.breath = item.modStagebreath;
            item.height = item.modStageHeight;
            item.thickness = item.modStageThikness;
            item.weight = item.modStageWeight;
          }
        });
        dispatch({
          type: SET_IDS,
          payload: { projStrId, dispReqId, dcNumber, dispStrId },
        });
        dispatch({
          type: CMPC_TRANSFORM_COMPONENT_DATA,
          payload: componentData,
        });
      });
      dispatch({
        type: SET_STRUCT_NAME,
        payload: name,
      });
      dispatch({
        type: SET_STRUCT_CODE,
        payload: code,
      });
      dispatch({
        type: SET_PROJECT_NAME,
        payload: proj,
      });
    },
    handleEdit(id) {
      let cmpc = store.getState().cmpc;
      let components = JSON.parse(JSON.stringify(cmpc.componentData));
      let currentComp = components.filter((item) => {
        return item.compId === id;
      });
      dispatch({
        type: SHOW_EDIT_COMPONENT_MODAL,
        payload: true,
      });
      dispatch({
        type: SET_CURRENT_COMP,
        payload: currentComp[0],
      });
    },
    closeEditComponentModal() {
      dispatch({
        type: SHOW_EDIT_COMPONENT_MODAL,
        payload: false,
      });
      dispatch({ type: RESET_EDIT_COMPONENT_FORM });
    },
    handleChangeLength(value) {
      let tempModifiedData = JSON.parse(
        JSON.stringify(store.getState().cmpc.modifiedData)
      );
      tempModifiedData.length = value;
      dispatch({
        type: MODIFY_LENGTH,
        payload: tempModifiedData,
      });
    },
    handleChangeBreadth(value) {
      let tempModifiedData = JSON.parse(
        JSON.stringify(store.getState().cmpc.modifiedData)
      );
      tempModifiedData.breadth = value;
      dispatch({
        type: MODIFY_BREADTH,
        payload: tempModifiedData,
      });
    },
    handleChangeWidth(value) {
      let tempModifiedData = JSON.parse(
        JSON.stringify(store.getState().cmpc.modifiedData)
      );
      tempModifiedData.thickness = value;
      dispatch({
        type: MODIFY_THICKNESS,
        payload: tempModifiedData,
      });
    },
    handleChangeWeight(value) {
      let tempModifiedData = JSON.parse(
        JSON.stringify(store.getState().cmpc.modifiedData)
      );
      tempModifiedData.weight = value;
      dispatch({
        type: MODIFY_WEIGHT,
        payload: tempModifiedData,
      });
    },
    handleChangeHeight(value) {
      let tempModifiedData = JSON.parse(
        JSON.stringify(store.getState().cmpc.modifiedData)
      );
      tempModifiedData.height = value;
      dispatch({
        type: MODIFY_HEIGHT,
        payload: tempModifiedData,
      });
    },
    handleChangeAddPlate(value) {
      dispatch({
        type: SET_ADD_PLATE,
        payload: value,
      });
    },
    handleOnDrop(data) {
      let cmpc = store.getState().cmpc;
      let componentData = cmpc.uploadData;
      let uploadData = [];
      data.forEach((a, i) => {
        // console.log("index", i, a);
        if (i > 0 && a.data.length > 1) {
          let start = 0;
          let componentObject = {
            componentName: a.data[start] ? a.data[start] : "",
            componentType: a.data[start + 1] ? a.data[start + 1] : "",
            compId: a.data[start + 2] ? a.data[start + 2] : "",
            componentNo: a.data[start + 3] ? a.data[start + 3] : "",
            isGroup: a.data[start + 4] !== "" ? Boolean(a.data[start + 4]) : "",
            drawingNo: a.data[start + 5] ? a.data[start + 5] : "",
            leng: a.data[start + 6] ? parseFloat(a.data[start + 6]) : "",
            breath: a.data[start + 7] ? parseFloat(a.data[start + 7]) : "",
            height: a.data[start + 8] ? parseFloat(a.data[start + 8]) : "",
            thickness: a.data[start + 9] ? parseFloat(a.data[start + 9]) : "",
            weight: a.data[start + 10] ? parseFloat(a.data[start + 10]) : "",
            makeType: a.data[start + 11] ? a.data[start + 11] : "",
            isTag: a.data[start + 12] ? Boolean(a.data[start + 12]) : "",
            isModified: a.data[start + 13] ? Boolean(a.data[start + 13]) : "",
          };
          uploadData.push(componentObject);
        }
      });
      if (componentData.length === uploadData.length) {
        dispatch({
          type: CMPC_SET_COMPONENT_DATA_FROM_EXCEL,
          payload: uploadData,
        });
      } else {
        swal("Uploaded components exceed total count", {
          icon: "error",
        });
      }
    },
    removeExcelData() {
      dispatch({
        type: REMOVE_EXCEL_DATA,
      });
    },
    modifyComponents() {
      dispatch(modifyComponents())
        .then((response) => {
          let { dispStrId } = store.getState().cmpc;
          dispatch(getComponentData(dispStrId)).then((response) => {
            const cmpc = store.getState().cmpc;
            let componentData = JSON.parse(JSON.stringify(cmpc.componentData));
            componentData.map((item) => {
              if (item.modStageCompId !== null) {
                item.leng = item.modStageLength;
                item.breath = item.modStagebreath;
                item.height = item.modStageHeight;
                item.thickness = item.modStageThikness;
                item.weight = item.modStageWeight;
              }
            });
            dispatch({
              type: CMPC_TRANSFORM_COMPONENT_DATA,
              payload: componentData,
            });
          });
          swal("Component updated", {
            icon: "success",
          });
          dispatch({
            type: SHOW_EDIT_COMPONENT_MODAL,
            payload: false,
          });
          dispatch({ type: RESET_EDIT_COMPONENT_FORM });
        })
        .catch((err) => {
          swal("Update failed", {
            icon: "error",
          });
        });
    },
  };
};

const mapStateToProps = (state) => {
  const cmpc = state.cmpc;
  return { cmpc };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModifyComponents);
