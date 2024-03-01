import React, {useEffect, useState} from "react";
import {Route, Routes, Link, useNavigate} from 'react-router-dom'
import './Boardstyle.css';
import axios from "axios";


const Board = () => {
    const [boardList, setBoardList] = useState<BoardListItem[]>([]);

    type BoardListItem = {
        IDX: number;
        TITLE: string;
        CONTENT: string;
        CREATE_BY: string;
        CREATE_TIME: string;
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://172.30.1.59/board.php');
            setBoardList(response.data);
        } catch (error) {
            console.log('error!', error);
        }
    }

    return (
        <div>
            <h1>게시판</h1>
            <ul>
                {boardList.map(item => (
                    <li key={item.IDX}>
                        <Link to={''}>제목: {item.TITLE}</Link>
                        <p>내용: {item.CONTENT}</p>
                        <p>작성자: {item.CREATE_BY}</p>
                        <p>작성 시간: {item.CREATE_TIME}</p>
                    </li>
                ))}
            </ul>
            <Link to={'/createpost'}>글쓰기</Link>
        </div>
    );
}

export default Board;

