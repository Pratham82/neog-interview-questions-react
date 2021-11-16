import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'
import styles from '../../styles/Questions.module.css'

const questionText =
  '12. Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.'

export default function Question12() {
  const [password, setPassword] = useState('')
  const [passwordVal, setPasswordVal] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleClick = () => {
    setMessage('success')
  }

  return (
    <>
      <Navbar />
      <Heading heading="Question 12" />
      <QuestionHeader questionText={questionText} />
      <QuestionContainer>
        <label htmlFor="password">Q1.</label>
        <input
          className={styles.inputStyles}
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <span>{password.length < 10 ? 'Error' : 'Success'}</span>
        <br />
        <label htmlFor="password">Q2</label>
        <input
          className={styles.inputStyles}
          type="password"
          onChange={e => setPasswordVal(e.target.value)}
          value={passwordVal}
        />

        <button
          className={
            passwordVal.length >= 10
              ? styles.submitBtn
              : styles.submitBtnDisabled
          }
          onClick={handleClick}
        >
          SUBMIT
        </button>
        <br />
        <label htmlFor="password">Q3</label>
        <input
          className={styles.inputStyles}
          type="text"
          onChange={e => setNewPassword(e.target.value)}
          value={newPassword}
          style={{
            color: newPassword.length < 10 ? 'red' : 'green',
          }}
        />
        <h2>{message}</h2>
      </QuestionContainer>
    </>
  )
}
