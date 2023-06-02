import axios from 'axios'
import {store} from '../store/store'
import router from '../router/router'

export default function axiosOptions() {
    const counterSpinner = [];

    function closeSpinner(conf) {
        clearTimeout(conf.timerId);
        counterSpinner.splice(counterSpinner.indexOf(conf.timerId), 1);
        if (counterSpinner.length < 1)
            setTimeout(function () {
                store.dispatch('showSpinner', false)
            }, 200)
    }

    function openSpinner(conf) {
        const timeout = counterSpinner.length > 0 ? 0 : 10;
        conf.timerId = setTimeout(function () {
            store.dispatch('showSpinner', true)
        }, timeout);
        counterSpinner.push(conf.timerId)
    }
    
    axios.interceptors.request.use(
        conf => {
            if (!conf.url.includes('backui=1'))
                openSpinner(conf);
            return conf;
        },
        error => {
            if (!error.request.conf.url.includes('backui=1'))
                closeSpinner(error.request.conf);
            return Promise.reject(error);
        }
    )
    axios.interceptors.response.use(
        response => {
            closeSpinner(response.config)
            return response
        },
        async error => {
            if (error.response) closeSpinner(error?.response?.config)
            if ([500].includes(error?.response?.status)) {
                await router.push({name: 'Error', params: {errorCode: error?.response?.status.toString()}})
            }
            return Promise.reject(error)
        }
    )
}