import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getQuestions} from "../redux/cardActions";
import Question from "./Question";


function parsTable(data) {
    if (data.length > 0) {
        data = data?.map(el => {
            const obj = {...el}
            // JSON.parse(JSON.stringify(el));
            obj.category = el.category.title
            return obj
        })
        let emptyArr = []
        let emptyObj = {}
        data?.forEach(el => {
            if (el.category in emptyObj) {
                emptyObj[el.category].push(el)
            } else {
                emptyObj[el.category] = [el]
                emptyArr.push(el.category)
            }
        })

        for (let key in emptyObj) {
            if (emptyObj[key].length !== 5) {
                delete emptyObj[key]
                emptyArr = emptyArr.filter(el => el != key)
            }
        }
        emptyArr.filter(el => Math.random() > 0.5)
        return {emptyObj, emptyArr}
    }
    return []
}

const Game = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getQuestions())
    }, [])

    const {emptyObj, emptyArr} = parsTable(useSelector(state => state.cards))
    const score = useSelector(state => state.score)

    return (
        <>
            <h2>{score}</h2>
            <table>
                {emptyArr?.map(theme =>
                    <tr>
                        <td>
                            {theme}
                        </td>
                        {emptyObj[theme].map(card =>
                            <td>
                                <Question {...card}>
                                    {card.value}
                                </Question>
                            </td>
                        )}
                    </tr>
                )}
            </table>
        </>
    );
}

export default Game;
