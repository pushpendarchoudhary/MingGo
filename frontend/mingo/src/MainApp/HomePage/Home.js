import React from "react";
import "./Home.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../Login-signup/Login";
const Home = ()=>{
    return(
        <div className="HomeContainer">
        <div className="sidebar">
            <h1 className="Textlogo"><span>R</span>ythm</h1>
            <div >
                <Link to = "/" className="Options"><HomeIcon className="HomeIcon"/><h3 className="Home">Home</h3></Link>
            </div>

        </div>
        <div className="MainScreen">
                <Routes>
                    <Route exact path="/login" Component={Login} />
                    
                </Routes>
                <Link to="/login"><p>Login/signup</p></Link>
                

        </div>
                
        </div>
    )
}

export default Home;
