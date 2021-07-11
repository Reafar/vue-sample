import { getters } from './types';

export default {
    [getters.GET_LOAD_STATUS]: state => {
        return state.loadQueue.length > 0;
    }
}