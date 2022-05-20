import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './App.css';
import { getQuestions } from './redux/cardActions';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getQuestions);
  },[])
  return (
    <div className="App">
   hello world
    </div>
  );
}

export default App;
