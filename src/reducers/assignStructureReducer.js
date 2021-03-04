import {
  PROJECT_NAME,
  STRUCTURE_NAME,
  STRUCTURE_TYPE,
  // CAPACITY,
  // OVER_ALL_LENGTH,
  // UNDER_SLING_OVER_SLUNG,
  // ESTIMATED_WEIGHT,
  // DIAMENSION_LENGTH,
  // DIAMENSION_HEIGHT,
  // DIAMENSION_WIDTH,
  ESTIMATED_WEIGHT,
  NUMBER_OF_COMPONENTS,
  RESET_STRUCTURE_FORM,
  DRAWING_NO,
  LIST_ASSIGN_STRUCTURE,
  GET_ASSIGN_STRUCTURE_DATA_SINGLE,
  CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS,
  LIST_ASSIGN_COMPONENT,
  CHANGE_ASSIGN_COMPONENT_MORE_MODAL_STATUS,
  GET_ASSIGN_COMPONENT_DATA_SINGLE,
  SET_PROJECT_STRUCTURE_ID
} from '../actions/types';

const initialState = {
  projectName: '',
  structureName: '',
  structureType: '',
  estimatedWeight:'',
  noOfComponents: '',
  assignStructureList:[],
  showAssignStructureMoreModal:false,
  assignStructureViewMore:{},
  assignStructureViewMoreAttributes: [],
  structureID: "",
  projectID:"",
  assignComponentList:[],
  assignComponentViewMore:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PROJECT_NAME:
      return {
        ...state,
        projectName: action.payload,
      };
    case STRUCTURE_NAME:
      return {
        ...state,
        structureName: action.payload,
      };
    case STRUCTURE_TYPE:
      return {
        ...state,
        structureType: action.payload,
      };
    // case CAPACITY:
    //   return {
    //     ...state,
    //     capacity: action.payload,
    //   };
    // case DRAWING_NO:
    //   return {
    //     ...state,
    //     drawingNumber: action.payload,
    //   };
    // case OVER_ALL_LENGTH:
    //   return {
    //     ...state,
    //     overAllLength: action.payload,
    //   };
    // case UNDER_SLING_OVER_SLUNG:
    //   return {
    //     ...state,
    //     underSlungOverSlung: action.payload,
    //   };
    // case ESTIMATED_WEIGHT:
    //   return {
    //     ...state,
    //     estimatedWeight: action.payload,
    //   };
    // case DIAMENSION_LENGTH:
    //   return {
    //     ...state,
    //     diamensionLenght: action.payload,
    //   };
    // case DIAMENSION_HEIGHT:
    //   return {
    //     ...state,
    //     diamensionHeight: action.payload,
    //   };
    // case DIAMENSION_WIDTH:
    //   return {
    //     ...state,
    //     diamensionWidth: action.payload,
    //   };
    case ESTIMATED_WEIGHT:
      return {
        ...state,
        estimatedWeight: action.payload,
      };
    case NUMBER_OF_COMPONENTS:
      return {
        ...state,
        noOfComponents: action.payload,
      };
    case SET_PROJECT_STRUCTURE_ID:
      return {
        ...state,
        structureID:action.payload.structureID,
        projectID:action.payload.projectID
      };
    case RESET_STRUCTURE_FORM:
      return {
        ...state,
        projectName: '',
        structureName: '',
        structureType: '',
        estimatedWeight:'',
        noOfComponents: '',
      };
    case `${LIST_ASSIGN_STRUCTURE}_PENDING`:
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
        };
    case `${LIST_ASSIGN_STRUCTURE}_REJECTED`:
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
        };
    case `${LIST_ASSIGN_STRUCTURE}_FULFILLED`:
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: false,
          assignStructureList: action.payload.data,
        };
      case `${LIST_ASSIGN_COMPONENT}_PENDING`:
          return {
            ...state,
            isLoading: true,
            isError: false,
            isSuccess: false,
          };
      case `${LIST_ASSIGN_COMPONENT}_REJECTED`:
          return {
            ...state,
            isLoading: false,
            isError: true,
            isSuccess: false,
          };
      case `${LIST_ASSIGN_COMPONENT}_FULFILLED`:
          return {
            ...state,
            isLoading: false,
            isError: false,
            isSuccess: false,
            assignComponentList: action.payload.data,
          };
      //   case `${GET_ASSIGN_STRUCTURE_DATA_SINGLE}_PENDING`:
      //     return {
      //       ...state,
      //       isLoading: true,
      //       isError: false,
      //       isSuccess: false,
      //     };
      // case `${GET_ASSIGN_STRUCTURE_DATA_SINGLE}_REJECTED`:
      //     return {
      //       ...state,
      //       isLoading: false,
      //       isError: true,
      //       isSuccess: false,
      //     };
      // case `${GET_ASSIGN_STRUCTURE_DATA_SINGLE}_FULFILLED`:
      //     return {
      //       ...state,
      //       isLoading: false,
      //       isError: false,
      //       isSuccess: false,
      //       assignStructureSingle: action.payload.data,
      //     };
      case GET_ASSIGN_STRUCTURE_DATA_SINGLE:
        let parsedAttribute = JSON.parse(action.payload.structureAttributes);
        while(typeof(parsedAttribute) === "string"){
          parsedAttribute = JSON.parse(parsedAttribute);
        }
        return {
          ...state,
          assignStructureViewMore: action.payload,
          assignStructureViewMoreAttributes: parsedAttribute
        };
      case GET_ASSIGN_COMPONENT_DATA_SINGLE:
        return {
          ...state,
          assignComponentViewMore: action.payload,
        };
      case CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS:
        return {
          ...state,
          showAssignStructureMoreModal: action.payload
        }
      case CHANGE_ASSIGN_COMPONENT_MORE_MODAL_STATUS:
        return {
          ...state,
          showAssignComponentMoreModal: action.payload
        }
    default:
      return state;
  }
}
