import React from 'react';
import "Pages/Home/HomePage.scss"
import usersService from 'Services/users';

export default function HomePage(){

    return (
        <div className='homePage'>
            <h1>Welcome to Homepage!</h1>
            <button >show token</button>
        </div>
    )
}