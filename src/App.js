import './App.css';
import { useState, useEffect } from 'react';
// import Quiz from './components/Quiz';
import uuid from 'react-uuid'

function App() {
   const [start, setStart] = useState(true)
   const [questions, setQuestions] = useState({
      id: uuid(),
      question: "Questions",
      firstOption: "",
      secondOption: "",
      thirdOption: "",
      fourthOption: "",
   })

   console.log(questions)
   const [allQuestions, setAllQuestions] = useState([])


   useEffect(() => {
      async function getQuestion() {
         const res = await fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=medium")
         const data = await res.json()
         setAllQuestions(data.results)
      } 
      getQuestion()
   }, [])

   const getQuestions = () => {
      const randomNumber = Math.floor(Math.random() * questions.length)
      return randomNumber
   }

   return (
      <main className="App">
         {
            start
            ? 
            <div className='quiz'>
               <section className='quiz-questions'>
                  <h1>{questions.question}</h1>
                  {/* <pre>{JSON.stringify(allQuestions, null, 2)}</pre> */}
               </section>
               <button>answer</button>
            </div>
            
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
