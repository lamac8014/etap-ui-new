import { connect } from "react-redux";
import swal from "sweetalert";
import { addComponentCost } from "../../actions/fabCostActions";
import {
  FAB_MORE_MODAL,
  FAB_MORE_PAGE,
  FAB_EDIT_MORE_MODAL,
  SET_COST,
  SET_CURRENT_FABCOST_STRUCTURE,
  RESET_FBCOST_MODAL,
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
