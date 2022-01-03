import React, { useState } from "react";
import "Components/User/UserList/UserList.scss"
import usersService from "Services/users";
import { ClassName, Errors, Path } from "Interfaces/Enums";
import IResponse from "Interfaces/Response";
import IUser from "Interfaces/User";
import UserBadge from "../UserBadge/UserBadge";
import { Link } from "react-router-dom";
import authService from "Services/auth";


export default function UserList() {
    
    const handleResponse = (response: IResponse) => {
        if (response.success) setUsers(response.data);
        else alert(Errors.ERR);
    };

    const deleteUser = (id: string) => {
        usersService.deleteUser(id)
         .then(response => {
             if(!response.data.deletedCount) return alert(Errors.DEL_FAIL)
             const newUsers = users.filter(u => u._id != id);
             setUsers((ps) => newUsers);
         });
    };

    const [users, setUsers] = useState([] as IUser[]);

    React.useEffect(() => {
        usersService.getAllUsers(authService.getToken())
        .then(response => {
            if (response && response.data) 
                handleResponse(response.data);
        }).catch((err) => console.error.bind(Errors.AXIOS));
    }, []);

    return (
        <div className={ClassName.USR_LIST}>
            { 
                users.map((usr, ix) => (
                    <div className={ClassName.USR_CARD} key={ix}>
                        <button className={ClassName.UPDT_USR}>
                            <Link to={`${Path.UPDT_USR}/${usr._id}`}>UPDATE</Link>
                        </button>
                        <UserBadge {...usr} />
                        <button className={ClassName.DEL_USR} onClick={ () => { deleteUser(usr._id as string) } }>DEL</button>
                    </div>
                ))
            }
        </div>
    );
}