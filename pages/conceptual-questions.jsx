import Head from 'next/head'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Navbar from '../components/Navbar'

export default function ConceptualQuestions() {
  return (
    <>
      <Head>
        <title>Conceptual Questions</title>
      </Head>
      <Navbar />
      <Container>
        <Heading heading="Conceptual Questions" />
      </Container>
    </>
  )
}
