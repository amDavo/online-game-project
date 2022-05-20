import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import './App.css';
import {getQuestions} from "./redux/cardActions";
import Question from "./components/Question";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getQuestions);
    }, [])


    return (
        <div className="App">
            <Header/>
            <Game/>
            <Question/>
        </div>
    );
}

export default App;
