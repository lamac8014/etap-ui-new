import { connect } from "react-redux";
import store from "../../store";
import { getAssignedStructureData } from "../../actions/cmpcAddComponentsActions";
import {
  SET_NO_OF_COMPONENTS,
  SET_EST_WEIGHT,
  SET_FILES,
  REMOVE_FILES,
  CMPC_SET_UPLOAD_DATA,
} from "../../actions/types";

import CmpcAddComponents from "../../pages/cmpcAddComponents/CmpcAddComponents";

const mapDispatchToProps = (dispatch) => {
  return {
    getAssignedStructureData(id) {
      dispatch(getAssignedStructureData(id));
    },
    handleChangeEstWeight(value) {
      dispatch({
        type: SET_EST_WEIGHT,
        payload: value,
      });
    },
    handleChangeNoOfComponents(value) {
      dispatch({
        type: SET_NO_OF_COMPONENTS,
        payload: value,
      });
    },
    handleChangeFileUpload(files) {
      const cmpcAdd = store.getState().cmpcAdd;
      const newDocs = [...files];
      newDocs.map((doc) => {
        doc.isNew = true;
      });
      const tmpArr = [...cmpcAdd.files, ...newDocs];
      dispatch({
        type: SET_FILES,
        payload: tmpArr,
      });
    },
    handleOnDrop(data) {
      let uploadData = [];
      data.forEach((a, i) => {
        console.log("index", i, a);
        if (i > 0 && a.data.length > 1) {
          let start = 0;
          let wbsSampleObject = {
            componentName: a.data[start] ? a.data[start] : "",
            compTypeName: a.data[start + 1] ? a.data[start + 1] : "",
            compId: a.data[start + 2] ? a.data[start + 2] : "",
            componentNo: a.data[start + 3] ? a.data[start + 3] : "",
            isGroup: a.data[start + 4] ? parseInt(a.data[start + 4]) : "",
            drawingNo: a.data[start + 5] ? a.data[start + 5] : "",
            leng: a.data[start + 6] ? parseFloat(a.data[start + 6]) : "",
            breath: a.data[start + 7] ? parseFloat(a.data[start + 7]) : "",
            height: a.data[start + 8] ? parseFloat(a.data[start + 8]) : "",
            thickness: a.data[start + 9] ? parseFloat(a.data[start + 9]) : "",
            width: a.data[start + 10] ? parseFloat(a.data[start + 10]) : "",
            makeType: a.data[start + 11] ? a.data[start + 11] : "",
            isTag: a.data[start + 12] ? Boolean(a.data[start + 12]) : "",
          };
          uploadData.push(wbsSampleObject);
        }
      });
      dispatch({
        type: CMPC_SET_UPLOAD_DATA,
        payload: uploadData,
      });
    },
    removeFiles(file, index) {
      const cmpcAdd = store.getState().cmpcAdd;
      const tmpArr = [...cmpcAdd.files];
      tmpArr.splice(index, 1);
      dispatch({
        type: SET_FILES,
        payload: tmpArr,
      });
      let removeFiles = [...cmpcAdd.removeFiles];
      !file.isNew && removeFiles.push(file.id);
      dispatch({
        type: REMOVE_FILES,
        payload: removeFiles,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const cmpcAdd = state.cmpcAdd;
  return {
    cmpcAdd,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CmpcAddComponents);
