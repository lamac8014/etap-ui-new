import { connect } from "react-redux";
import swal from "sweetalert";
import { addComponentCost, fabricationStructure } from "../../actions/fabCostActions";
import {
  FAB_MORE_MODAL,
  FAB_MORE_PAGE,
  FAB_EDIT_MORE_MODAL,
  SET_COST,
  SET_CURRENT_FABCOST_STRUCTURE,
  RESET_FBCOST_MODAL,
  TRANSFORM_FABRICATION_STRUCTURE,
} from "../../actions/types";
import FabCostModal from "../../pages/FabCostPage/FabCostModal";
import store from "../../store";
const mapDispatchToProps = (dispatch, props) => {
  return {
    closeFabEditModal() {
      dispatch({
        type: FAB_MORE_MODAL,
        payload: false,
      });
      dispatch({
        type: RESET_FBCOST_MODAL,
      });
    },
    showFabCostEditModal() {
      dispatch({
        type: FAB_EDIT_MORE_MODAL,
        payload: false,
      });
    },

    handleChangeFabcost(value) {
      dispatch({
        type: SET_COST,
        payload: value,
      });
    },
    addComponentCost() {
      dispatch(addComponentCost())
        .then((response) => {
          dispatch({
            type: FAB_MORE_MODAL,
            payload: false,
          });
          dispatch({
            type: RESET_FBCOST_MODAL,
          });
          swal(response.value.data.message, {
            icon: "success",
          });
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
        })
        .catch((err) => {
          swal("Add Cost failed", {
            icon: "error",
          });
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
export default connect(mapStateToProps, mapDispatchToProps)(FabCostModal);
