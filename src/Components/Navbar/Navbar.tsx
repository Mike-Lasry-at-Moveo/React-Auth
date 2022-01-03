import React from 'react';
import  { Link, useNavigate } from 'react-router-dom';
import LoginPage from 'Pages/Auth/Login/LoginPage';

import "Components/Navbar/Navbar.scss" 
import { ClassName, Path } from 'Interfaces/Enums';
import authService from 'Services/auth';

export default function Navbar(){

    const navigate = useNavigate();

    const logoutHandler = () => {
        authService.logout();
        navigate(`/${Path.HOME_SFX}`);
    }

    const LogoutButton = () => {
        return authService.isUserLogged() ? <button onClick={logoutHandler}>Logout</button> : <div></div>
    }

    const AdminButton = () => {
        return authService.isUserAdmin() ? <button><Link to={Path.ADMIN_SFX}>Admin</Link></button> : <React.Fragment></React.Fragment>
    }

    const LoginButton = () => {
        return !authService.isUserLogged() ? <button><Link to={Path.LOGIN_SFX} >Login</Link></button> : <React.Fragment></React.Fragment>
    }

    const SignupButton = () => {
        return !authService.isUserLogged() ? <button><Link to={Path.SIGNUP_SFX}>Signup</Link></button> : <React.Fragment></React.Fragment>
    }

    const ProfileButton = () => {
        return authService.isUserLogged() ? <button><Link to={Path.PROFILE_SFX}>Profile</Link></button> : <React.Fragment></React.Fragment>
    }

    const NavContent = () => {
        return authService.isUserLogged() ? <div><h3>Welcome, {authService.getUser().username}</h3></div> : <div><h3>Welcome to Angular Auth Application</h3></div>
    }
    
    return (
        <div className={ClassName.NAVBAR}>
            <Link to={Path.HOME_SFX}>
                <img className={ClassName.HOME_BTB} src={ClassName.HOME_ICON_SRC}/>
            </Link>
            <div>
                <NavContent />
            </div>
            <div>
                <LoginButton />
                <SignupButton />
                <AdminButton />
                <LogoutButton />
                <ProfileButton />
            </div>
        </div>
    )
}


