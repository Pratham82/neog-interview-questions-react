import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'
import styles from '../../styles/Questions.module.css'

export default function () {
  const [input, setInput] = useState('')
  const [color, setColor] = useState(16)
  const questionText =
    'Q.5. Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.'

  const handleClick = (e, colorVal) => {
    e.preventDefault()
    colorVal === 'red'
      ? setColor('red')
      : colorVal === 'green'
      ? setColor('green')
      : colorVal === 'blue'
      ? setColor('blue')
      : setColor('black')
  }

  return (
    <>
      <Navbar />
      <Heading heading="Question 5" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
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
          {['red', 'green', 'blue'].map((val, i) => (
            <button
              className={styles.colorBtn}
              key={i}
              style={{ color: `${val}` }}
              disabled={input ? false : true}
              onClick={e => handleClick(e, val)}
            >
              <b>{val}</b>
            </button>
          ))}
        </div>
        <p>
          Current color: <b>{}</b>
        </p>
        <p style={{ color: `${color}` }}>{input}</p>
      </QuestionContainer>
    </>
  )
}
