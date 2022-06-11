import './App.css';
import { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Test from './components/Test';

function App() {
   const [start, setStart] = useState(true)
   const [allQuestions, setAllQuestions] = useState([])


   useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=medium")
         .then(res => res.join())
         .then(data => setAllQuestions())
   })

   return (
      <main className="App">
         {
            !start
            ? 
            <Quiz />
            :
            // <div className='start-quiz'>
            //     <h1>Quizzical</h1>
            //     <p>Some description if needed</p>
            //     <button>Start quiz</button>
            // </div>
            <Test />
            }
      </main>     
   );
}

export default App;
