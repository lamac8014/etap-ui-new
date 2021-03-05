import store from '../store';
import axios from 'axios';
import config from '../config';

import{LIST_BUILT_DETAILS} from './types';

export const builtList = () => {
    return {
        type: LIST_BUILT_DETAILS,
        payload: axios.get(config.BASE_URL + '/api/ComponentType/getcomponenttype')
    }
}