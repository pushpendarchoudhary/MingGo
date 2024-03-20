import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import '../../App.css';

const Home = ()=>{
    return (
        <div className= "Cont">
            <div className= "comp Options btn btn-primary btn-lg btn-block mt-7"><Link to ='/login' ><button>Login/Signup</button></Link></div>
           <div className= "comp Options btn btn-primary btn-lg btn-block mt-7" ><Link to = '/report'><button> Track Report</button></Link></div>
            <div className= "comp Options btn btn-primary btn-lg btn-block mt-7"><Link to = '/royalties'><button>Royalties </button></Link></div>
            <div className= "comp Options btn btn-primary btn-lg btn-block mt-7"><Link to = '/distribution'><button>Division</button></Link></div>
            <div className= "comp Options btn btn-primary btn-lg btn-block mt-7"><Link to = '/personal'><button>Profile</button></Link></div>
        </div>
    )
}

export default Home;
