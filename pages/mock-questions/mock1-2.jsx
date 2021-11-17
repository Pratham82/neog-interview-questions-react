import { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText =
  'Fetch an API ( https://jsonplaceholder.typicode.com/todos ) and display it on the output on the screen.'
export default function Mock1_2() {
  const [titles, setTitles] = useState([])
  const URL = 'https://jsonplaceholder.typicode.com/todos'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL)
        const data = await res.json()
        setTitles(data)
      } catch (err) {
        console.log(err)
        setTitles([{ title: 'Cannot fetch data', id: '2323' }])
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <Navbar />
      <Heading heading="Mock 1.2" />
      <QuestionHeader questionText="" />
      <QuestionContainer>
        {titles.length > 0 &&
          titles.map(({ title }, i) => <h2 key={i}> Title: {title}</h2>)}
      </QuestionContainer>
    </>
  )
}
