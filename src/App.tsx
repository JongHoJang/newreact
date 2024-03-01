import React, {useEffect} from 'react';
// import './App.css';
import Login from "./pages/Login";
import Board from "./pages/Board"
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom'
import Register from "./pages/Register";

import {useState} from "react";
import CreatePost from "./pages/CreatePost";
import AList from "./pages/AList";
import BList from "./pages/BList";
import axios from "axios";


function App() {

    return (
        <div className="App">
            <BrowserRouter basename={"/"}>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/board" element={<Board/>}/>
                    <Route path="/createpost" element={<CreatePost/>}/>
                </Routes>
            </BrowserRouter>

        </div>
        /**/
    );
}

export default App;
