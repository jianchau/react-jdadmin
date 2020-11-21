import {Map} from 'immutable'
import types from '../actionTypes'
const defaultState = Map({
    collapsed:false
})
const reducer = (state=defaultState,action)=>{
    switch(action.type){
        case types.TOGGLE:{
            return state.set('collapsed',!state.get('collapsed'))
        }
            
        default:
            return state
    }
}

export default reducer