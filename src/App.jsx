import { useState } from 'react';
import data from './data'
import Menu from './Menu';
import Title from "./Title";
import Categories from './Categories';


const App = () => {
  const [menus, setMenus] = useState(data)

  const categories = ['all', ...new Set(data.map((datum) => datum.category))]

  const filterMenu = (category) => {
     
    const newMenus = data.filter((menu) => menu.category == category) 
    setMenus(newMenus)
     if (category == "all") {
       setMenus(data);
     }
 
  }
  
  return (
    <main>
      <Title text="our menu" />
      <Categories categories={categories} filterMenu={filterMenu} />
      <Menu menus={menus} />
    </main>
  );
};
export default App;
