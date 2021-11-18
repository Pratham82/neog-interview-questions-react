import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText = `
Create a web app, where I input my name, and then I input a password.
If the password contains the input name in it, show an error message "Password can't have name"
`
export default function Mock3_3() {
  const [form, setForm] = useState({
    userName: '',
    password: '',
  })

  const [message, setMessage] = useState('')

  const changeHandler = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const validate = () => {
    const { userName, password } = form
    password.includes(userName)
      ? setMessage('Passowrd cannot have name')
      : setMessage("You're good to go")
  }

  return (
    <>
      <Navbar />
      <Heading heading="Mock 3.3" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          name="userName"
          value={form.userName}
          onChange={changeHandler}
        />
        <label htmlFor="password">Pasword</label>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={changeHandler}
        />
        <button onClick={validate}>Validate</button>
        <h2>{message}</h2>
      </QuestionContainer>
    </>
  )
}
