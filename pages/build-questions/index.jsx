import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import Heading from '../../components/Heading'
import Link from 'next/link'
const questions = [1, 2]
export default function () {
  return (
    <>
      <Head>
        <title>NeoG Build Questions</title>
      </Head>
      <Navbar />
      <Heading heading="NeoG Build Questions" />
      {questions.map((_, i) => (
        <h3>
          <Link href={`/build-questions/question${i + 1}`}>
            {`Question -${i + 1}`}
          </Link>
        </h3>
      ))}
    </>
  )
}
