import { Title } from "./Title";

import React, { useState } from 'react';
import menu from './data';
import { Menu } from "./Menu";
import { Categories } from "./Categories";
/*
const tempCategories = menu.map((item) => item.category)
const tempSet =  new Set(tempCategories)
const caregories =['all', ...tempSet]
console.log(caregories)
esta funcion hace lo mismo que lo de abajo
*/

const allCategories =['all', ...new Set(menu.map((item)=>item.category))]

const App = () => {
const [menuItems, setMenuItems] = useState(menu)
const [categories, setCategories] = useState(allCategories)

const filterItems =(category)=>{
  if(category === 'all'){
    setMenuItems(menu)
    return
  }
const newItems = menu.filter((item)=> item.category === category)
setMenuItems(newItems)
}



  return <main> 
    <section className='menu'>
       <Categories categories={categories} filterItems={filterItems}/>
      <Title text={'nuestro menu'}/>
      <Menu items={menuItems}/>
  
    </section>
    </main>
};
export default App;
