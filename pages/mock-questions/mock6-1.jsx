import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText = `
Here is an API - https://jsonplaceholder.typicode.com/todos. The response show the titles of all items on the screen
`
export default function Mock6_1() {
  const [data, setData] = useState([])
  const fetchTitles = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    setData(data)
  }
  return (
    <>
      <Navbar />
      <Heading heading="Mock 6.1" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <button onClick={() => fetchTitles()}>Fetch titles</button>
        {data.map(todo => (
          <h2 key={todo.id}> Title: {todo.title}</h2>
        ))}
      </QuestionContainer>
    </>
  )
}
