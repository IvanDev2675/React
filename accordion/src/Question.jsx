import React from 'react'
import { SingleQuestion } from './SingleQuestion'
export const Question = ({questions}) => {
  return (
    <section className='container'>
    <h1>Questions</h1>
    {
      questions.map((question)=>{
        return <SingleQuestion key={question.id} {...question}/>
      })
    }
    </section>
  )
}
