import React from "react";
import "Pages/Admin/AdminPage.scss";
import UserList from "Components/User/UserList/UserList";
import { useEffect } from "react";
import authService from "Services/auth";
import { useNavigate } from "react-router-dom";
import { Path } from "Interfaces/Enums";

export default function AdminPage(){
    const navigate = useNavigate();

    useEffect(() => {
        if(!authService.isUserLogged())
            navigate(`/${Path.LOGIN_SFX}`)
    }, []);

    return (<div className="adminPage">
        {authService.isUserAdmin() ? <UserList /> : <h1>No Permissions</h1>}
    </div>)
}