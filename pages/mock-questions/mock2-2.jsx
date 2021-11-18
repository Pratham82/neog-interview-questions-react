import { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText = `
Create a web app and render your name using any heading or paragraph tag.
It should have a border of 1px around it. Create 2 buttons, '5px' and '10px' below your name. The width of border should change to 5px and 10px by clicking respective buttons.
    
    Display the results of this API's response: [https://quick-access-api.desaihetav.repl.co/](https://quick-access-api.desaihetav.repl.co/) 
    on the screen
`
export default function Mock2_2() {
  const [border, setBorder] = useState('')
  const [message, setMessage] = useState('')
  const URL = 'https://quick-access-api.desaihetav.repl.co/'

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL)
      const data = await res.json()
      const { message } = data
      setMessage(message)
    }
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <Heading heading="Mock 2.2" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <h1 style={{ border: `${border}px solid grey` }}>Prathamesh</h1>
        <button onClick={() => setBorder(5)}>5px</button>
        <button onClick={() => setBorder(10)}>10px</button>
        <h2>Message: {message}</h2>
      </QuestionContainer>
    </>
  )
}
