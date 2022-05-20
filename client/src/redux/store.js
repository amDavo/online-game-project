import {createStore,applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import {composeWithDevTools} from '@redux-devtools/extension'
import { initState } from './initState'
import thunk from "redux-thunk";

export default createStore(

  rootReducer, initState(),composeWithDevTools(applyMiddleware(thunk))
)
