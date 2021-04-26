import axios from 'axios'
const http = axios.create({
  baseURL:'http://localhost:3000/web/api'
})
http.interceptors.request.use(config=>{
  return config
},err=>{
  return Promise.reject(err)
})

http.interceptors.response.use(res=>{
  return res
},err=>{
  return Promise.reject(err)
})