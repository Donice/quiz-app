import { useState, useEffect } from "react"

const Test = () => {
   const [datas, setDatas] = useState({})

   useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=medium")
      .then(res => res.json())
      .then(data => setDatas(data.results))
   }, []) 
   
   return (
      <div>
         <pre>{JSON.stringify(datas, null, 2)}</pre>
      </div>
   )
}


export default Test