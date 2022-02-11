import { connect } from "react-redux";
import {getDashboardData , getBuList, getProjectList} from "../../actions/dashboardActions"
import { SET_BU, SET_PROJECT, TRANSFORM_PROJECT_DATA } from "../../actions/types";
import Summary from "../../pages/dashBoard/Summary";
import store from "../../store";
const mapDispatchToProps = (dispatch) => {
    return {
        getBuList(){
            dispatch(getBuList())
        },
        onChangeBuList(obj){
            dispatch({
                type: SET_BU,
                payload:obj
            })
            dispatch(getProjectList()).then(response => {
                const dashboard = store.getState().dashboard
                let projectList = JSON.parse(JSON.stringify(dashboard.projectList))

                projectList = projectList.filter(item => {return item.buid.toString() === obj.value.toString()})
                dispatch({
                    type: TRANSFORM_PROJECT_DATA,
                    payload: projectList
                })
            })
        },
        onChangeProjectList(value){
            dispatch({
                type: SET_PROJECT,
                payload:value
            })
            dispatch(getDashboardData(value.value));
        }
    }
}
const mapStateToProps = (state) => {
    const dashboard = state.dashboard;
    return {
        dashboard,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Summary);