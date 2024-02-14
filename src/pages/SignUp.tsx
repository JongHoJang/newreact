// import React, {useEffect, useState} from "react";
import "../index.css"

const SignUp = () => {
    return(
        <div className='signUpPage'>
            <h1>회원가입</h1>

            <div className='emailInfo'>
                <div>이름</div>
                <div className='inputId'>
                    <input type='text' className='input'/>
                </div>


                <div className='emailInfo'>
                    <div>이메일 주소</div>
                    <div className='inputId'>
                        <input type='text' className='input'/>
                    </div>
                </div>

                <div className='emailInfo'>
                    <div>비밀번호</div>
                    <div className='inputId'>
                        <input type='text' className='input'/>
                    </div>
                </div>

                <div className='emailInfo'>
                    <div>비밀번호 확인</div>
                    <div className='inputId'>
                        <input type='text' className='input'/>
                    </div>
                </div>

            </div>
            <div className='loginBtn'>
                <button className='bottomBtn'>회원가입</button>
                <button className='bottomBtn'>취소</button>
            </div>
        </div>
    )
}

export default SignUp;