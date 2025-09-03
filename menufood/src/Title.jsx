import React from 'react'

export const Title = ({text}) => {
  return (
    <div className='title'>
        <h2>{text || 'sin titulo'}</h2>
        <div className='title-underline'></div>
    </div>
  )
}
