import axios from 'axios'
const isDev = process.env.NODE_ENV === 'development'
const request = axios.create({
    baseURL:isDev?'':'http://localhost:3333/api'
})

//设置拦截器


//导出axios实例
export default request

