import './App.css'


import Home from './components/Home'
import Projects from './components/Projects'
import Categories from './components/Categories';
import Contact from './components/Contact';

import { useState } from 'react';
import data from './data.json'

function App() {

  const [mode, setMode] = useState('home')
  const [projectIndex, setProjectIndex] = useState(0)

  function handleCategoryClick({mode, id}){
    setProjectIndex(id)
    setMode(mode + '-projects')
  }

  return (
    <>
      {mode == 'home' && <Home handleClickContact={()=>{setMode('contact')}} handleClickLearning={()=>{setMode('learning')}} handleClickCategory={()=>{setMode("showcase")}}/>}
      {mode == 'showcase' && <Categories data={data.showcase} mode={mode} handleCategoryClick={handleCategoryClick} handleBack={()=>{setMode('home')}}/>}
      {mode == 'learning' && <Categories data={data.learning} mode={mode} handleCategoryClick={handleCategoryClick} handleBack={()=>{setMode('home')}}/>}
      {mode == 'showcase-projects' && <Projects handleBack={()=>{setMode('showcase')}} data={data.showcase[projectIndex].projects}/>}
      {mode == 'learning-projects' && <Projects handleBack={()=>{setMode('learning')}} data={data.learning[projectIndex].projects}/>}
      {mode == 'contact' && <Contact/>}
    </>
  )
}

export default App
