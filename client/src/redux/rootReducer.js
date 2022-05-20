import {combineReducers} from "redux"
import cardReducer from "./cardReducer"
import scoreReducer from "./scoreReducer";


export default combineReducers({
    cards: cardReducer,
    score: scoreReducer
})
