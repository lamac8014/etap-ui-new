import { connect } from "react-redux";
import FabCostMore from "../../pages/FabCostPage/FabCostMore";
import { getFabricationCost } from "../../actions/fabCostActions";
import { getComponentList } from "../../actions/fabCostActions";
import { RESET_COMPONENT_PAGE, SET_PARAMS_DATA } from "../../actions/types";
const mapDispatchToProps = (dispatch, props) => {
  return {
    onPageLoad(id, dcNo, strName, strCode) {
      dispatch(getComponentList(id));
      dispatch({
        type: SET_PARAMS_DATA,
        payload: {
          dcNo,
          strName,
          strCode,
        },
      });
    },
    resetPage(){
      dispatch({
        type: RESET_COMPONENT_PAGE
      })
    }
  };
};
const mapStateToProps = (state) => {
  const fabCost = state.fabricationCost;
  return {
    fabCost,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FabCostMore);
