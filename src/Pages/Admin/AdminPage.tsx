import React from "react";
import "Pages/Admin/AdminPage.scss";
import UserList from "Components/User/UserList/UserList";

export default function AdminPage(){

    return (<div className="adminPage">
        <UserList />
    </div>)
}