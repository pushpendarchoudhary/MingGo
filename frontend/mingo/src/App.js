import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './MainApp/Login-signup/Login';
import HomeIcon from "@mui/icons-material/Home";
import Home from "./MainApp/HomePage/Home";
import SignUp from "./MainApp/Login-signup/SignUp";



function App() {
  

 
  return (
    <div>
      <Router>
        <div className='HomeContainer'>
        <div className="sidebar">
            <h1 className="Textlogo"><span>R</span>ythm</h1>
            <div >
                <Link to = "/" className="Options" ><HomeIcon className="HomeIcon"/><h3 className="Home">Home</h3></Link>
            </div>

        </div>

        <div className='MainScreen'>
          <Routes>
          <Route exact path ='/' Component={Home}/>
          <Route exact path= '/login' Component={Login}/>
          <Route exact path= '/signup' Component={SignUp}/>
        </Routes>

        </div>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
