import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        showContent: false,
        isShowSpinner: false,
	},
	getters: {
		IS_SHOW_SPINNER: state => {
            return state.isShowSpinner;
        },
	},
	mutations: {
		CHANGE_SHOW_CONTENT: (state, payload) => {
            state.showContent = payload;
        },
        SET_IS_SHOW_SPINNER: (state, payload) => {
            state.isShowSpinner = payload;
        },
	},
	actions: {
		changeShowContent(context, val) {
            context.commit('CHANGE_SHOW_CONTENT', val)
        },
		showSpinner(context, val) {
            context.commit('SET_IS_SHOW_SPINNER', val)
        },
	}
})
