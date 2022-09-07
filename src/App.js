import React, {useContext} from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Signup from './Signup';
import {UserContext} from './context/UserContext'


function App() {
  const context = useContext(UserContext)
  console.log(context)
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Signup />
    </div>
  );
}

export default App;
