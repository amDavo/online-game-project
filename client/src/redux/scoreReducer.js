import {ADD_SCORE} from "./types";
import {initState} from './initState'

export default function scoreReducer(state = initState().score, action) {
    switch (action.type) {
        case ADD_SCORE:
            return state + action.payload
        default:
            return state
    }
}
