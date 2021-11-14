import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionHeader from '../../components/QuestionText'
import styles from '../../styles/Questions.module.css'

const questionText =
  'Q.2. Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.'
export default function () {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [result, setResult] = useState()
  const handleClick = (e, instructions) => {
    e.preventDefault()
    // eslint-disable-next-line
    const res = eval(
      `${input1} ${instructions === 'x' ? '*' : instructions} ${input2}`
    )
    setResult(res)
    resetValues()
  }

  const resetValues = () => {
    setInput1('')
    setInput2('')
  }

  return (
    <>
      <Navbar />
      <Heading heading="Question 2" />
      <QuestionHeader questionText={questionText} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label htmlFor="input1">Input1: </label>
        <input
          name="input1"
          type="number"
          value={input1}
          className={styles.inputStyles}
          onChange={e => setInput1(Number(e.target.value))}
        />
        <br />
        <label htmlFor="input2">Input2: </label>
        <input
          name="input2"
          type="number"
          value={input2}
          className={styles.inputStyles}
          onChange={e => setInput2(Number(e.target.value))}
        />

        <h2>Calculate: </h2>
        <div>
          {['+', '-', 'x', '/'].map((val, i) => (
            <button
              className={styles.calculateBtn}
              key={i}
              disabled={input1 && input2 ? false : true}
              onClick={e => handleClick(e, val)}
            >
              <b>{val}</b>
            </button>
          ))}
        </div>
        <h3>{result}</h3>
      </div>
    </>
  )
}
