import {SET_CARDS} from "./types";
import {initState} from './initState'

export default function cardReducer(state = initState().cards, action) {
    switch (action.type) {
        case SET_CARDS:
            return action.payload
        default:
            return state
    }
}
