import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText = `
1. Take an input from the user in text format. 
Have 3 buttons with the names of "Log" ,"Warn" and "Error".
If the user clicks on "Log" button, the text entered by the user will be shown in black color.
Similarly if the user clicks on "Warn " and "Error " buttons then the text entered by user will be shown on the screen in the yellow and red colors respectively.
`
export default function Mock3_1() {
  const [text, setText] = useState('')
  const [color, setColor] = useState('')
  const checkType = action => {
    const dict = {
      log: 'black',
      warn: 'yellow',
      error: 'red',
    }

    setColor(dict[action])
  }
  return (
    <>
      <Navbar />
      <Heading heading="Mock 3.1" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <input
          type="text"
          value={text}
          placeholder="Enter text"
          onChange={e => setText(e.target.value)}
        />
        {['log', 'warn', 'error'].map((action, i) => (
          <button key={i} onClick={() => checkType(action)}>
            {action}
          </button>
        ))}
        <h2 style={{ color: `${color}` }}>{text}</h2>
      </QuestionContainer>
    </>
  )
}
