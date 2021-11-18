import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'
import styles from '../../styles/Questions.module.css'

const questionText =
  'Q.4. Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.'

export default function Question4() {
  const [input, setInput] = useState('')
  const [fontSize, setFontSize] = useState(16)
  const [op, setOp] = useState('')
  const [currentTag, setTag] = useState('')
  const handleClick = (e, instructions) => {
    e.preventDefault()
    instructions === 'h1'
      ? setFontSize(32)
      : instructions === 'h2'
      ? setFontSize(24)
      : instructions === 'h3'
      ? setFontSize(20.8)
      : setFontSize(16)

    setOp(
      instructions === 'h1' ? (
        <h1>{input}</h1>
      ) : 'h2' ? (
        <h2>{input}</h2>
      ) : 'h3' ? (
        <h3>{input}</h3>
      ) : (
        <h5>{input}</h5>
      )
    )
  }

  return (
    <>
      <Navbar />
      <Heading heading="Question 4" />
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
          {['h1', 'h2', 'h3'].map((val, i) => (
            <button
              className={styles.calculateBtn}
              style={{ margin: '0 10px' }}
              key={i}
              disabled={input ? false : true}
              onClick={e => handleClick(e, val)}
            >
              <b>{val}</b>
            </button>
          ))}
        </div>
        <p>
          Current font-size: <b>{fontSize}px</b> Current tag:{' '}
          <b>{currentTag}</b>
        </p>
        {op}
      </QuestionContainer>
    </>
  )
}
