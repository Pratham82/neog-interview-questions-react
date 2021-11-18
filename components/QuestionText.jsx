export default function QuestionHeader({ questionText }) {
  return (
    <div style={{ padding: '10px 20px 10px 20px' , width: '70%', fontSize: '20px'}}>
      {Array.isArray(questionText) ? (
        questionText.map((question, i) => <h3 key={i}>{question}</h3>)
      ) : (
        <h3>{questionText}</h3>
      )}
    </div>
  )
}
