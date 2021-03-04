import store from '../store';
import axios from 'axios';
import config from '../config';
import { COMPONENT_TYPE, ADD_COMPONENT, LIST_COMPONENT,GET_COMPONENT_TYPE,UPDATE_COMPONENT_TYPE} from "./types";

export const addComponent = () => {
    const {componentType} = store.getState().component;
      const body={
          id : 0,
          name: componentType,
          isActive: true
      };
    return {
        type: ADD_COMPONENT,
        payload: axios.post(config.BASE_URL + '/api/ComponentType/addcomponenttype', body)
    }
}
export const updateComponentType = (id) => {
    const {componentTypeID,componentType,componentTypeStatus} = store.getState().component;
    const status=(componentTypeStatus.id==="InActive")?false:true
    console.log("++++++++++++")
    console.log(`component type status: ${status}`)
    console.log("++++++++++++")
      const body={
          id:componentTypeID,
          name: componentType,
          isActive: status
      };
    return {
        type: UPDATE_COMPONENT_TYPE,
        payload: axios.put(config.BASE_URL + '/api/ComponentType/updatecomponenttype/'+componentTypeID, body)
    }
}


export const componentList = () => {
    return {
        type: LIST_COMPONENT,
        payload: axios.get(config.BASE_URL + '/api/ComponentType/getcomponenttype')
    }
}

export const getSingleComponentType = (id) => {
    return {
        type: GET_COMPONENT_TYPE,
        payload: axios.get(config.BASE_URL + '/api/ComponentType/getcomponenttype/'+id)
    }
}
