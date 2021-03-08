import { connect } from 'react-redux';
import store from '../../store';

import {

    BUSINESS_UNIT,
    INDEPENDENT_COMPANY,
    RESET_STRUCTURE_FORM,
    IC_DESCRIPTION,
    RESET_IC_FORM,
    IC_NAME,
    SHOW_ICBU_MSG,
    SHOW_ADD_ICBU_MODAL
} from '../../actions/types';
import {createIcbu,updateIcbu,icbuList} from '../../actions/icbuAction';
import AddIndependentCompany from '../../pages/independentCompany/AddIndependentCompany';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },
        createIcbu(){ 
            (dispatch(createIcbu())).then(()=>{
                dispatch({
                    type: SHOW_ADD_ICBU_MODAL,
                    payload: false,
                });
                dispatch({ type: RESET_IC_FORM });
                dispatch(icbuList());
            })
        },
        updateIcbu() {
            dispatch(updateIcbu()).then(() => {
                dispatch({
                    type: SHOW_ADD_ICBU_MODAL,
                    payload: false,
                });
                dispatch({ type: RESET_IC_FORM });
                dispatch(icbuList());
            }).catch(() => {
                dispatch({ type: SHOW_ICBU_MSG, payload: true });
            })
        },
        handleChangeIc(value) {
            dispatch({
                type: IC_NAME,
                payload: value,
            });
        },
        handleChangeDescription(value) {
            dispatch({
                type: IC_DESCRIPTION,
                payload: value,
            });
        },

    };
};

const mapStateToProps = state => {
    const icbu = store.getState().icbu;
    return {
        icbu,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddIndependentCompany);
