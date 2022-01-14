import { connect } from "react-redux";
import store from "../../store";
import { builtList, buildStructure } from "../../actions/builtAction";
import {
  CHANGE_BUILT_MORE_MODAL_STATUS,
  BUILT_MORE_PAGE,
  CHANGE_BUILT_EDIT_MORE_MODAL_STATUS,
  BUILT_EDIT_MORE_PAGE,
  GET_AS_BUILD_STRUCTURE,
  BUILT_VIEW_PAGE,
  BUILT_VIEW_MODAL,
  AS_BUILT_SET_CURRENT_STRUCTURE,
  AS_BUILT_SET_WBS_LIST,
} from "../../actions/types";
import ViewAsBuilt from "../../pages/built/ViewAsBuilt";

const mapDispatchToProps = (dispatch, props) => {
  return {
    builtList() {
      dispatch(builtList());
    },

    redirectToBuiltMoreDetails(id, dispatchNo, structureName, structureCode) {
      props.history.push(
        `/etrack/built/asBuiltDetails/${window.btoa(id)}/${window.btoa(
          dispatchNo
        )}/${window.btoa(structureName)}/${window.btoa(structureCode)}`
      );
    },
    buildStructure() {
      dispatch(buildStructure());
    },

    handleMore(id) {
      let built = store.getState().built;
      let asbuiltStructures = JSON.parse(
        JSON.stringify(built.asBuildStructure)
      );
      let currentStructure = asbuiltStructures.find((item) => {
        return item.dispReqStructId === id;
      });
      dispatch({
        type: AS_BUILT_SET_CURRENT_STRUCTURE,
        payload: currentStructure,
      });
      dispatch({
        type: BUILT_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: CHANGE_BUILT_MORE_MODAL_STATUS,
        payload: true,
      });
    },
    handleEdit(id) {
      dispatch({
        type: BUILT_EDIT_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: CHANGE_BUILT_EDIT_MORE_MODAL_STATUS,
        payload: true,
      });
    },
    handleViewMore(id) {
      let built = store.getState().built;
      let asbuiltStructures = JSON.parse(
        JSON.stringify(built.asBuildStructure)
      );
      let currentStructure = asbuiltStructures.find((item) => {
        return item.dispReqStructId === id;
      });
      dispatch({
        type: AS_BUILT_SET_CURRENT_STRUCTURE,
        payload: currentStructure,
      });
      let wbsCodesList = JSON.parse(JSON.stringify(built.wbsCodesList));
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
        type: AS_BUILT_SET_WBS_LIST,
        payload: wbsList,
      });

      dispatch({
        type: BUILT_VIEW_PAGE,
        payload: true,
      });
      dispatch({
        type: BUILT_VIEW_MODAL,
        payload: true,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const built = store.getState().built;
  return {
    built,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAsBuilt);
