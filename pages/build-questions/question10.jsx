import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'
import styles from '../../styles/Questions.module.css'

const questionText =
  "10. Here's an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message."

const statuses = {
  200: 'Great! No errors!',
  404: 'User Not Found!',
  401: 'Unauthorized Error!',
}
export default function () {
  const URL = 'https://mystery-api.kushanksriraj.repl.co/get'
  const [message, setMessage] = useState('')
  const fetchError = () => {
    const fetchData = async () => {
      const res = await fetch(URL)
      const { status } = res
      setMessage(statuses[status])
    }
    fetchData()
  }

  return (
    <>
      <Navbar />
      <Heading heading="Question 9" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <button className={styles.loadingTemplate} onClick={fetchError}>
          Fetch
        </button>
        <h2>{message}</h2>
      </QuestionContainer>
    </>
  )
}
