import { connect } from 'react-redux';
import store from '../../store';

import {
    STRUCTURE_FAMILY,
    VENDOR,
    STRUCTURE_ID,
    FABRICATION_COST,
    QUANTITY_REQUESTED,
    RESET_STRUCTURE_FORM,
    PROJECT_NAME,
    NUMBER_OF_COMPONENTS,
    

} from '../../actions/types';

import Procurement from '../../pages/procurement/Procurement';

const mapDispatchToProps = dispatch => {
    return {
        resetStructureData() {
            dispatch({ type: RESET_STRUCTURE_FORM });
        },

        handleChangeProcurementStructureFamily(value) {
            dispatch({
                type: STRUCTURE_FAMILY,
                payload: value,
            });
        },
        handleChangeProcurementVendor(value) {
            dispatch({
                type: VENDOR,
                payload: value,
            });
        },
        handleChangeProcurementStructureId(value) {
            dispatch({
                type: STRUCTURE_ID,
                payload: value,
            });
        },
        handleChangeProcurementProject(value) {
            dispatch({
                type: PROJECT_NAME,
                payload: value,
            });
        },
        handleChangeProcurementNumberOfComponents(value) {
            dispatch({
                type: NUMBER_OF_COMPONENTS,
                payload: value,
            });
        },
        handleChangeFabricationCost(value) {
            dispatch({
                type: FABRICATION_COST,
                payload: value,
            });
        },
        handleChangeQuantityRequested(value) {
            dispatch({
                type: QUANTITY_REQUESTED,
                payload: value,
            });
        },
    };
};

const mapStateToProps = state => {
    const procurement = store.getState().procurement;
    return {
        procurement,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Procurement);
