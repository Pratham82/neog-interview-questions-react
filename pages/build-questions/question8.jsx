import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'
import styles from '../../styles/Questions.module.css'
import loader2 from '../../public/hug.gif'
import Image from 'next/image'

const questionText =
  "8. Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalize etc."

const URL = 'https://otpgenerator.ishanjirety.repl.co/get-otp?name='

export default function Question8() {
  const [username, setUsername] = useState('')
  const [output, setOutput] = useState('')
  const getOTP = () => {
    const fetchData = async () => {
      setOutput('loading')
      const res = await fetch(`${URL}${username}`)
      const data = await res.json()
      const { otp } = data
      setOutput(otp.split('-')[1])
    }
    fetchData()
  }
  return (
    <>
      <Navbar />
      <Heading heading="Question 8" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <input
          type="text"
          className={styles.inputStyles}
          placeholder="Enter your name"
          onChange={e => setUsername(e.target.value)}
        />
        <button
          onClick={getOTP}
          className={`${styles.loadingTemplate} ${styles.loading}`}
        >
          GET OTP
        </button>
        <h2>
          {output === 'loading' ? (
            <Image src={loader2} height="100px" width="100px" alt="loader"/>
          ) : (
            output
          )}
        </h2>
      </QuestionContainer>
    </>
  )
}
