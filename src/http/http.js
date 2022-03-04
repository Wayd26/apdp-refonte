import axios from "axios";
const BASE_URL = "https://laravel.web.sandbox.hard-soft.solutions/api/v1";
// const BASE_URL = "http://phplaravel-268854-2244987.cloudwaysapps.com/api/v1";


const api = axios.create({
   baseURL: BASE_URL,
   // withCredentials: true,
   // timeout: 1000,
   headers: {
       'Access-Control-Allow-Origin': '*',
       'Content-Type': 'multipart/form-data',
      //  'Access-Control-Expose-Headers': 'set-cookie'
      //  'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]')
}
 });

 api.interceptors.response.use(function (response) {
   // Any status code that lie within the range of 2xx cause this function to trigger
   // Do something with response data
   console.log(response)
   console.log(document.cookie)
   return response;
 }, function (error) {
    console.log(error)
   // Any status codes that falls outside the range of 2xx cause this function to trigger
   // Do something with response error
   return Promise.reject(error);
 });





export function register_or_login(route,data){
   console.log(document.head.querySelector('meta[name="csrf-token"]'))
   const formData = new FormData();
   for (const d of Object.keys(data)) {
      formData.append(d,data[d])
   }
   const response = api.post(`/auth/${route}`,JSON.stringify(data))
   return response.then(data => data).catch( error => error)
}


export function getForm(id){
   const response = api.get(`/formulaires/${id}`)
    return response.then(data => data).catch( error => error)
}

export function getAllArticles() {

  const response = api.get(`/articles`);
    return response.then(data => data).catch( error => error)
   }
   
   export function getATypeOfArticles(type) {
      const response = api.get(`/articles?slug=` + `${type}`)
      return response.then(data => data).catch( error => error)
}