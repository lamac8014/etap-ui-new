import { connect } from "react-redux";
import FabCost from "../../pages/FabCostPage/FabCost";
import {
  FAB_MORE_MODAL,
  FAB_MORE_PAGE,
  FAB_EDIT_MORE_MODAL,
  GET_FABRICATION_STRUCTURE,
  TRANSFORM_FABRICATION_STRUCTURE,
  SET_CURRENT_FABCOST_STRUCTURE,
  SET_SHOW_VIEW_MORE_MODAL,
} from "../../actions/types";
import { fabricationStructure } from "../../actions/fabCostActions";
import store from "../../store";

const mapDispatchToProps = (dispatch, props) => {
  return {
    redirectToFabCostMoreDetails(id, dispatchNo, structureName, structureCode) {
      props.history.push(
        `/etrack/fabCostPage/fabCostMore/${window.btoa(id)}/${window.btoa(
          dispatchNo
        )}/${window.btoa(structureName)}/${window.btoa(structureCode)}`
      );
    },
    fabricationStructure() {
      dispatch(fabricationStructure()).then((response) => {
        let fabCost = store.getState().fabricationCost;
        let fabricationStructure = JSON.parse(
          JSON.stringify(fabCost.fabricationCost)
        );
        let fabricationCost = fabricationStructure.filter((item) => {
          return item.status === "FABRICATION COMPLETED";
        });
        dispatch({
          type: TRANSFORM_FABRICATION_STRUCTURE,
          payload: fabricationCost,
        });
      });
    },
    handleAddCost(id) {
      let fabCost = store.getState().fabricationCost;
      let fabricationCost = JSON.parse(JSON.stringify(fabCost.fabricationCost));
      let currentStructure = fabricationCost.find((item) => {
        return item.projectStructureId === id;
      });
      dispatch({
        type: SET_CURRENT_FABCOST_STRUCTURE,
        payload: currentStructure,
      });
      dispatch({
        type: FAB_MORE_MODAL,
        payload: true,
      });
    },
    closeFabEditModal() {
      dispatch({
        type: FAB_MORE_MODAL,
        payload: false,
      });
    },
    showFabCostEditModal() {
      dispatch({
        type: FAB_EDIT_MORE_MODAL,
        payload: false,
      });
    },
    showFabCostViewMoreModal(id) {
      let fabCost = store.getState().fabricationCost;
      let fabricationCost = JSON.parse(JSON.stringify(fabCost.fabricationCost));
      let currentStructure = fabricationCost.find((item) => {
        return item.projectStructureId === id;
      });
      dispatch({
        type: SET_CURRENT_FABCOST_STRUCTURE,
        payload: currentStructure,
      });
      dispatch({
        type: SET_SHOW_VIEW_MORE_MODAL,
        payload: true,
      });
    },
    closeFabCostViewMoreModal() {
      dispatch({
        type: SET_CURRENT_FABCOST_STRUCTURE,
        payload: {},
      });
      dispatch({
        type: SET_SHOW_VIEW_MORE_MODAL,
        payload: false,
      });
    },
  };
};
const mapStateToProps = (state) => {
  const fabCost = state.fabricationCost;
  return {
    fabCost,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FabCost);
