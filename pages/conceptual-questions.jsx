import Head from 'next/head'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import conceptualQuestion from '../data/conceptualQuestions'
import styles from '../styles/ConceptualQuestion.module.css'

export default function ConceptualQuestions() {
  return (
    <>
      <Head>
        <title>Conceptual Questions</title>
      </Head>
      <Navbar />
      <Container>
        <Heading heading="Conceptual Questions" />
        {conceptualQuestion.map(({ question, answer }, i) => (
          <details className={styles.question} key={i}>
            <summary>
              {i + 1}. {question}
            </summary>
            <div className={styles.answer}>{answer}</div>
          </details>
        ))}
      </Container>
    </>
  )
}
