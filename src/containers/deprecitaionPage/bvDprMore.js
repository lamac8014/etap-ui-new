import { connect } from "react-redux";
import { getCostHiring } from "../../actions/bvDprAction";
import { SET_PAGE_PARAMS, TRANSFORM_COST_HIRING } from "../../actions/types";
import BvDprMore from "../../pages/depreciation/BvDprMore";
import store from "../../store";
import { getMonthAndYear } from "../../utils/common";
const mapDispatchToProps = (dispatch,props) => {
    return {
        onPageLoad(cost, date, strName, strCode){
            dispatch({
                type: SET_PAGE_PARAMS,
                payload: {cost, date, strName, strCode}
            })
            dispatch(getCostHiring(cost,date)).then(response => {
                const bvDpr = store.getState().bvDpr
                let hiringCost = JSON.parse(JSON.stringify(bvDpr.hiringCost))
                hiringCost.unshift({
                    amount: parseFloat(bvDpr.params.cost).toFixed(2),
                    prevAmount: parseFloat(bvDpr.params.cost).toFixed(2),
                    dateVal: bvDpr.params.date,
                    age: getMonthAndYear(bvDpr.params.date.split("T")[0])
                })
                hiringCost.forEach((item, index) => {
                    if(index !== 0){
                        item.prevAmount = hiringCost[index-1].amount
                        item.age = getMonthAndYear(item.dateVal)
                        item.amount = item.amount.toFixed(2)
                    }
                })
                dispatch({
                    type: TRANSFORM_COST_HIRING,
                    payload: hiringCost
                })
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
export default connect(mapStateToProps, mapDispatchToProps)(BvDprMore);