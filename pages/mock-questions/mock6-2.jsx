import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText = `
Coding: Input a single-digit number and check whether the number is an Automorphic number or not. Render output on the page.
An automorphic number is a number whose square "ends" in the same digits as the number itself.
For example,
52 = 25, here 25 ends with ‘5’. Display :"5 is an Automorphic Number" on the screen
62 = 36, here 36 ends with ‘6’
So 5 and 6 are automorphic numbers

7 isn't an automorphic number because 7**2=49.Display :"7 is not an Automorphic Number" on the screen
`
export default function Mock6_2() {
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
  const check = () => {
    const squared = number ** 2
    const lastDig = squared % 10
    Number(lastDig) === Number(number)
      ? setMessage('Its an automorphic no')
      : setMessage('Its not an automorphic no.')
  }
  return (
    <>
      <Navbar />
      <Heading heading="Mock 6.2" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <h1>Automorphic no.</h1>
        <input
          type="number"
          value={number}
          placeholder="enter number"
          onChange={e => setNumber(e.target.value)}
        />
        <button onClick={check}>check</button>
        <h2>{message}</h2>
      </QuestionContainer>
    </>
  )
}
