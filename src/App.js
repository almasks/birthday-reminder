import React, { useState } from 'react'
import data from './data';
import './index.css'
import List from './List';
function App() {
  const [people,setPeople]=useState(data)
  return (
    <div className="container">
     <div className='section'>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button type='button' onClick={()=>setPeople([])}>clear all</button>
  
       </div>      
        
    </div>
  );
}

export default App;
