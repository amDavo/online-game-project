import axios from 'axios'
import { SET_CARDS } from './types'
export const setCards = (questions) =>({
  type: SET_CARDS,
  payload:questions
})

export const getQuestions=(dispatch)=>{
axios.get('https://jservice.io/api/clues').
then(res=>{
  dispatch(setCards(res.data))
  console.log(res.data);
})
}
