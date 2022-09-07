import React, {useContext} from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome';
import Signup from './Signup';
import {UserContext} from './context/UserContext'


function App() {
  const context = useContext(UserContext)
  console.log(context)
  return (
    <div className="App">
      <Welcome />
      <Navbar />
      {/* <Signup /> */}
      
    </div>
  );
}

export default App;
