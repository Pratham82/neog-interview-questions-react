import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'
import styles from '../../styles/Questions.module.css'

const questionText =
  '14. Create color variables in CSS. Two colors: primary and secondary. Now make your h1 of primary color, h2 of secondary color. Make two buttons, primary and secondary using the same color. Can you also set a font from Google Font?'

export default function () {
  return (
    <>
      <Navbar />
      <Heading heading="Question 14" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <h1 className={styles.primaryColor}>Title 1</h1>
        <h2 className={styles.secondaryColor}>Title 2</h2>
        <button className={styles.primaryColor}>Button 1</button>
        <button className={styles.secondaryColor}>Button 2</button>
      </QuestionContainer>
    </>
  )
}
