import React from 'react'

export const Tour = ({id, image, info, name, price, removeTour}) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name}  className='img'/>
      <span className='tour-price'>{price}</span>
      <div className='tour-info'>
        <h4>{name}</h4>
        <p>{info}</p>
        <button type='button'className='btn btn-block delete-btn' onClick={() => removeTour(id)}>Eliminar</button>
      </div>
    </article>
  )
}
