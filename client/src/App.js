import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import './App.css';
import {getQuestions} from "./redux/cardActions";
import Question from "./components/Question";
import Header from './components/Header';

function App() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getQuestions);
    }, [])


    return (
        <div className="App">
            hello world
            <Header/>
            <Question/>
        </div>
    );
}

export default App;
