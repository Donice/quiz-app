import './App.css';
import { useState, useEffect } from 'react';

function App() {
   const [start, setStart] = useState(false)
   const [questions, setQuestions] = useState([])

   useEffect(() => {
         fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setQuestions(data.results))
   }, [])

   console.log(questions)

   const getQuestions = questions.map(item => {
      return(
         <>
            <h4>{item.question}</h4>
            <p>{item.incorrect_answers.map(item => <span className='answers'>{item}</span>)}
            <span className='answers'> {item.correct_answer}</span>  
            </p>
            <hr />
         </>
       )
   })


   return (
      <main className="App">
         {
            !start
            ? 
            // ----------------------------
            <div className='quiz'>
               <section className='quiz-questions'>
                  {getQuestions}
               </section>
               <button>Check answer</button>
            </div>
            // --------------------------------------
            :
            <div className='start-quiz'>
                <h1>Quizzical</h1>
                <p>Some description if needed</p>
                <button>Start quiz</button>
            </div>
            }
      </main>     
   );
}

export default App;
      // fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=medium&type=multiple")
      //    .then(res => res.join())
   //    //    .then(data => setAllQuestions(data.results))
   // {
   //    id: uuid(),
   //    question: "",
   //    firstOption: "",
   //    secondOption: "",
   //    thirdOption: "",
   //    fourthOption: "",
   // }