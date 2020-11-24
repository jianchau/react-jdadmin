import request from '../utils/request'

export function addBanner(params){
    return request.post('/banner/add',params)
}
export function getBanner(){
    return request.get('/banner')
}


