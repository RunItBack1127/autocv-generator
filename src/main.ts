import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'

type AppState = {
    isDarkMode: Boolean
}

const appStore = createStore({
    state() {
        return {
            isDarkMode: false
        }
    },
    mutations: {
        toggleDarkMode(state: AppState) {
            state.isDarkMode = !state.isDarkMode;
        }
    }
})

createApp(App).use(appStore).mount('#app')
