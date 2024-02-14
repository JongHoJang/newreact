import React, {useEffect, useState} from "react";
import AList from './AList'
import BList from "./BList";
import TotallList from "./TotallList";
import {Route, Routes, Link, useNavigate} from 'react-router-dom'
import Header from "./Header";
import './MainPage.css';
import axios from "axios";

const MainPage = () => {

    const navigate = useNavigate();

    const onClickChangeUrl = () => {
        navigate('/dan')
    }

    return (
        <>
            <div className="mainPage">
                <Header/>
                <nav className="navWrap">
                    <Link to='/TotallList'> Total </Link> |
                    <Link to='/AList'> AList </Link> |
                    <Link to='/BList'> BList </Link>
                </nav>

                <button onClick={onClickChangeUrl}>URL 변경</button>
                <div className='footer'>
                    <div className="searchInput">
                        <input/>
                        <button>검색</button>
                    </div>
                    <div>
                        <button>글쓰기</button>
                    </div>
                </div>


            </div>

        </>
    )
};

export default MainPage;
