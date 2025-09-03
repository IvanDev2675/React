import React from 'react'

export const Tour = ({id, image, info, name, price, removeTour}) => {

const [readMore, setReadMore] = React.useState(false)


  return (
    <article className='single-tour'>
      <img src={image} alt={name}  className='img'/>
      <span className='tour-price'>{price}</span>
      <div className='tour-info'>
        <h4>{name}</h4>
        <p>
          {readMore ? info : `${info.substring(0,400)}...` }

          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Mostrar menos' : 'Mostrar más'}
          </button>
        </p>
        <button type='button'className='btn btn-block delete-btn' onClick={() => removeTour(id)}>Eliminar</button>
      </div>
    </article>
  )
}
