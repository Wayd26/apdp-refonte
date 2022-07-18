import axios from "axios";
import {DeviceUUID} from "device-uuid"

//axios interceptors
axios.interceptors.request.use(function (config) {
    config.headers.deviceUUID = new DeviceUUID().get();
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

//actions
export function doSomething(payload) {
    return {type: "DO_SOMETHING", payload}
}
export function getRemoteData() {
    return function (dispatch) {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(json => {
                dispatch({type: "SET", key: 'remoteData', payload: json.data});
                //window.location = 'https://google.com';
            });
    };
}
export function getArticles(type) {
    return function (dispatch) {
        return axios.get('http://phplaravel-268854-2244987.cloudwaysapps.com/api/v1/articles?type='+type)
            .then(json => {
                dispatch({type: "SET", key: 'articles', payload: json.data});
                //window.location = 'https://google.com';
            }
            )
            .then(result => {

            })
    };
}
