import { mutations } from './types';

export default {
    [mutations.SET_LOADING](state, data) {
        if (data.add === true) {
            state.loadQueue.push(data.id);
            return;
        }

        for (let i = 0; i < state.loadQueue.length; i++) {
            if (state.loadQueue[i] === data.id) {
                state.loadQueue.splice(i, 1);
                break;
            }
        }
    },
    [mutations.SET_USER_ID](state, data) {
        state.userId = data;
    },
    [mutations.SET_URL](state, data) {
        state.url = data;
    }
}