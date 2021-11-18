import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText =
  'Build a counter application and then some questions were asked related to the coding part. '
export default function Mock1_1() {
  const [number, setNumber] = useState(0)
  const handleClick = action => {
    action === '+'
      ? setNumber(number + 1)
      : number > 0
      ? setNumber(number - 1)
      : setNumber(0)
  }
  return (
    <>
      <Navbar />
      <Heading heading="Mock 1.1" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <h1>{number}</h1>
        {['+', '-'].map(action => (
          <button key={action} onClick={() => handleClick(action)}>
            {action}
          </button>
        ))}
      </QuestionContainer>
    </>
  )
}
