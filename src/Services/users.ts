import React from "react";
import axios from "axios";
import { Errors, Path, Str } from "Interfaces/Enums";
import IAuth from "Interfaces/Auth";
import IUpdateUser from "Interfaces/UserUpdate";

const getAllUsers = (token: string) => {
    const config = { headers: { ['authorization']: `Bearer: ${token}` } }; 
    return axios.get(Path.BASE_URL, config);
}

const getUserById = (id: string) => {
    return axios.get(`${Path.BASE_URL}/${id}`);
}

const signup = (credentials: IAuth) => {
    return axios.post(`${Path.BASE_URL}`, credentials);
}

const login = (payload: IAuth) => { 
    return axios.post(`${Path.BASE_URL}/${Path.LOGIN_SFX}`, payload);
}

const changeUser = (id: string, update: IUpdateUser) => {
    return axios.patch(`${Path.BASE_URL}/${id}`, update);
}

const deleteUser = (id: string) => {
    return axios.delete(`${Path.BASE_URL}/${id}`);
}

// const getToken = (): string => {
//     const token = document.cookie.split(Str.SEMI_COLON)[0].split(Str.EQUALS)[1];
//     if(!token) {
//         alert(Errors.ERR);
//         return Str.EMPTY;
//     } return token;
// }

// const setToken = (key: string, value: string): void => {
//     document.cookie = Str.EMPTY;
//     if (value === Str.EMPTY) return;
//     document.cookie = `${key}${Str.EQUALS}${value}`;
//}

const usersService = {
    getAllUsers,
    getUserById,
    login,
    signup,
    changeUser,
    deleteUser,
}; export default usersService;