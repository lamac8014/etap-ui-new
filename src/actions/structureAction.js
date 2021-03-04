import store from '../store';
import axios from 'axios';
import config from '../config';
import { LIST_STRUCTURE,STRUCTURE_ATTRIBUTE_LIST,ADD_STRUCTURE,GET_STRUCTURE_DATA,UPDATE_STRUCTURE,LIST_STRUCTURE_FAMILY} from "./types";

export const addStructure = () => {
    const structure = store.getState().structure;
    const stringifiedStructure = JSON.stringify(structure.attributeList);
      const body={
        "name": structure.structureName,
        "structureTypeId": structure.structureFamily.value,
        "isActive": true,
        "structureAttributes": stringifiedStructure,
      }
    return {
        type: ADD_STRUCTURE,
        payload: axios.post(config.BASE_URL + '/api/Structure/addstructure', body)
    }
}

export const inActiveStructure = () => {

    const structure = store.getState().structure;
    let stringifiedStructure = JSON.stringify(structure.attributeList);
  
    const body={
      "name": structure.structureName,
      "structureTypeId": structure.structureFamily.value,
      "isActive": false,
      "structureAttributes": stringifiedStructure,
    }
  return {
      type: UPDATE_STRUCTURE,
      payload: axios.put(config.BASE_URL + '/api/Structure/updatestructure/'+ structure.id, body)
  }
}
export const structureList = () => {
    return {
        type: LIST_STRUCTURE,
        payload: axios.get(config.BASE_URL + '/api/Structure/getstructure')
    }
}
export const structureFamilyList = () => {
  return {
      type: LIST_STRUCTURE_FAMILY,
      payload: axios.get(config.BASE_URL + '/api/StructureFamily/StructureFamCodeList')
  }
}
export const addAttribute = () => {
    const structure = store.getState().structure;
    let attributeList = structure.attributeList;
    const attributeObj = {
      name: "",
      typeOfInput: "",
      uom: ""
    };
    attributeList.push(attributeObj);
    return {
      type: STRUCTURE_ATTRIBUTE_LIST,
      payload: attributeList,
    };
  };

export const structureFetch = (id) => {
  console.log("Fetch")
    return {
      type: GET_STRUCTURE_DATA,
      payload: axios.get(config.BASE_URL + '/api/Structure/getstructure/'+ id),
    };
};

export const updateStructure = () => {
  const structure = store.getState().structure;
  let stringifiedStructure = JSON.stringify(structure.attributeList);
  
    const body={
      "name": structure.structureName,
      "structureTypeId": structure.structureFamily.value,
      "isActive": true,
      "structureAttributes": stringifiedStructure,
    }
  return {
      type: UPDATE_STRUCTURE,
      payload: axios.put(config.BASE_URL + '/api/Structure/updatestructure/'+ structure.id, body)
  }
}


