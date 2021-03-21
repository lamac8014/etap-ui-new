import { connect } from "react-redux";
import store from "../../store";
// import csv from "csvtojson";
import {
  projectCodesList,
  saveWBSData,
  singleWBS,
  wbsList,
} from "../../actions/wbsActions";
import {
  RESET_WBS_FORM,
  WORK_BREAK_PROJECT_NAME,
  WBS_UPLOADED_DATA,
} from "../../actions/types";

import AddWorkBreak from "../../pages/workBreak/AddWorkBreak";

const mapDispatchToProps = (dispatch) => {
  return {
    resetWBSData() {
      dispatch({ type: RESET_WBS_FORM });
    },

    handleOnDrop(data) {
      console.log("---------------------------");
      let wbsDataArr = [];
      console.log("data....", data);
      data.forEach((a, i) => {
        if (i > 0 && a.data.length === 4) {
          let wbsSampleObject = {
            workBreakDownCode: a.data[0],
            segment: a.data[1],
            subSegment: a.data[2],
            element: a.data[3],
          };
          wbsDataArr.push(wbsSampleObject);
        }
      });
      dispatch({
        type: WBS_UPLOADED_DATA,
        payload: wbsDataArr,
      });
      console.log("---------------------------");
    },
    getProjectList() {
      dispatch(projectCodesList());
    },
    saveWBSData() {
      dispatch(saveWBSData());
      dispatch({
        type: RESET_WBS_FORM,
      });
    },
    handleChangeProjectName(value) {
      dispatch({
        type: WORK_BREAK_PROJECT_NAME,
        payload: value,
      });
      dispatch(wbsList());
    },
  };
};

const mapStateToProps = (state) => {
  const wbs = store.getState().wbs;
  return {
    wbs,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkBreak);
