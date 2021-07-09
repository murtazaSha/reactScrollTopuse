import React, { useState } from 'react';
import './App.css';

function App() {
   const [state, setstate] = useState(false);
  const changeClass=()=>{
    const scrollValue=document.documentElement.scrollTop;
    if(scrollValue>100)
    {
      setstate(true);
    }
    else{
      setstate(false);
    }
      
  }
  window.addEventListener('scroll', changeClass);
  return (
    <div className="App">
      <h5 className={state ?"blue":""}>Hello, World</h5>
    </div>
  )
}

export default App;

