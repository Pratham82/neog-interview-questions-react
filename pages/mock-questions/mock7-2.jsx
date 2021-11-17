import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText = `
eate a list of 3 objects that has 2 attributes name of the task and completed which is a boolean value true or false. Display those tasks which are completed or which have attributes as completed:true on the click of a button.
`
export default function Mock7_2() {
  const allTasks = [
    { id: 0, name: 'Task 1', completed: true },
    { id: 1, name: 'Task 2', completed: false },
    { id: 2, name: 'Task 3', completed: true },
  ]
  const [tasks, setTasks] = useState([])

  const showTasks = () => {
    setTasks(allTasks)
  }
  return (
    <>
      <Navbar />
      <Heading heading="Mock 7.2" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <button onClick={showTasks}>Show Completed Tasks</button>
        {tasks.map(task => (
          <p key={task.id}>{task.completed && `${task.name}  ✅`} </p>
        ))}
      </QuestionContainer>
    </>
  )
}
