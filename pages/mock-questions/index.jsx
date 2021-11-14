import Navbar from '../../components/Navbar'
import Head from 'next/head'
import Heading from '../../components/Heading'
import Container from '../../components/Container'

export default function () {
  return (
    <>
      <Head>
        <title>Mock interview Questions</title>
      </Head>
      <Navbar />
      <Container>
        <Heading heading="Mock Interview Questions" />
      </Container>
    </>
  )
}
