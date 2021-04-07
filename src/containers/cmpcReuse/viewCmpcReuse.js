import { connect } from "react-redux";
import store from "../../store";
import {
  getCmpcList,
  updateDispatchStructure,
} from "../../actions/cmpcReuseActions";
import {
  CHANGE_CMPC_EDIT_MORE_MODAL_STATUS,
  CHANGE_CMPC_MORE_MODAL_STATUS,
  CMPC_EDIT_MORE_PAGE,
  CMPC_MORE_PAGE,
  CMPC_SET_SELECTED_ITEMS,
  RESET_MESSAGE,
  SET_MODIFICATION,
  SET_SELECTED_ITEMS,
  TRANSFORM_STRUCTURE_DATA,
} from "../../actions/types";
import ViewCmpcReuse from "../../pages/cmpcReuse/ViewCmpcReuse";

const mapDispatchToProps = (dispatch, props) => {
  return {
    cmpcList() {
      dispatch(getCmpcList()).then((response) => {
        let cmpcList = store.getState().cmpcReuse.cmpcList;
        let tempArr = [];
        cmpcList.map((item) => {
          let tempObj = {
            ...item,
            checked: false,
          };
          tempArr.push(tempObj);
        });
        dispatch({
          type: TRANSFORM_STRUCTURE_DATA,
          payload: tempArr,
        });
      });
    },
    handleViewMore(id) {
      dispatch({
        type: CMPC_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: CHANGE_CMPC_MORE_MODAL_STATUS,
        payload: true,
      });
    },
    handleEdit(id) {
      dispatch({
        type: CMPC_EDIT_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: CHANGE_CMPC_EDIT_MORE_MODAL_STATUS,
        payload: true,
      });
    },
    handleChangeModification(value) {
      let modifyFlag =
        value === "withMod" ? true : value === "withoutMod" ? false : false;
      dispatch({
        type: SET_MODIFICATION,
        payload: modifyFlag,
      });
    },
    setSelectedStructures(structure) {
      let cmpc = store.getState().cmpcReuse;
      let cmpcList = JSON.parse(JSON.stringify(cmpc.cmpcList));

      let selectedItems = JSON.parse(JSON.stringify(cmpc.selectedItems));
      cmpcList.map((item) => {
        if (item.dispatchRequirementId === structure.dispatchRequirementId) {
          item.checked = !item.checked;
        }
      });
      if (selectedItems.length > 0) {
        let index = selectedItems.indexOf(
          selectedItems.filter((item) => {
            return (
              item.dispatchRequirementId === structure.dispatchRequirementId
            );
          })[0]
        );
        index !== -1
          ? selectedItems.splice(index, 1)
          : selectedItems.push(structure);
      } else {
        selectedItems.push(structure);
      }

      dispatch({
        type: CMPC_SET_SELECTED_ITEMS,
        payload: selectedItems,
        cmpcList: cmpcList,
      });
    },
    updateStructure() {
      dispatch(updateDispatchStructure()).then((response) =>
        dispatch(getCmpcList())
      );
    },
    resetMessage() {
      dispatch({ type: RESET_MESSAGE });
    },
  };
};

const mapStateToProps = (state) => {
  const cmpcReuse = store.getState().cmpcReuse;
  return {
    cmpcReuse,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCmpcReuse);
