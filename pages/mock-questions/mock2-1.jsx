import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'
const questionText = `
1. Create a password checker web app. If a password is less than 10 characters then show an error to the user otherwise show success. 
    
    Extension:
    Check button to be active only if the password is greater than 10 characters.
    
    2. Explain syntax for fetch command (the fetch(url).then().then().catch(err))
`

export default function Mock2_1() {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const validate = () => {
    password.length >= 10 ? setMessage('Success') : setMessage('Error')
  }

  //1234567890

  return (
    <>
      <Navbar />
      <Heading heading="Mock 2.1" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <input
          type="text"
          placeholder="enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={validate} disabled={!(password.length >= 10)}>
          Check password
        </button>
        <h2>{message}</h2>
      </QuestionContainer>
    </>
  )
}
