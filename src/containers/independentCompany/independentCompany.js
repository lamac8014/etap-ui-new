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
    SHOW_ADD_ICBU_MODAL,
    IC_STATUS,
} from '../../actions/types';
import {createIcbu,updateIcbu,icbuList} from '../../actions/icbuAction';
import AddIndependentCompany from '../../pages/independentCompany/AddIndependentCompany';
import swal from "sweetalert"

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },
        createIcbu(){ 
            (dispatch(createIcbu())).then((response)=>{
                swal(response.value.data.message, {
                    icon: "success",
                  })
                dispatch({
                    type: SHOW_ADD_ICBU_MODAL,
                    payload: false,
                });
                dispatch({ type: RESET_IC_FORM });
                dispatch(icbuList());
            }).catch(err => {
                // console.log(err.response.data.message)
                swal(err.response.data.message, {
                    icon: "error",
                  })
            })
        },
        updateIcbu() {
            dispatch(updateIcbu()).then((response) => {
                swal(response.value.data.message, {
                    icon: "success",
                  })
                dispatch({
                    type: SHOW_ADD_ICBU_MODAL,
                    payload: false,
                });
                dispatch({ type: RESET_IC_FORM });
                dispatch(icbuList());
            }).catch((err) => {
                swal(err.response.data.message, {
                    icon: "error",
                  })
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
        handleIcStatus(value) {
            dispatch({
              type: IC_STATUS,
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
