import React, {useEffect} from 'react';
// import './App.css';
import Login from "./pages/Login";
import MainPage from "./pages/MainPage/MainPage"
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom'
import SignUp from "./pages/SignUp";
import {useState} from "react";
import TotallList from "./pages/MainPage/TotallList";
import AList from "./pages/MainPage/AList";
import BList from "./pages/MainPage/BList";
import axios from "axios";


function App() {
    const getAPI =  async () => {
        axios.get('http://192.168.219.71/create_user.php')
            .then(response => {
                console.log(response.data)
            })
    }

    useEffect(() => {
        getAPI()
    }, [])

    return (
        <div className="App">
            <BrowserRouter basename={"/"}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<SignUp/>}/>
                    <Route path="/TotallList" element={<TotallList/>}/>
                    <Route path="/AList" element={<AList/>}/>
                    <Route path="/BList" element={<BList/>}/>
                </Routes>
            </BrowserRouter>

        </div>
        /**/
    );
}

export default App;
