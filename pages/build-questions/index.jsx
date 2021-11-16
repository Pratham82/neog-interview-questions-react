import Navbar from '../../components/Navbar'
import Head from 'next/head'
import Heading from '../../components/Heading'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import buildQuestions from '../../data/buildQuestions'
import styles from '../../styles/Build.module.css'

export default function BuildQuestions() {
  return (
    <>
      <Head>
        <title>NeoG Build Questions</title>
      </Head>
      <Navbar />
      <Container>
        <Heading heading="NeoG Build Questions" />
        {buildQuestions.map(({ question, link }, i) => (
          <Link href={link} key={i} passHref>
            <div className={styles.questionContainer}>
              <div>
                {i + 1}. {question}
              </div>
              <div className={styles.linkContainer}>
                {link !== '/build-questions/' ? 'Live 🟢' : 'N.A. ⛔'}
              </div>
            </div>
          </Link>
        ))}
      </Container>
      <Footer />
    </>
  )
}
