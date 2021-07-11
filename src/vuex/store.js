import Vue from 'vue';
import Vuex from 'vuex';
import { createLogger } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { actions as actionTypes, getters as getterTypes } from './types';

Vue.use(Vuex);

const state = {
    loadQueue: [],
    url: null,
    userId: null
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins: [createLogger()]
})