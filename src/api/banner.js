import request from '../utils/request'

export function addBanner(params){
    return request.post('/banner/add',params)
}
export function getBanner(){
    return request.get('/banner')
}
export function removeBanner(params){
    return request.post('/banner/remove',params)
}
export function removeAllBanner(params){
    return request.post('/banner/removeall',params)
}




