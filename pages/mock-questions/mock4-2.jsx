import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText = `
2. Create 2 buttons with text YJHD and ZNMD. At the click of a button, call the given API with the query as same as the button text, and display the message you get on the screen. 

API - [https://mock-practice.prakhar10v.repl.co/bollywood?name=](https://mock-practice.prakhar10v.repl.co/bollywood?name=)
    
Eg - Clicking on the button YJHD will make a call to [https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD](https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD)
`
export default function Mock4_2() {
  const URL = 'https://mock-practice.prakhar10v.repl.co/bollywood?name='
  const [quote, setQuote] = useState('')
  const fetchMovie = async movie => {
    const res = await fetch(`${URL}${movie}`)
    const data = await res.json()
    const { message } = data
    setQuote(message)
  }
  return (
    <>
      <Navbar />
      <Heading heading="Mock 4.2" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} /> <h1>Movie quotes</h1>
        {['YJHD', 'ZNMD'].map(movie => (
          <button key={movie} onClick={() => fetchMovie(movie)}>
            {movie}
          </button>
        ))}
        <h2>{quote}</h2>
      </QuestionContainer>
    </>
  )
}
