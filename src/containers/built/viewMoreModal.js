import { connect } from 'react-redux';
import store from '../../store';

import {
    GET_AS_BUILD_STRUCTURE,
    ADD_STRUCTURE_COMPONENT,
    SET_BUILD_STRUCT_CODE,
    SET_DCNO,
    SET_ESTIMATE_WEIGHT,
    SET_BUILD_FILES,
    SET_IMAGE_UPLOAD,
    SET_BUILD_STRUCT_NAME,
    SET_ACT_WBS,
    SET_FAB_YEAR,
    SET_EXP_REL_DATE,
    SET_REMARK,
    SET_REUSE,
    BUILT_VIEW_MODAL,
    BUILT_VIEW_MORE_MODAL,
} from '../../actions/types';
import { addComponent } from "../../actions/builtAction";
import ViewMoreModal from '../../pages/built/ViewMoreModal';
import { transformDropDownData } from "../../utils/dataTransformer";
import swal from "sweetalert";
const mapDispatchToProps = dispatch => {
    return {
        closeViewMoreModal() {
            dispatch({
                type: BUILT_VIEW_MODAL,
                payload: false,
            })
        },
        openViewMoreModal() {
            dispatch({
                type: BUILT_VIEW_MORE_MODAL,
                payload: false,
            })
        },
        addComponent() {
            dispatch(addComponent()).then((response) => {
                swal(response.value.data.message, {
                    icon: "success",
                });
            })
                .catch((err) => {
                    swal("failed to save", {
                        icon: "error",
                    });
                });
        },
        handleChangedcNo(value) {
            dispatch({
                type: SET_DCNO,
                payload: value,
            });
        },
        handleChangeStructName(value) {
            dispatch({
                type: SET_BUILD_STRUCT_NAME,
                payload: value,
            });
        },
        handleChangeStructCode(value) {
            dispatch({
                type: SET_BUILD_STRUCT_CODE,
                payload: value,
            });
        },
        handleChangeActualWbs(value) {
            dispatch({
                type: SET_ACT_WBS,
                payload: value,
            });
        },
        handleChangeFabYear(value) {
            dispatch({
                type: SET_FAB_YEAR,
                payload: value,
            });
        },
        handleChangeRelDate(value) {
            dispatch({
                type: SET_EXP_REL_DATE,
                payload: value,
            });
        },
        handleChangeReuse(value) {
            dispatch({
                type: SET_REUSE,
                payload: value,
            });
        },
        handleChangeWeight(value) {
            dispatch({
                type: SET_ESTIMATE_WEIGHT,
                payload: value,
            });
        },
        handleChangeRemarks(value) {
            dispatch({
                type: SET_REMARK,
                payload: value,
            });
        },
        handleUploadFile() {
            dispatch({
                type: SET_BUILD_FILES,
                payload: false,
            });
        },
        handleUploadImage() {
            dispatch({
                type: SET_IMAGE_UPLOAD,
                payload: false,
            });
        }
    };
};

const mapStateToProps = state => {
    const built = store.getState().built;
    return {
        built,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMoreModal);
