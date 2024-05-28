import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './MainApp/Login-signup/Login';
import HomeIcon from "@mui/icons-material/Home";
import RadioIcon from "@mui/icons-material/Radio";
import PersonIcon from "@mui/icons-material/Person";
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
import AllTracks from "./MainApp/Components.js/Tracks/Alltracks";
import SongList from "./MainApp/Components.js/Tracks/list";
import UploadTrack from "./MainApp/Components.js/Tracks/UploadTrack";
import TrackDetails from "./MainApp/Components.js/Tracks/track";




function App() {
  

 
  return (
    <div>
      
      <Router>
        <div className='HomeContainer'>
        <div className="sidebar">
            <h1 className="Textlogo">Rhythm</h1>
            <div >
                <Link to = "/" className="Options" ><HomeIcon className="Icon"/><h4 className="Home">Home</h4></Link>
                <Link to = "/" className="Options" ><RadioIcon className="Icon"/><h4 className="Home">Radio</h4></Link>
                <Link to = "/tracks" className="Options" ><LibraryMusic className="Icon"/><h4 className="Home">Library</h4></Link>
                <Link to = "/" className="Options" ><PersonIcon className="Icon"/><h4 className="Home">Artist</h4></Link>
                <Link to = "/" className="Options" ><AlbumIcon className="Icon"/><h4 className="Home">Albums</h4></Link>
                <Link to = "/" className="Options" ><AccountCircleIcon className="Icon"/><h4 className="Home">Profile</h4></Link>
                <Link to = "/" className="Options" ><SettingsIcon className="Icon"/><h4 className="Home">Settings</h4></Link>
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
          <Route exact path = '/tracks' Component={AllTracks}/>
          <Route exact path = '/list' Component={SongList}/>
          <Route exact path = '/upload' Component={UploadTrack}/>
          <Route exact path = '/details' Component={TrackDetails}/>
        </Routes>

        </div>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
