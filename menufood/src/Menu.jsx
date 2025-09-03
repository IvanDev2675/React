import React from 'react'
import { MenuItems } from './MenuItems'

export const Menu = ({items}) => {
  return (
<div className='section-center'>
{
items.map((item)=>{
return <MenuItems key={item.id} {...item}/>

})

}

</div>
    
  )
}
