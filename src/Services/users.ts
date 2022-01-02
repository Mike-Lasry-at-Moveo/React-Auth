import React from "react";
import axios from "axios";
import { Path } from "Interfaces/Enums";
import IAuth from "Interfaces/Auth";
import IUpdateUser from "Interfaces/UserUpdate";

const getAllUsers = () => {
    return axios.get(Path.BASE_URL);
}

const getUserById = (id: string) => {
    return axios.get(`${Path.BASE_URL}/${id}`);
 }

const signup = (credentials: IAuth) => {
    return axios.post(`${Path.BASE_URL}`, credentials);
 }

const login = (payload: IAuth) => { 
    return axios.post(`${Path.BASE_URL}/${Path.LOGIN_SFX}`, {...payload});
}

const changeUser = (id: string, update: IUpdateUser) => {
    return axios.patch(`${Path.BASE_URL}/${id}`, update);
}

const deleteUser = (id: string) => {
    return axios.delete(`${Path.BASE_URL}/${id}`);
}

const usersService = {
    getAllUsers,
    getUserById,
    signup,
    login,
    changeUser,
    deleteUser,
} 

export default usersService;