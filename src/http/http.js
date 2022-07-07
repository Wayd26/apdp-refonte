import axios from "axios";
const BASE_URL = "https://laravel.web.sandbox.hard-soft.solutions/api/v1";
// const BASE_URL = "http://phplaravel-268854-2244987.cloudwaysapps.com/api/v1";

const api = axios.create({
   baseURL: BASE_URL,
   // withCredentials: true,
   // timeout: 1000,
   // headers: {
   //    //  'Access-Control-Allow-Origin': '*',
   //    'Content-Type': 'multipart/form-data',
   //    'Accept': 'application/json',
   // }
});

// api.interceptors.request.use(function (config) {
//    var token = localStorage.getItem("token");
//    config.headers.common['X-CSRF-TOKEN'] = token;
//    console.log(config);
//    return config;
// });

api.interceptors.response.use(function (response) {
// Any status code that lie within the range of 2xx cause this function to trigger
// Do something with response data
   console.log(response)
   return response;
}, function (error) {
      console.log(error)
   // Any status codes that falls outside the range of 2xx cause this function to trigger
   // Do something with response error
   return Promise.reject(error);
});


function getCookie(name) {
   const value = `; ${document.cookie}`;
   const parts = value.split(`; ${name}=`);
   if (parts.length === 2) return parts.pop().split(';').shift();
}


export function get_user(user_token){
   var config = {
     method: 'get',
     url: `https://laravel.web.sandbox.hard-soft.solutions/api/v1/me`,
     headers: { 
       'Accept': 'application/json', 
       'Authorization': `Bearer ${user_token}`
     }
   };
   
   return axios(config)
   .then(response => response)
   .catch(error => error);
}

export function getRequestedQuery(ref_number){
   var config = {
     method: 'get',
     url: `https://laravel.web.sandbox.hard-soft.solutions/api/v1/formulaires-soumis/${ref_number}`,
     headers: { 
       'Accept': 'application/json', 
       'Authorization': `Bearer ${localStorage.getItem("user_token")}`
     }
   };
   
   return axios(config)
   .then(response => response)
   .catch(error => error);
}

export function logout(user_token){
   var config = {
     method: 'get',
     url: `https://laravel.web.sandbox.hard-soft.solutions/api/v1/auth/logout`,
     headers: { 
       'Accept': 'application/json', 
       'Authorization': `Bearer ${user_token}`
     }
   };
   
   return axios(config)
   .then(response => response)
   .catch(error => error);
}

export function register_or_login(route, data){
   var config = {
      method: 'post',
      url: `https://laravel.web.sandbox.hard-soft.solutions/api/v1/auth/${route}`,
      headers: { 
         'Accept': 'application/json', 
         'Content-Type': 'application/json'
      },
      data : data
   };
   
   return axios(config)
   .then(response => response)
   .catch(error => error);
}


export function getForm(type){
   const response = api.get(`/formulaires?type=${type}`)
   return response.then(data => data).catch( error => error)
}

export function submitFormSection(formId, sectionId, data){
   var config = {
      method: 'post',
      url: `https://laravel.web.sandbox.hard-soft.solutions/api/v1/formulaires/${formId}/sections/${sectionId}/reponses`,
      headers: {
         'Accept': 'application/json', 
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${localStorage.getItem('user_token')}`
      },
      data : data
   };
   
   return axios(config)
   .then(response => response)
   .catch(error => error);
}

export function getAllArticles() {
   const response = api.get(`/articles`);
   return response.then(data => data).catch( error => error)
}
   
export function getATypeOfArticles(type, pageNumber) {
   const response = api.get(`/articles?slug=` + `${type}&page=` + `${pageNumber}&categorie=` + `&section=` + ``)
   return response.then(data => data).catch( error => error)
}

   
export function getRightsOrDuties(type, categorie, section, pageNumber) {
   const response = api.get(`/articles?slug=` + `${type}&categorie=` + `${categorie}&page=` + `${pageNumber}&section=` + `${section}`)
   return response.then(data => data).catch( error => error)
}

export function getVisitsNumber(namespace) {
   const response = axios.get(`https://api.countapi.xyz/hit/${namespace}/key`)
   return response.then(data => data).catch( error => error)
}

export function getFaq(thematic) {
   const response = api.get(`/faqs?thematic=${thematic}`)
   return response.then(data => data).catch( error => error)
}

// Forums
export function getAllForums() {
   const response = api.get(`/forums`);
   return response.then(data => data).catch( error => error)
}
   
export function getAForum(id) {
   const response = api.get(`/forums/${id}`)
   return response.then(data => data).catch( error => error)
}

// Blog
export function getAllBlogs() {
   const response = api.get(`/blog-posts`);
   return response.then(data => data).catch( error => error)
}
   
export function getABlog(id) {
   const response = api.get(`/blog-posts/${id}`)
   return response.then(data => data).catch( error => error)
}

export function getArticlesResearched(searchedText, pageNumber) {
   const response = api.get(`/query/articles?query=${searchedText}&page=` + `${pageNumber}`)
   return response.then(data => data).catch( error => error)
}