import React, { useState } from 'react'  // ← Importar useState

export const Categories = ({categories, filterItems}) => {
  // ✅ AGREGAR: Estado para trackear botón activo
  const [active, setActive] = useState('all')  // 'all' es el botón activo por defecto

  return (
    <div className='btn-container'>
      {
        categories.map((cate) => {
          return (
            <button 
              type='button' 
              // ✅ CAMBIAR: Lógica condicional para clases
              className={active === cate ? 'btn active' : 'btn'}
              key={cate}
              // ✅ CAMBIAR: Agregar setActive al onClick
              onClick={() => {
                setActive(cate)      // Actualiza qué botón está activo
                filterItems(cate)    // Ejecuta el filtrado (como antes)
              }}
            >
              {cate}
            </button>
          )
        })
      }
    </div>
  )
}