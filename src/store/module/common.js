import types from '../actionTypes'
import {Map} from 'immutable'
const defaultState = Map({'currentPath':'/'})
const reducer = (state=defaultState,action)=>{
     switch(action.type){
        case types.ADD_CURRENTPATH :{
            window.sessionStorage.setItem('currentPath',action.payload)
            return state.set('currentPath',action.payload)
        }
        default:{
            console.log(action.type)
            return state
        }
            
     }
}

export default reducer