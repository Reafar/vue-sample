import { actions, mutations } from './types';

export default {
    [actions.THROW_ERROR]({ commit }, exc) {
        console.log(exc);
        throw new Error(`${exc.source} error ${exc.error}`);
    },
    [actions.SAVE_PROPS]({ commit }, data) {
        commit(mutations.SET_USER_ID, data.userId);
        commit(mutations.SET_URL, data.url);
    }
}