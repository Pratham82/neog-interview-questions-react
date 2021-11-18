import { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText = `
Here's an API Link: [https://mystery-api.kushanksriraj.repl.co/get](https://mystery-api.kushanksriraj.repl.co/get) 
This API link can give two errors, either 404, or 401. 
If the error is 404, show the user 'page not found' and if the error is 401, show the user 
'you are not logged in'.
`
export default function Mock3_2() {
  const URL = 'https://mystery-api.kushanksriraj.repl.co/get'
  const [message, setMessage] = useState('')
  const errors = {
    404: 'User Not found',
    401: 'You are not authenticated',
    200: 'All Good',
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(URL)
      const { status } = data
      setMessage(errors[status])
      console.log(data)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Navbar />
      <Heading heading="Mock 3.2" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <h1>Fetch Data</h1>
        <h2>{message}</h2>
      </QuestionContainer>
    </>
  )
}
