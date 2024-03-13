import React, { Fragment , useState} from "react";
import './login.css';
// import Loader from "../Layout/Loader/Loader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';




 const Login = ()=>{

    // const dispatch = useDispatch();
    // const alert= useAlert();
    // const {error, loading , isAuthenticated } = useSelector((state)=> state.user);
    
    // const [loginEmail, setLoginEmail ] = useState("");
    // const [loginPassword, setLoginPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
    
}
export default Login;