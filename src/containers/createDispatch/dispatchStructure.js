import { connect } from "react-redux";
import {
  getSiteReqDetailsById,
  createDispatch,
  setActiveItem,
  setSelectedItem,
} from "../../actions/createDispatchActions";
import { sortstructuresBasedOnAttributes } from "../../pages/createDispatch/utils";
import {
  SET_SELECTED_ITEMS,
  RESET_MESSAGE,
  SET_MODAL_DATA,
  CD_SET_SERVICE_TYPE_ID,
  SET_DISPATCH_ERROR,
  RESET_SELECTION,
  SET_SHOW_ATTRIBUTE_MODAL,
  SET_CURRENT_ATTRIBUTE_MODAL_DATA,
  SET_STRUCTURES_FOR_REUSE,
  DISABLE_SITE_REQUIREMENTS,
  TRANSFORM_SITE_REQUIREMENTS,
  SET_SHOW_QUANTITY_MODAL_FLAG,
  SET_QUANTITY,
  SET_NOTES,
  SET_CONFIRMATION_MODAL_FLAG,
  SET_RELEASE_FILTER,
  SET_IS_ATTRIBUTE_FILTER,
  SET_CURRENT_REQ_INFO,
  SET_QUANTITY_ERROR,
  RESET_PAGE,
} from "../../actions/types";
import { nanoid } from "nanoid";
import swal from "sweetalert";

import DispatchStructure from "../../pages/createDispatch/DispatchStructure";
import store from "../../store";
const mapDispatchToProps = (dispatch, props) => {
  return {
    onPageLoad(structId, siteReqId, currentReqInfo) {
      dispatch(getSiteReqDetailsById(structId, siteReqId)).then(() => {
        this.transformSiteRequirement(structId, siteReqId);
      });
      if (currentReqInfo) {
        dispatch({
          type: SET_CURRENT_REQ_INFO,
          payload: currentReqInfo,
        });
      }
      // dispatch({
      //   type: CD_SET_CURRENT_REQUIREMENT,
      //   payload: JSON.parse(localStorage.getItem("currentRequirementInfo")),
      // });
      // dispatch(setActiveItem(structId,siteReqId));
    },
    transformSiteRequirement(structId, siteReqId, sort = false) {
      let createDisp = store.getState().createDispatch;
      let siteReq = JSON.parse(JSON.stringify(createDisp.siteReqDetailsById));
      let tmpArr = [];
      let availability = "-",
        availDate = "-",
        disabled = false;
      let currentDate = new Date();
      siteReq &&
        siteReq.map((structure, index) => {
          if (structure.surPlusFromDate) {
            let surplusDate = new Date(structure.surPlusFromDate);
            if (currentDate.getTime() > surplusDate.getTime()) {
              availability = "YES";
              availDate = structure.surPlusFromDate.split("T")[0];
              disabled = false;
            }
          } else {
            availability = "-";
            availDate = "-";
            disabled = true;
          }
          let parsedAttr = JSON.parse(structure.projectStructureAttributes);
          structure.projectStructureAttributes = parsedAttr;
          parsedAttr.map((item) => {
            structure[item.name] = item.value ? item.value : 0;
          });
          let currentReqInfo = createDisp.currentReqInfo;
          let tmpObj = {
            ...structure,
            temp_id: index,
            availability,
            availDate,
            disabled,
            quantity: 1,
            fromProjectId: currentReqInfo.fromProjectId,
            checked: false,
          };
          if (
            (structure.projectCurrentStatus === "READY TO REUSE" ||
              structure.projectCurrentStatus === "NEW") &&
            structure.projectStructureStatus === "AVAILABLE"
          ) {
            !tmpObj.disabled && tmpArr.push(tmpObj);
          }
        });
      tmpArr = sort
        ? sortstructuresBasedOnAttributes(
            tmpArr,
            store.getState().createDispatch.chosenAttribute.value
          )
        : tmpArr;
      dispatch({
        type: TRANSFORM_SITE_REQUIREMENTS,
        payload: tmpArr,
        structId,
        siteReqId,
      });
    },
    handleChangeReleaseFilter(obj, sort) {
      dispatch({
        type: SET_RELEASE_FILTER,
        payload: obj,
      });
      let createDisp = store.getState().createDispatch;
      let siteReqId = createDisp.siteReqId;
      let structId = createDisp.structId;
      let releaseFilter = createDisp.releaseFilter;
      dispatch(
        getSiteReqDetailsById(structId, siteReqId, releaseFilter.value, true)
      ).then(() => {
        // this.transformSiteRequirement(structId, siteReqId);
        let createDisp = store.getState().createDispatch;
        let siteReq = JSON.parse(JSON.stringify(createDisp.siteReqDetailsById));
        let tmpArr = [];
        let availability = "-",
          availDate = "-",
          disabled = false;
        let currentDate = new Date();
        siteReq &&
          siteReq.map((structure, index) => {
            if (structure.surPlusFromDate) {
              let surplusDate = new Date(structure.surPlusFromDate);
              if (currentDate.getTime() > surplusDate.getTime()) {
                availability = "YES";
                availDate = structure.surPlusFromDate.split("T")[0];
                disabled = false;
              }
            } else {
              availability = "-";
              availDate = "-";
              disabled = true;
            }
            let parsedAttr = JSON.parse(structure.projectStructureAttributes);
            structure.projectStructureAttributes = parsedAttr;
            parsedAttr.map((item) => {
              structure[item.name] = item.value ? item.value : 0;
            });
            let currentReqInfo = createDisp.currentReqInfo;
            let tmpObj = {
              ...structure,
              temp_id: index,
              availability,
              availDate,
              disabled,
              quantity: 1,
              fromProjectId: currentReqInfo.fromProjectId,
              checked: false,
            };

            if (
              (structure.projectCurrentStatus === "IN USE" ||
                structure.projectCurrentStatus === "READY TO REUSE" ||
                structure.projectCurrentStatus === "NEW") &&
              (structure.projectStructureStatus === "NOT AVAILABLE" ||
                structure.projectStructureStatus === "AVAILABLE")
            ) {
              !tmpObj.disabled && tmpArr.push(tmpObj);
            }
          });

        tmpArr = sort
          ? sortstructuresBasedOnAttributes(
              tmpArr,
              store.getState().createDispatch.chosenAttribute.value
            )
          : tmpArr;
        dispatch({
          type: TRANSFORM_SITE_REQUIREMENTS,
          payload: tmpArr,
          structId,
          siteReqId,
        });
      });
    },
    handleChangeAttributeFilter(obj, item) {
      dispatch({
        type: SET_IS_ATTRIBUTE_FILTER,
        payload: {
          flag: true,
          chosenAttr: obj,
        },
      });
      let createDisp = store.getState().createDispatch;
      let siteReqId = createDisp.siteReqId;
      let structId = createDisp.structId;
      let isAttributeBasedFilter = createDisp.isAttributeBasedFilter;
      dispatch(
        getSiteReqDetailsById(structId, siteReqId, null, isAttributeBasedFilter)
      ).then(() => {
        this.transformSiteRequirement(structId, siteReqId, true);
      });
    },
    setSelectedStructures(value) {
      // dispatch({
      //   type: SET_SELECTED_ITEMS,
      //   payload: value,
      // });
      dispatch(setSelectedItem(value));
    },
    showAttributeViewMore(structCode) {
      let currentAttr = store
        .getState()
        .createDispatch.transformedSiteReq.filter((item) => {
          return item.structureCode === structCode;
        })[0];
      dispatch({
        type: SET_CURRENT_ATTRIBUTE_MODAL_DATA,
        payload: currentAttr.projectStructureAttributes,
      });
      dispatch({
        type: SET_SHOW_ATTRIBUTE_MODAL,
        payload: true,
      });
    },
    hideAttributeViewMore() {
      dispatch({
        type: SET_CURRENT_ATTRIBUTE_MODAL_DATA,
        payload: "",
      });
      dispatch({
        type: SET_SHOW_ATTRIBUTE_MODAL,
        payload: false,
      });
    },
    setStructuresForReuse(servTypeId) {
      let createDisp = store.getState().createDispatch;
      let selectedItems = JSON.parse(JSON.stringify(createDisp.selectedItems));
      let transformedSiteReq = JSON.parse(
        JSON.stringify(createDisp.transformedSiteReq)
      );
      let currentReqInfo = createDisp.currentReqInfo;
      selectedItems.map((item) => {
        item.serviceTypeId = servTypeId;
        item.uid = nanoid();
      });
      let totalStructures = [
        ...createDisp.dispatchStructures,
        ...selectedItems,
      ];
      let totalQty = 0;
      totalStructures.map((item) => {
        totalQty += parseInt(item.quantity);
      });
      if (totalQty <= currentReqInfo.quantity) {
        dispatch({
          type: SET_STRUCTURES_FOR_REUSE,
          payload: totalStructures,
        });
        //disable the checkboxes
        totalStructures.map((item) => {
          transformedSiteReq.map((req) => {
            if (req.temp_id === item.temp_id) {
              req.disabled = true;
            }
          });
        });

        dispatch({
          type: DISABLE_SITE_REQUIREMENTS,
          payload: transformedSiteReq,
        });
        dispatch({
          type: SET_SELECTED_ITEMS,
          payload: selectedItems,
          reuseResult: true,
          fabOutResult: false,
        });
      } else {
        swal("Invalid quantity", {
          icon: "error",
        });
      }
    },
    setStructuresForFabOut() {
      let createDisp = store.getState().createDispatch;
      let currentReqInfo = JSON.parse(
        localStorage.getItem("currentRequirementInfo")
      );
      let tempObj = {
        ...currentReqInfo,
        uid: nanoid(),
        serviceTypeId: createDisp.serviceTypeId,
        quantity: createDisp.quantity,
        notes: createDisp.notes,
      };
      let totalStructures = [...createDisp.dispatchStructures, tempObj];
      let totalQty = 0;
      totalStructures.map((item) => {
        totalQty += parseInt(item.quantity);
      });
      if (totalQty <= currentReqInfo.quantity) {
        dispatch({
          type: SET_STRUCTURES_FOR_REUSE,
          payload: totalStructures,
        });
        dispatch({
          type: SET_SHOW_QUANTITY_MODAL_FLAG,
          payload: false,
        });
        dispatch({
          type: SET_QUANTITY,
          payload: "",
        });
        dispatch({
          type: SET_NOTES,
          payload: "",
        });
        dispatch({
          type: SET_QUANTITY_ERROR,
          payload: {
            errorFlag: false,
            message: "",
          },
        });
      } else {
        dispatch({
          type: SET_QUANTITY_ERROR,
          payload: {
            errorFlag: true,
            message: "Invalid quantity",
          },
        });
        dispatch({
          type: SET_QUANTITY,
          payload: "",
        });
        dispatch({
          type: SET_NOTES,
          payload: "",
        });
      }
    },
    setServiceTypeId(value) {
      dispatch({
        type: CD_SET_SERVICE_TYPE_ID,
        payload: value,
      });
    },
    setDispatchError(flag, message) {
      dispatch({
        type: SET_DISPATCH_ERROR,
        payload: {
          flag,
          message,
        },
      });
    },
    showGetQuantityModal() {
      dispatch({
        type: SET_SHOW_QUANTITY_MODAL_FLAG,
        payload: true,
      });
    },
    hideGetQuantityModal() {
      dispatch({
        type: SET_SHOW_QUANTITY_MODAL_FLAG,
        payload: false,
      });
      dispatch({
        type: CD_SET_SERVICE_TYPE_ID,
        payload: "",
      });
      dispatch({
        type: SET_QUANTITY_ERROR,
        payload: {
          errorFlag: false,
          message: "",
        },
      });
      dispatch({
        type: SET_QUANTITY,
        payload: "",
      });
      dispatch({
        type: SET_NOTES,
        payload: "",
      });
    },
    showConfirmationModal() {
      dispatch({
        type: SET_CONFIRMATION_MODAL_FLAG,
        payload: true,
      });
    },
    hideConfirmationModal() {
      dispatch({
        type: SET_CONFIRMATION_MODAL_FLAG,
        payload: false,
      });
      let createDispatch = store.getState().createDispatch;
      let transformedSiteReq = JSON.parse(
        JSON.stringify(createDispatch.transformedSiteReq)
      );
      transformedSiteReq.map((item) => {
        if (item.availability === "YES") {
          item.disabled = false;
        }
        // item.checked = false;
      });
      dispatch({
        type: DISABLE_SITE_REQUIREMENTS,
        payload: transformedSiteReq,
      });
      dispatch({
        type: SET_STRUCTURES_FOR_REUSE,
        payload: [],
      });
      dispatch({
        type: SET_SELECTED_ITEMS,
        reuseResult: true,
        fabOutResult: false,
      });
    },

    handleChangeQuantity(value) {
      dispatch({
        type: SET_QUANTITY,
        payload: value,
      });
    },
    handleChangeNotes(value) {
      dispatch({
        type: SET_NOTES,
        payload: value,
      });
    },
    createDispatchApi() {
      dispatch(createDispatch())
        .then((response) => {
          swal("Dispatch Succcessful", {
            icon: "success",
          });
          dispatch({
            type: SET_SELECTED_ITEMS,
            payload: [],
            reuseResult: true,
            fabOutResult: false,
          });
          dispatch({
            type: RESET_SELECTION,
          });
          props.history.push("/etrack/dispatch/twccDispatch");
        })
        .catch((err) => {
          swal("Dispatch failed", {
            icon: "error",
          });
          dispatch({
            type: SET_SELECTED_ITEMS,
            payload: [],
            reuseResult: true,
            fabOutResult: false,
          });
          dispatch({
            type: RESET_SELECTION,
          });
        });
      dispatch({
        type: SET_SELECTED_ITEMS,
        payload: [],
        reuseResult: true,
        fabOutResult: false,
      });
      dispatch({
        type: RESET_SELECTION,
      });
    },
    removeFromDispatchStructures(row) {
      let createDisp = store.getState().createDispatch;
      let dispatchStructures = JSON.parse(
        JSON.stringify(createDisp.dispatchStructures)
      );
      let tempArr = dispatchStructures.filter((item) => {
        return item.uid !== row.uid;
      });
      dispatch({
        type: SET_STRUCTURES_FOR_REUSE,
        payload: tempArr,
      });
    },
    resetMessage() {
      dispatch({
        type: RESET_MESSAGE,
      });
    },
    discardChoices() {
      const { structId, siteReqId } = store.getState().createDispatch;
      dispatch(getSiteReqDetailsById(structId, siteReqId)).then(() => {
        let createDisp = store.getState().createDispatch;
        let siteReq = JSON.parse(JSON.stringify(createDisp.siteReqDetailsById));
        let tmpArr = [];
        let availability = "-",
          availDate = "-",
          disabled = false;
        let currentDate = new Date();
        siteReq &&
          siteReq.map((structure, index) => {
            if (structure.surPlusFromDate) {
              let surplusDate = new Date(structure.surPlusFromDate);
              if (currentDate.getTime() > surplusDate.getTime()) {
                availability = "YES";
                availDate = structure.surPlusFromDate.split("T")[0];
                disabled = false;
              }
            } else {
              availability = "-";
              availDate = "-";
              disabled = true;
            }
            let parsedAttr = JSON.parse(structure.projectStructureAttributes);
            structure.projectStructureAttributes = parsedAttr;
            parsedAttr.map((item) => {
              structure[item.name] = item.value ? item.value : 0;
            });
            let currentReqInfo = createDisp.currentReqInfo;
            let tmpObj = {
              ...structure,
              temp_id: index,
              availability,
              availDate,
              disabled,
              quantity: 1,
              fromProjectId: currentReqInfo.fromProjectId,
              checked: false,
            };
            if (
              (structure.projectCurrentStatus === "READY TO REUSE" ||
                structure.projectCurrentStatus === "NEW") &&
              structure.projectStructureStatus === "AVAILABLE"
            ) {
              !tmpObj.disabled && tmpArr.push(tmpObj);
            }
          });
        tmpArr = sortstructuresBasedOnAttributes(
          tmpArr,
          store.getState().createDispatch.chosenAttribute.value
        );

        dispatch({
          type: TRANSFORM_SITE_REQUIREMENTS,
          payload: tmpArr,
          structId,
          siteReqId,
        });
      });
      dispatch({
        type: SET_RELEASE_FILTER,
        payload: "",
      });
      dispatch({
        type: SET_IS_ATTRIBUTE_FILTER,
        payload: {
          flag: false,
          chosenAttr: "",
        },
      });
    },
    resetPage() {
      dispatch({
        type: RESET_PAGE,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const createDispatch = store.getState().createDispatch;
  return {
    createDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DispatchStructure);
