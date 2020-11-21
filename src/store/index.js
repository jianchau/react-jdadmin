import {createStore,applyMiddleware} from 'redux'
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk'
import sider_reducer from './module/sider'

const rootReducer = combineReducers({
    sider_reducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store
