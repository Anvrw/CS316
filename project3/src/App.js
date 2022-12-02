import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './login';
import SignUpPage from './signup';
import UserPage from './user';
import Header from './_header';
import Footer from './_footer';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);

  const toggleState = () => setToggle(!toggle);

  return (
  <div className="container">
        <Router>
          <Header/>
          <Routes>
            <Route path="/login" element={<LoginPage toggleState={toggleState}/>}/>
            <Route path="/signup" element={<SignUpPage toggleState={toggleState}/>}/>
            <Route path="/account" element={<UserPage/>}/>
          </Routes>
          <Footer/>
      </Router>
  </div>
  ); 
}

export default App;