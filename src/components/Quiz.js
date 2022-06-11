import '../App.css'

const Quiz = ({allQuestions}) => {
    return (
        <div className='quiz'>
            <pre>{JSON.stringify(allQuestions, null, 2)}</pre>
            <button>answer</button>
        </div>
    )
}

export default Quiz