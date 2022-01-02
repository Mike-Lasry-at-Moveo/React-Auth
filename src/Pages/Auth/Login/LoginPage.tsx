import React, { useState } from 'react';
import 'Pages/Auth/Login/LoginPage.scss'
import IAuth from 'Interfaces/Auth';
import { ClassName, Errors, InputTypes, Path, Str } from 'Interfaces/Enums';
import usersService from 'Services/users';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){
    
    const navigate = useNavigate();

    const credentialsHandler = (value: string, className: string) => {
        switch (className) {
            case ClassName.UN_INP: return setCredentials((prevState) => { return {...prevState, username: value} });
            case ClassName.PW_INP: return setCredentials((prevState) => { return {...prevState, password: value} });
            default: alert(Errors.ERR);
        }
    }
    
    const resetFields = () => {
        setCredentials((ps) => newAuthObject());
    }

    const validateFields = () => {
        return credentials.username != Str.EMPTY
            &&  credentials.password != Str.EMPTY;
    };

    const loginHandler = (event:any) => {
        event.preventDefault();
        if(!validateFields()) return alert(Str.INVALID);
        usersService.login(credentials).then(response => { 
            usersService.setToken(Str.JWT, response.data.message);            
            resetFields();
            alert(Str.WELCOME_B);
            navigate(`/${Path.ADMIN_SFX}`);
        });
    }
    
    const newAuthObject = (): IAuth => {
        return {
            username: Str.EMPTY,
            password: Str.EMPTY,
        };
    }
    
    const [credentials, setCredentials] = useState(newAuthObject() as IAuth)

    return (
        <div className={ClassName.LOGIN_PAGE}>
            <h3>Welcome Back</h3>
            <form>
                <div className={ClassName.LOGIN_CNTRLS}>
                    <div className={ClassName.LOGIN_CNTRL}>
                        <label>Username</label><br/>
                        <input value={credentials.username} className={ClassName.UN_INP} type={InputTypes.TXT} 
                            onChange={ (e) => credentialsHandler(e.target.value, e.target.className) } />
                    </div>
                    <div className={ClassName.LOGIN_CNTRL}>
                        <label>Password</label><br/>
                        <input value={credentials.password} className={ClassName.PW_INP} type={InputTypes.PW} 
                            onChange={ (e) => credentialsHandler(e.target.value, e.target.className) } />
                    </div>
                </div>
                <div className={ClassName.LOGIN_ACTNS}>
                    <div className={ClassName.LOGIN_ACTN}>
                        <button className={ClassName.LOGIN_BTN} onClick={ (e) => loginHandler(e) }>Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}