import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText =
  '16. Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.'

export default function Question16() {
  const u1 = { name: 'Ram', power: 2500, yuga: 'Treta' }
  const u2 = { name: 'Krishna', power: 2325, yuga: 'Dwapar' }
  const checkMostPowerful = (user1, user2) =>
    user1.power > user2.power ? user1 : user2
  console.log(checkMostPowerful(u1, u2))

  return (
    <>
      <Navbar />
      <Heading heading="Question 16" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <pre>
          <code>
            {`
              const u1 = { name: 'Ram', power: 2500, yuga: 'Treta' }
              const u2 = { name: 'Krishna', power: 2325, yuga: 'Dwapar' }
              const checkMostPowerful = (user1, user2) =>
              user1.power > user2.power ? user1 : user2
              console.log(checkMostPowerful(u1, u2))
              `}
          </code>
        </pre>
      </QuestionContainer>
    </>
  )
}
