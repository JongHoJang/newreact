import React, {useEffect, useState} from "react";
import "../index.css"
import Register from "./Register";
import {useNavigate} from 'react-router-dom'
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom'



const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();


    const onChangeId = (e:React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }
    const onChangePw = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    }


    return (
        <>
            <div className='page'>
                <div className='titleWrap'>
                    아이디와 비밀번호를 입력해주세요
                </div>

                <form name='login' action='http://172.30.1.59/login.php' method='post'>

                    <div className='contentWrap'>
                        <div className='inputId'>
                            <input type='text' name='user_id' className='input' placeholder={"아이디를 입력해주세요"} />
                        </div>

                        <div className='inputPw'>
                            <input type='password' name='user_pw' className='input' placeholder={"비밀번호를 입력해주세요"} />
                        </div>
                    </div>

                    <button type='submit' name='loginBtn' className='bottomBtn'>로그인</button>
                </form>
                <Link to='/register' className='registerBtn'>회원가입</Link>
            </div>
        </>
    )
};

export default Login;
