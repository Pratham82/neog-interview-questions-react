import Navbar from '../../components/Navbar'
import Head from 'next/head'
import Heading from '../../components/Heading'
import Link from 'next/link'
import Container from '../../components/Container'
import mockQuestions from '../../data/mockQuestions'
import styles from '../../styles/Build.module.css'

export default function MockQuestions() {
  return (
    <>
      <Head>
        <title>Mock interview Questions</title>
      </Head>
      <Navbar />
      <Container>
        <Heading heading="Mock Interview Questions" />
        {mockQuestions.map(({ question, link }, i) => (
          <Link href={link} key={i} passHref>
            <div className={styles.questionContainer}>
              <div>
                {i + 1}. {question}
              </div>
              <div className={styles.linkContainer}>
                {link !== '/mock-questions/' ? 'Live 🟢' : 'N.A. ⛔'}
              </div>
            </div>
          </Link>
        ))}
      </Container>
    </>
  )
}
