import React, { Fragment, useState, useEffect } from "react";
import './login.css'
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FaceIcon from "@material-ui/icons/Face";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
// import { useAlert } from 'react-alert';
// import { register, clearErrors } from '../../actions/userActions';

const SignUp = () => {
    // const { error, loading, success, isAuthenticated } = useSelector((state) => state.user);
    // const dispatch = useDispatch();
    // const alert = useAlert();

    const [user, setUser] = useState({
        FirstName: "",
        MiddleName: "",
        LastName: "",
        email: "",
        password: "",
        countryCode: "",
        mobileNumber: "",
        avatar: null,
    });

    const [avatarPreview, setAvatarPreview] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
            }
        };
        reader.readAsDataURL(file);
        setUser({ ...user, avatar: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name.FirstName', user.FirstName);
        formData.append('name.MiddleName', user.MiddleName);
        formData.append('name.LastName', user.LastName);
        formData.append('email', user.email);
        formData.append('password', user.password);
        formData.append('phone.countryCode', user.countryCode);
        formData.append('phone.mobileNumber', user.mobileNumber);
        formData.append('avatar', user.avatar);

        // dispatch(register(formData));
    };

    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (error) {
    //         alert.error(error);
    //         dispatch(clearErrors());
    //     }
    //     if (success) {
    //         alert.success("Registered successfully");
    //     }
    //     if (isAuthenticated) {
    //         navigate("/account");
    //     }
    // }, [dispatch, alert, error, success, isAuthenticated, navigate]);

    return (
        <Fragment>
            <div className="container01">
                <div className="row loginmain">
                    <div>
                        <div className="panel">
                            <div className="Loginbox">
                                <h3 className="pt-3 font-weight-bold jobhead">Rhythm</h3>
                                <p className="panel-headingmain">SIGN UP</p>
                            </div>
                            <div className="panel-body p-3">
                                <form className="signUpform" onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="input-field-div">
                                        <FaceIcon />
                                        <input className="inputF" type="text" placeholder="First Name" required name="FirstName" onChange={handleChange} />
                                    </div>
                                    <div className="input-field-div">
                                        <FaceIcon />
                                        <input className="inputF" type="text" placeholder="Middle Name" name="MiddleName" onChange={handleChange} />
                                    </div>
                                    <div className="input-field-div">
                                        <FaceIcon />
                                        <input className="inputF" type="text" placeholder="Last Name" name="LastName" onChange={handleChange} />
                                    </div>
                                    <div className="input-field-div">
                                        <MailOutlineIcon />
                                        <input className="inputF" type="email" placeholder="Email" required name="email" onChange={handleChange} />
                                    </div>
                                    <div className="input-field-div">
                                        <MailOutlineIcon />
                                        <input className="inputF" type="text" placeholder="Country Code" required name="countryCode" onChange={handleChange} />
                                    </div>
                                    <div className="input-field-div">
                                        <MailOutlineIcon />
                                        <input className="inputF" type="text" placeholder="Mobile Number" required name="mobileNumber" onChange={handleChange} />
                                    </div>
                                    <div className="input-field-div">
                                        <LockOpenIcon />
                                        <input className="inputF" type="password" placeholder="Password" required name="password" onChange={handleChange} />
                                    </div>
                                    <div className="registerImage">
                                        <img src={avatarPreview} alt="Avatar Preview" />
                                        <input className="btn" type="file" name="avatar" accept="image/*" onChange={handleFileChange} multiple={false} />
                                    </div>
                                    <div className="loginbutton">
                                        <button className="loginbutton2 btn" type="submit" value="Signup">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignUp;
