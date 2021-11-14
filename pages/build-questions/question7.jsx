import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'
import styles from '../../styles/Questions.module.css'

const questionText =
  '7. Create a web app with a button loaded. Show a text loading... on a web app. However, hide it if I click on the button loaded.'

export default function () {
  const [isLoading, setLoading] = useState(false)

  return (
    <>
      <Navbar />
      <Heading heading="Question 7" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        {isLoading ? <h1>Loading....</h1> : <h1>Loaded</h1>}
        <button
          onClick={() => setLoading(!isLoading)}
          className={`${styles.loadingTemplate}
          ${!isLoading ? styles.loading : styles.loaded}`}
        >
          {isLoading ? 'Stop loading' : 'Start loading'}
        </button>
      </QuestionContainer>
    </>
  )
}
