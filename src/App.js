import React from 'react';
import './App.css';
import Navbar1 from './Components/Navbar1';
import Firstpg from './Components/Firstpg';

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Navbar1 />
        </div>
      </div>  
      <div className='container'> 
        <div className='row'> 
          <Firstpg />
        </div>
      </div> 
    </div>   
  );
}

export default App;
