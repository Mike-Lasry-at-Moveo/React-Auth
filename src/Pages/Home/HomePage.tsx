import React from 'react';
import "Pages/Home/HomePage.scss"
import usersService from 'Services/users';
import { ClassName, Str } from 'Interfaces/Enums';
import authService from 'Services/auth';

export default function HomePage() {


    return (
        <div className={ClassName.HOME_PAGE}>
            <h1>Welcome to Homepage!</h1>
        </div>
    )
}