import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './MainApp/Login-signup/Login';
import HomeIcon from "@mui/icons-material/Home";
import RadioIcon from "@mui/icons-material/Radio";
import PersonIcon from "@mui/icons-material/Person";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlbumIcon from "@mui/icons-material/Album";
import Home from "./MainApp/HomePage/Home";
import SignUp from "./MainApp/Login-signup/SignUp";
import afterLogin from "./MainApp/HomePage/afterlogin";
import Report from "./MainApp/Components.js/report";
import Royalties from "./MainApp/Components.js/royalties";
import Distribution from "./MainApp/Components.js/distribution";
import PersonalDetails from "./MainApp/Components.js/personal";
import LibraryMusic from "@mui/icons-material/LibraryMusic";



function App() {
  

 
  return (
    <div>
      <Router>
        <div className='HomeContainer'>
        <div className="sidebar">
            <h1 className="Textlogo"><span>R</span>ythm</h1>
            <div >
                <Link to = "/" className="Options" ><HomeIcon className="HomeIcon"/><h3 className="Home">Home</h3></Link>
                <Link to = "/" className="Options" ><RadioIcon className=""/><h3 className="Home">Radio</h3></Link>
                <Link to = "/" className="Options" ><LibraryMusic className=""/><h3 className="Home">Library</h3></Link>
                <Link to = "/" className="Options" ><PersonIcon className=""/><h3 className="Home">Artist</h3></Link>
                <Link to = "/" className="Options" ><AlbumIcon className=""/><h3 className="Home">Albums</h3></Link>
                <Link to = "/" className="Options" ><AccountCircleIcon className=""/><h3 className="Home">Profile</h3></Link>
                <Link to = "/" className="Options" ><SettingsIcon className=""/><h3 className="Home">Settings</h3></Link>
            </div>

        </div>

        <div className='MainScreen'>
          <Routes>
          <Route exact path ='/' Component={Home}/>
          <Route exact path = '/home' Component={afterLogin}/>
          <Route exact path= '/login' Component={Login}/>
          <Route exact path= '/signup' Component={SignUp}/>
          <Route exact path = '/report' Component={Report}/>
          <Route exact path = '/royalties' Component={Royalties}/>
          <Route exact path = '/distribution' Component = { Distribution}/>
          <Route exact path = '/personal' Component={PersonalDetails}/>
        </Routes>

        </div>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
