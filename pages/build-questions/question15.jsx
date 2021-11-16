import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'
import styles from '../../styles/Questions.module.css'

const questionText =
  '15. Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.'
export default function Question15() {
  const obj1 = { name: 'Ram', age: 25, yuga: 'Treta' }
  const obj2 = { name: 'Krishna', age: 31, yuga: 'Dwapar' }
  const checkOlderUser = (user1, user2) =>
    user1.age > user2.age ? user1 : user2
  console.log(checkOlderUser(obj1, obj2))
  return (
    <>
      <Navbar />
      <Heading heading="Question 15" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <pre>
          <code lang="javascript">
            {`
            const obj1 = { name: 'Ram', age: 25, yuga: 'Treta' }
            const obj2 = { name: 'Krishna', age: 31, yuga: 'Dwapar' }
            const checkOlderUser = (user1, user2) =>
            user1.age > user2.age ? user1 : user2
            console.log(checkOlderUser(obj1, obj2))
            `}
          </code>
        </pre>
      </QuestionContainer>
    </>
  )
}
