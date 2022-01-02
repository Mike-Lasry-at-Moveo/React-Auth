import React, { useState } from "react";
import "Pages/Admin/AdminPage.scss";
import UserList from "Components/User/UserList/UserList";
import usersService from "Services/users";
import { Errors } from "Interfaces/Enums";
import IResponse from "Interfaces/Response";

export default function AdminPage(){

    return (<div className="adminPage">
        <UserList />
    </div>)
}