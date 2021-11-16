import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'
import styles from '../../styles/Questions.module.css'
const questionText =
  "8. Here's an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message."

const URL = 'https://quick-access-api.desaihetav.repl.co/'
export default function Question9() {
  const [message, setMessage] = useState('')

  const handleClick = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data)
    setMessage(data.message)
  }
  return (
    <>
      <Navbar />
      <Heading heading="Question 9" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <button className={styles.loadingTemplate} onClick={handleClick}>
          Fetch
        </button>
        <h2>{message}</h2>
      </QuestionContainer>
    </>
  )
}
