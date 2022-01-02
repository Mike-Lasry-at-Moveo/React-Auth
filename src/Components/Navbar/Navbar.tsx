import React from 'react';
import  { Link } from 'react-router-dom';
import LoginPage from 'Pages/Auth/Login/LoginPage';

import "Components/Navbar/Navbar.scss" 
import { ClassName, Path } from 'Interfaces/Enums';

export default function Navbar(){
    return (
        <div className={ClassName.NAVBAR}>
        
            <Link to={Path.HOME_SFX}><img className="homeButton" src="https://img.icons8.com/color/48/000000/home.png"/></Link>
        
            <h3>Welcome to Angular Auth Application</h3>
            <div>
            <button>
                <Link to={Path.LOGIN_SFX} >Login</Link>
            </button>
            <button>
                <Link to={Path.SIGNUP_SFX}>Signup</Link>
            </button>
            <button>
                <Link to={Path.ADMIN_SFX}>Admin</Link>
            </button>
            <button >Logout</button>  {/*set onClick*/}
            </div>
        </div>
    )
}
// <img class="homeButton" src="https://img.icons8.com/color/48/000000/home.png"/>


