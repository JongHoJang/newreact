import React, {useEffect, useState} from "react";
import {Route, Routes, Link, useNavigate} from 'react-router-dom'
import axios from "axios";


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };
    return(
        <div>
            <Link to={'/Board'}>뒤로가기</Link>
            <form>
                <label>제목:</label>
                <input type="text" name="title" maxLength={50} value={title} onChange={handleTitleChange}/>

                <label>내용:</label>
                <textarea name="content" rows={10} cols={50} value={content} onChange={handleContentChange}></textarea>
                <button type='submit' className='' name='post'>작성 완료</button>
                <button className=''>취소</button>
            </form>
        </div>
    )
}
export default CreatePost;

