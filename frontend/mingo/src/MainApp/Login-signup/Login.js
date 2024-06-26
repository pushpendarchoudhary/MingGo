import React, { Fragment , useState} from "react";
import './login.css';
// import Loader from "../Layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import axios from "axios";
import MetaData from "../Layout/Metadata";




 const Login = ()=>{

    // const dispatch = useDispatch();
    // const alert= useAlert();
    // const {error, loading , isAuthenticated } = useSelector((state)=> state.user);
    
    // const [loginEmail, setLoginEmail ] = useState("");
    // const [loginPassword, setLoginPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            // Make the API call to your login endpoint
            const response = await axios.post('http://localhost: 4000/api/v1/users/login', {
                email: email,  
                password: password 
            });
            
            console.log(response.data);
            navigate("/home");
        } catch (error) {
            
            console.error('Login failed:', error);
        }
    }
    // const navigate=useNavigate();
    
    // const loginSubmit = (e)=> {
    //     e.preventDefault();
    //     dispatch(login(loginEmail,loginPassword));
    // }
    
    // useEffect(()=> {
    //     if(error){
    //         alert.error(error);
    //         dispatch(clearErrors());
    //     }

    //     if(isAuthenticated){
    //         navigate("/");
    //     }
    // },[dispatch, alert, error, isAuthenticated, navigate]);
    return(
        <Fragment>
            <MetaData title="Login"/>
            <div className="container01">
    <div className="row loginmain">
        <div >
            <div className=" panel ">
                <div className="Loginbox">
                    <h3 className="pt-3 font-weight-bold jobhead">Rhythm</h3>
                    <p className="panel-headingmain">LOGIN</p>
                </div>
                <div className="p-3">
                    <form className='loginform'  >
                        <div className="form-group py-2">
                            <div className="input-field-div"> 
                            <MailOutlineIcon /> 
							<input className="inputF" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
                            </div>
                        </div>
                        <div className="form-group py-1 pb-2">
                            <div className="input-field-div">
                            <LockOpenIcon />
							<input className="inputF" type={showPassword ? "text":"password"} placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
                            <button  type="button" className="btn eye" onClick={handleTogglePasswordVisibility}> {showPassword ?  <VisibilityIcon/>:<VisibilityOffIcon />  }  </button>
                            </div>
                        </div>
						<div className="loginbutton "><button className="loginbutton2 btn" onClick={handleLogin}>LOGIN</button></div>
                        <div className="form-inline formclass">
							 <input type="checkbox" name="remember" id="remember"/> 
							 <label htmlFor="remember" className=" remtext">Remember me</label> 
							 <Link to={`/password/forgot`} id="forgot" className="remtext">Forgot password?</Link> </div>
                        
                        <div className="text-center pt-4 text-muted ">Don't have an account? <Link className="remtext" to="/signup">Signup</Link> </div>
                    </form>

                    
                    
                </div>
                <div className="">
                    <div className="text-center py-3 "> <a href="https://wwww.facebook.com" target="_blank" className="px-2"> <img className="logo" src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg" alt=""/> </a> <a href="https://www.google.com" target="_blank" className="px-2"> <img className="logo" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt=""/> </a> <a href="https://www.github.com" target="_blank" className="px-2"> <img className="logo" src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" alt=""/> </a> </div>
                </div>
            </div>
        </div>
    </div>
</div>
        
        </Fragment>
    )
}
export default Login;