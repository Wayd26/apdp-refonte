import axios from "axios";
const BASE_URL = "https://laravel.web.sandbox.hard-soft.solutions/api/v1";
// const BASE_URL = "http://phplaravel-268854-2244987.cloudwaysapps.com/api/v1";


const api = axios.create({
   baseURL: BASE_URL,
   // timeout: 1000,
   headers: {
       'Access-Control-Allow-Origin': '*',
       'Content-Type': 'application/json'
}
 });


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