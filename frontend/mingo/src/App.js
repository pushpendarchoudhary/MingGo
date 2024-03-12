import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './MainApp/Login-signup/Login';
import HomeIcon from "@mui/icons-material/Home";



function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const isLoginShown = localStorage.getItem('isLoginShown');
    if(isLoginShown){
      setShowLogin(true);
    }

    setIsLoading(false);
  },[])

  const handleLoginClick = ()=>{
    setShowLogin(true);
    localStorage.setItem('isLoginShown', 'true');
  }

  const handleHomeClick = ()=>{
    setShowLogin(false);
    localStorage.removeItem('isLoginShown');
  }

  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <div>
      <Router>
        <div className='HomeContainer'>
        <div className="sidebar">
            <h1 className="Textlogo"><span>R</span>ythm</h1>
            <div >
                <Link to = "/" className="Options" onClick={handleHomeClick}><HomeIcon className="HomeIcon"/><h3 className="Home">Home</h3></Link>
            </div>

        </div>

        <div className='MainScreen'>
          <Routes>
          <Route exact path= '/login' Component={Login}/>
        </Routes>
        {(!showLogin || window.location.pathname === '/') && (<div><Link to= "/login"><button onClick={handleLoginClick}>Login/signup</button></Link></div>)}
        </div>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
