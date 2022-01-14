import { connect } from "react-redux";
import {getFabricationCostList} from "../../actions/bvDprAction"
import { BVDPR_SET_CURRENT_STRUCTURE, SET_SHOW_VIEWMORE_MODAL } from "../../actions/types";
import BvDpr from "../../pages/depreciation/BvDpr";
import store from "../../store";
const mapDispatchToProps = (dispatch,props) => {
    return {
        onPageLoad(){
            dispatch(getFabricationCostList())
        },
        redirectToFabCostMoreDetails(cost, date, name, code) {
            props.history.push(
              `/etrack/deprecitaionPage/bvDprMore/${window.btoa(cost)}/${window.btoa(date)}/${window.btoa(name)}/${window.btoa(code)}`
            );
        },
        openViewMoreModal(id){
            const bvDpr=  store.getState().bvDpr;
            let fabricationCostList = JSON.parse(JSON.stringify(bvDpr.fabricationCostList));
            let currentStructure = fabricationCostList.filter(item => {return item.structureCode === id})
            dispatch({
                type: BVDPR_SET_CURRENT_STRUCTURE,
                payload: currentStructure.length !== 0 ? currentStructure[0] : {}
            })
            dispatch({
                type: SET_SHOW_VIEWMORE_MODAL,
                payload: true
            })
        },
        closeViewMoreModal(){
            dispatch({
                type: SET_SHOW_VIEWMORE_MODAL,
                payload: false
            })
            dispatch({
                type: BVDPR_SET_CURRENT_STRUCTURE,
                payload: {}
            })
        }
    }
}
const mapStateToProps = (state) => {
    const bvDpr = state.bvDpr;
    return {
        bvDpr,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BvDpr);