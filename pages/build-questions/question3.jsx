import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'
import styles from '../../styles/Questions.module.css'

const questionText =
  'Q.3. Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.'
export default function Question3() {
  const [input, setInput] = useState('')
  const [fontSize, setFontSize] = useState(16)

  const handleClick = (e, instructions) => {
    e.preventDefault()
    instructions === '+' ? setFontSize(fontSize + 2) : setFontSize(fontSize - 2)
  }

  return (
    <>
      <Navbar />
      <Heading heading="Question 3" />
      <QuestionHeader questionText={questionText} />
      <QuestionContainer>
        <label htmlFor="input">Input: </label>
        <input
          name="input"
          type="text"
          value={input}
          placeholder="Enter your text here."
          className={styles.inputStyles}
          onChange={e => setInput(e.target.value)}
        />
        <br />
        <div>
          {['+', '-'].map((val, i) => (
            <button
              className={styles.calculateBtn}
              key={i}
              disabled={input ? false : true}
              onClick={e => handleClick(e, val)}
            >
              <b>{val}</b>
            </button>
          ))}
        </div>
        <p>
          Current font-size: <b>{fontSize}px</b>{' '}
        </p>
        <p style={{ fontSize: `${fontSize}px` }}>{input}</p>
      </QuestionContainer>
    </>
  )
}
