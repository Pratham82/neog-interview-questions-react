import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'
const questionText =
  "17. Create a CLI app which would detect fake news. This app will take news as input and then source. If source is Facebook or whatsapp then it will output user saying, 'Don't believe things on FB and Whatsapp'. Can you extend this to include telegram as well?"

export default function Question17() {
  const u1 = { name: 'Ram', power: 2500, yuga: 'Treta' }
  const u2 = { name: 'Krishna', power: 2325, yuga: 'Dwapar' }
  const checkMostPowerfulCombined = (user1, user2) =>
    user1.power + user1.name.length > user2.power + user2.name.length
      ? user1
      : user2
  console.log(checkMostPowerfulCombined(u1, u2))
  return (
    <>
      <Navbar />
      <Heading heading="Question 17" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <pre>
          <code>
            {`
            const u1 = { name: 'Ram', power: 2500, yuga: 'Treta' }
            const u2 = { name: 'Krishna', power: 2325, yuga: 'Dwapar' }
              const checkMostPowerfulCombined = (user1, user2) =>
              user1.power + user1.name.length > user2.power + user2.name.length
                ? user1
                : user2
              console.log(checkMostPowerfulCombined(u1, u2))
              `}
          </code>
        </pre>
      </QuestionContainer>
    </>
  )
}
