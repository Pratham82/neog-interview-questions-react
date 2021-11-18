import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText = `
  Here is an API:
    https://otpgenerator.ishanjirety.repl.co/get-otp?name=

    You will enter a name as input from your app and send this API a request with the name along with it (this will be the final URL :
    
    https://otpgenerator.ishanjirety.repl.co/get-otp?name=Nameentered on button click. In the response, you will get an OTP which should be shown on the screen.
    
    Name-OTP
    
    format so something like
    
    Pratyush-570928
    
    So compare the OTP value from the response as well as the input which is being entered
    Followup2: Change the color of validating message to GREEN when success comes up and change it to RED if failure comes up on the click of Validate Button.
`
export default function Mock5_2() {
  const [userName, setUsername] = useState('')
  const [guess, setGuess] = useState('')
  const [otp, setOTP] = useState('')
  const [message, setMessage] = useState('')
  const URL = 'https://otpgenerator.ishanjirety.repl.co/get-otp?name='
  const getOTP = () => {
    fetch(`${URL}${userName}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const { otp } = data
        setOTP(otp.split('-')[1])
      })
      .catch(e => console.log(e))
  }
  const validate = () => {
    const res = otp === guess
    setMessage(res)
    console.log(res)
  }
  return (
    <>
      <Navbar />
      <Heading heading="Mock 5.2" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <h2>Mock 5.2 </h2>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your guess"
          onChange={e => setGuess(e.target.value)}
        />
        <button onClick={getOTP}>Get OTP</button>
        <h2>{otp}</h2>
        <button onClick={validate}>Validate OTP</button>
        <h2 style={{ color: message ? 'green' : 'red' }}>
          {message ? 'Success' : 'Failed'}
        </h2>
      </QuestionContainer>
    </>
  )
}
