import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import '../../App.css';
import guitar from "../media/guitar.jpeg";


const Home = ()=>{
    return (
        <div className= "Cont">
            <div className="leftSide">
                <h1 className="Welcome">Welcome to <span>Rhythm</span></h1>
                <h2 className="Subheading"> A blockchain-based solution for fair compensation</h2>
                <p className="Subheading2">Empowering music artists to take control of their earning with transparent and Fairness</p>
                <p className="Subheading2">||  <span>Upload</span> your music, <span>Set</span> prices, and <span>Receive</span> your fair share instantly  ||</p>
                <div className="loginButtonDiv">
                <div ><Link to ='/login' ><button className= "comp">Login</button></Link></div>
                <div ><Link to ='/login' ><button className= "comp">Signup</button></Link></div>
                </div>
                
                {/* <div className= "comp" ><Link to = '/report'><button> Track Report</button></Link></div>
                <div className= "comp "><Link to = '/royalties'><button>Royalties </button></Link></div>
                <div className= "comp "><Link to = '/distribution'><button>Division</button></Link></div>
                <div className= "comp "><Link to = '/personal'><button>Profile</button></Link></div> */}
            </div>
            <div className="rightSide"><img src={guitar} className="guitar" alt="guitar img"/></div>
        </div>
    )
}

export default Home;
