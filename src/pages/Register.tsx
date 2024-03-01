import React, {useState} from "react";
import "../index.css"
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });

        // console.log(data)
    }
    const navigate = useNavigate()


    return(
        <div className='registerPage'>
            <h1>회원가입</h1>

            <form name='register' method="POST" action="http://172.30.1.59/user_state.php">
                <div className='emailInfo'>

                    <div>이름</div>
                    <div className='inputId'>
                        <input type='text' name='user_name' className='input'
                        onChange={handleChange} />
                    </div>

                    <div className='emailInfo'>
                        <div>이메일 주소</div>
                        <div className='inputId'>
                            <input type='email' name='user_address' className='input'
                            onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='emailInfo'>
                        <div>비밀번호</div>
                        <div className='inputId'>
                            <input type='password' name='password' className='input'
                            onChange={handleChange}/>

                        </div>
                    </div>

                    <div className='emailInfo'>
                        <div>비밀번호 확인</div>
                        <div className='inputId'>
                            <input type='password' name='confirmPassword' className='input'
                            onChange={handleChange}/>

                        </div>
                    </div>

                </div>
                <div className='loginBtn'>
                    <button type='submit' className='bottomBtn' name='save'>회원가입</button>
                    <button className='bottomBtn'>취소</button>
                </div>
            </form>
        </div>
    )
}

export default Register;