import types from './actionTypes'
export const toggle = ()=>({
    type:types.TOGGLE,
})

export const addCurrentPath = (payload)=>{
    console.log(payload)
    return {
        type:types.ADD_CURRENTPATH,
        payload
    }
}


