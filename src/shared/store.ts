import Vue from 'vue';
import Vuex from 'vuex';
import { getStoreBuilder } from 'vuex-typex';
import { TodoState, namespace as todoNamespace } from '@/shared/TodoModule';

Vue.use(Vuex);

export interface RootState {
  [todoNamespace]: TodoState;
}

const store = getStoreBuilder<RootState>().vuexStore();
export default store;
