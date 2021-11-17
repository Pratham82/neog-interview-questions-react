import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText = `
Create a password checker web application having 2 input sections that takes the password. If the value in both sections are equal then show the message Success on the screen and if not equal then show Passwords Mismatched on the click of a button
`
export default function Mock7_1() {
  const initialState = {
    passowrd: '',
    confirmedPassword: '',
  }
  const [form, setForm] = useState(initialState)
  const [output, setOutput] = useState('')

  const onChangehandler = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const checkIfEqual = () => {
    const { passowrd, confirmedPassword } = form
    passowrd === confirmedPassword
      ? setOutput('Success !!!')
      : setOutput('Password Mismatched!')
  }

  const reset = () => {
    setForm({ passowrd: '', confirmedPassword: '' })
    setOutput('')
  }

  return (
    <>
      <Navbar />
      <Heading heading="Mock 7.1" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <label htmlFor="passowrd">Enter password:</label>
        <br />
        <input
          type="text"
          name="passowrd"
          value={form.passowrd}
          onChange={e => onChangehandler(e)}
        />
        <br />
        <br />
        <label htmlFor="passowrd">Enter password again:</label>
        <br />
        <input
          type="text"
          name="confirmedPassword"
          value={form.confirmedPassword}
          onChange={e => onChangehandler(e)}
        />
        <br />
        <br />
        <button onClick={checkIfEqual}>Check If equal</button>
        <br />
        <br />
        <button onClick={reset}>Reset</button>
        <h2>{output}</h2>
      </QuestionContainer>
    </>
  )
}
