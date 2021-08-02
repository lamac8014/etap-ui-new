import { connect } from "react-redux";
import store from "../../store";

import {
  GET_AS_BUILD_STRUCTURE,
  ADD_STRUCTURE_COMPONENT,
  SET_BUILD_STRUCT_CODE,
  SET_DCNO,
  SET_ESTIMATE_WEIGHT,
  SET_BUILD_FILES,
  SET_IMAGE_UPLOAD,
  SET_BUILD_STRUCT_NAME,
  SET_ACT_WBS,
  SET_FAB_YEAR,
  SET_EXP_REL_DATE,
  SET_REMARK,
  SET_REUSE,
  BUILT_VIEW_MODAL,
  BUILT_VIEW_MORE_MODAL,
  AS_BUILT_SET_WBS,
  AS_BUILT_SET_CURRENT_STRUCTURE,
  AS_BUILT_SET_WBS_LIST,
  RESET_BUILT_MODEL,
  AS_BUILT_SET_SEGMENT_LIST,
  AS_BUILT_SET_SUBSEGMENT_LIST,
  AS_BUILT_SET_ELEMENT_LIST,
  AS_BUILT_SET_SEGMENT,
  AS_BUILT_SET_SUBSEGMENT,
  AS_BUILT_SET_ELEMENT,
} from "../../actions/types";
import {
  addComponent,
  getWbsList,
  buildStructure,
} from "../../actions/builtAction";
import ViewMoreModal from "../../pages/built/ViewMoreModal";
import { transformDropDownData } from "../../utils/dataTransformer";
import swal from "sweetalert";
const mapDispatchToProps = (dispatch) => {
  return {
    onModalLoad() {
      dispatch(getWbsList()).then((response) => {
        let built = store.getState().built;
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
      });
    },
    handleChangeWbs(obj) {
      let built = store.getState().built;
      let wbsItem = built.wbsItem;
      wbsItem.wbsName = obj.value;
      dispatch({
        type: AS_BUILT_SET_WBS,
        payload: wbsItem,
      });
      let wbsCodesList = JSON.parse(JSON.stringify(built.wbsCodesList));
      let segmentList = [];
      wbsCodesList.map((item) => {
        if (item.workBreakDownCode === wbsItem.wbsName) {
          let currentItem = segmentList.find((segment) => {
            return segment.value === item.segment;
          });
          if (!currentItem) {
            let tempObj = {
              label: item.segment,
              value: item.segment,
            };
            segmentList.push(tempObj);
          }
        }
      });
      dispatch({
        type: AS_BUILT_SET_SEGMENT_LIST,
        payload: segmentList,
      });
    },
    handleChangeSegment(obj) {
      let built = store.getState().built;
      let wbsItem = built.wbsItem;
      wbsItem.segmentName = obj.value;
      dispatch({
        type: AS_BUILT_SET_SEGMENT,
        payload: wbsItem,
      });
      let wbsCodesList = JSON.parse(JSON.stringify(built.wbsCodesList));
      let subSegmentList = [];
      wbsCodesList.map((item) => {
        if (
          item.workBreakDownCode === wbsItem.wbsName &&
          item.segment === wbsItem.segmentName
        ) {
          let currentItem = subSegmentList.find((subSegment) => {
            return subSegment.value === item.subSegment;
          });
          if (!currentItem) {
            let tempObj = {
              label: item.subSegment,
              value: item.subSegment,
            };
            subSegmentList.push(tempObj);
          }
        }
      });
      dispatch({
        type: AS_BUILT_SET_SUBSEGMENT_LIST,
        payload: subSegmentList,
      });
    },
    handleChangeSubSegment(obj) {
      let built = store.getState().built;
      let wbsItem = built.wbsItem;
      wbsItem.subSegmentName = obj.value;
      dispatch({
        type: AS_BUILT_SET_SUBSEGMENT,
        payload: wbsItem,
      });
      let wbsCodesList = JSON.parse(JSON.stringify(built.wbsCodesList));
      let elementList = [];
      wbsCodesList.map((item) => {
        if (
          item.workBreakDownCode === wbsItem.wbsName &&
          item.segment === wbsItem.segmentName &&
          item.subSegment === wbsItem.subSegmentName
        ) {
          let currentItem = elementList.find((element) => {
            return element.value === item.element;
          });
          if (!currentItem) {
            let tempObj = {
              label: item.element,
              value: item.element,
            };
            elementList.push(tempObj);
          }
        }
      });
      dispatch({
        type: AS_BUILT_SET_ELEMENT_LIST,
        payload: elementList,
      });
    },
    handleChangeElement(obj) {
      let built = store.getState().built;
      let wbsItem = built.wbsItem;
      wbsItem.elementName = obj.value;
      dispatch({
        type: AS_BUILT_SET_ELEMENT,
        payload: wbsItem,
      });
    },
    closeViewMoreModal() {
      dispatch({
        type: BUILT_VIEW_MODAL,
        payload: false,
      });
      dispatch({
        type: RESET_BUILT_MODEL,
      });
    },
    openViewMoreModal() {
      dispatch({
        type: BUILT_VIEW_MORE_MODAL,
        payload: false,
      });
    },
    addComponent() {
      dispatch(addComponent())
        .then((response) => {
          dispatch(buildStructure());
          swal(response.value.data.message, {
            icon: "success",
          });
          dispatch({
            type: BUILT_VIEW_MODAL,
            payload: false,
          });
          dispatch({
            type: RESET_BUILT_MODEL,
          });
        })
        .catch((err) => {
          swal("failed to save", {
            icon: "error",
          });
        });
    },
    handleChangedcNo(value) {
      dispatch({
        type: SET_DCNO,
        payload: value,
      });
    },
    handleChangeStructName(value) {
      dispatch({
        type: SET_BUILD_STRUCT_NAME,
        payload: value,
      });
    },
    handleChangeStructCode(value) {
      dispatch({
        type: SET_BUILD_STRUCT_CODE,
        payload: value,
      });
    },
    handleChangeActualWbs(value) {
      dispatch({
        type: SET_ACT_WBS,
        payload: value,
      });
    },
    handleChangeFabYear(value) {
      dispatch({
        type: SET_FAB_YEAR,
        payload: value,
      });
    },
    handleChangeRelDate(value) {
      dispatch({
        type: SET_EXP_REL_DATE,
        payload: value,
      });
    },
    handleChangeReuse(value) {
      dispatch({
        type: SET_REUSE,
        payload: value,
      });
    },
    handleChangeWeight(value) {
      dispatch({
        type: SET_ESTIMATE_WEIGHT,
        payload: value,
      });
    },
    handleChangeRemarks(value) {
      dispatch({
        type: SET_REMARK,
        payload: value,
      });
    },
    handleUploadFile(file) {
      dispatch({
        type: SET_BUILD_FILES,
        payload: file,
      });
    },
    handleUploadImage(image) {
      dispatch({
        type: SET_IMAGE_UPLOAD,
        payload: image,
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewMoreModal);
