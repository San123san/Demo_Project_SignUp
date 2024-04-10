import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp'
import Profile from './Components/Profile'
import Option from './Components/Option'
import Verify from './Components/Verify'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='profile' element={<Profile/>} />
        <Route path='option' element={<Option/>} />
        <Route path='verify' element={<Verify/>} />
      </Routes>
    </Router>
  );
}

export default App;
