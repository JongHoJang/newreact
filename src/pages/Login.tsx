import React, {useEffect, useState} from "react";
import "../index.css"
import SignUp from "./SignUp";
import {useNavigate} from 'react-router-dom'

const User = {
    pw: 'qwer1234!@'
}
const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('')
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true)
    const navigate = useNavigate()
    const [signUp, setSignUp] = useState(false);
    const onClickPopupBtn = () => {
        setSignUp(true)
        navigate('/register')
    }

    const onChangeId = (e:React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }
    const onChangePw = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    const onClickConfirmBtn = () => {
        if(pw === User.pw) {
            alert("로그인에 성공하셨습니다.")
        } else {
            alert('아이디 또는 비밀번호를 확인해주세요')
        }
    }

    useEffect(() => {
        if(pwValid) {
            setNotAllow(false)
        } else {
            setNotAllow(true)
        }
    }, [pwValid])

    return (
        <>
            <div className='page'>
                <div className='titleWrap'>
                    아이디와 비밀번호를 입력해주세요
                </div>

                <div className='contentWrap'>
                    <div className='inputId'>
                        <input type='text' className='input' placeholder={"아이디를 입력해주세요"} value={id} onChange={onChangeId}/>
                    </div>
                    <div className='inputPw'>
                        <input type='password' className='input' placeholder={"비밀번호를 입력해주세요"} value={pw} onChange={onChangePw}/>
                    </div>
                    <div className='errorMessage'>
                        {
                            !pwValid && pw.length > 0 && (
                                <div>비밀번호를 다시 입력해주세요</div>
                            )
                        }
                    </div>
                </div>
                <div className='loginBtn'>
                    <button onClick={onClickConfirmBtn} disabled={notAllow} className='bottomBtn'>로그인</button>
                </div>
                <button className='signUpBtn' onClick={onClickPopupBtn}>회원가입</button>
            </div>
        </>
    )
};

export default Login;
