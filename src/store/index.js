import {createStore,applyMiddleware} from 'redux'
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk'
import sider_reducer from './module/sider'
import common_reducer from './module/common'
const rootReducer = combineReducers({
    sider_reducer,
    common_reducer,
})


const store = createStore(rootReducer,applyMiddleware(thunk))

export default store
