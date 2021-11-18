import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText = `
  Create an Input Element, which shows a display message according to the Input text with the click of a button. If you type - 
"Tanvi" - then show, "She is the best CEO ever!"
"Tanay" - then show, "He is our FUNNY mentor!"
"Swapnil" - then show, "He helps us CONQUER jobs!"
"Akanksha" - then show, "She is our CHEERFUL Interviewer!"
`
export default function Mock4_1() {
  const titles = {
    Tanvi: 'She is the best CEO ever!',
    Tanay: 'He is our FUNNY mentor!',
    Swapnil: 'He helps us CONQUER jobs!',
    Akanksha: 'She is our CHEERFUL Interviewer!',
  }
  const [input, setInput] = useState('')
  const [title, setTitle] = useState('')
  // const onChangeHandler = (e) => {
  //   const { value } = e.target;
  //   setInput(value);
  //   setTitle(titles[value]);
  // };
  const checkTitle = () => setTitle(titles[input])
  return (
    <>
      <Navbar />
      <Heading heading="Mock 4.1" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <label htmlFor="userInput"></label>
        <input
          type="text"
          name="userInput"
          placeholder="enter name"
          value={input}
          // onChange={onChangeHandler}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={checkTitle}>Check</button>
        <h2>{title}</h2>
      </QuestionContainer>
    </>
  )
}
