import React from 'react'
import { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
export const SingleQuestion = ({title, info}) => {

const [showInfo, setShowInfo] = useState(false);


  return (
      <article className='question'>
        <header>
          <h1>{title}</h1>
         <button className='btn' onClick={()=>setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </header>
          {showInfo && <p>{info}</p>}

      </article>



  )
}
