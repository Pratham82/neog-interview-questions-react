import { useState } from 'react'
import Heading from '../../components/Heading'
import Navbar from '../../components/Navbar'
import QuestionContainer from '../../components/QuestionContainer'
import QuestionHeader from '../../components/QuestionText'

const questionText = `
You have to create a profit and loss calculator, in which you will make two input sections one will take current price and other one will take the cost price and to show result one will click on a button and a message will be shown, if there is loss then you just have to show a message with loss amount and similarly for profit
`
export default function Mock5_1() {
  const [form, setForm] = useState({
    currentPrice: '',
    costPrice: '',
  })
  const [message, setMessage] = useState({ status: '', diff: '' })

  const changeHandler = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const calculate = () => {
    const { currentPrice, costPrice } = form
    const message =
      currentPrice - costPrice === 0
        ? 'No profit No loss'
        : currentPrice > costPrice
        ? 'profit'
        : currentPrice < costPrice
        ? 'Loss'
        : ''
    const diff = Math.abs(currentPrice - costPrice)
    setMessage({ message, diff })
  }
  return (
    <>
      <Navbar />
      <Heading heading="Mock 5.1" />
      <QuestionContainer>
        <QuestionHeader questionText={questionText} />
        <label htmlFor=""> CurrentPrice</label>
        <input
          type="number"
          value={form.currentPrice}
          name="currentPrice"
          onChange={changeHandler}
        />
        <label htmlFor="">Cost Price</label>
        <input
          type="number"
          value={form.costPrice}
          name="costPrice"
          onChange={changeHandler}
        />
        <button onClick={calculate}>Calculate</button>
        <h2>{message.message}</h2>
        <h2>Diff amount: {message.diff}</h2>
      </QuestionContainer>
    </>
  )
}
