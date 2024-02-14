import React, {useEffect} from "react";
import axios from "axios";


const AList = () => {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response)
            })
    }, []);


    return (
        <>
            <div className="pages">
                <div className='titleWrap'>
                    A list 입니다
                </div>
                <nav className="navWrap">

                </nav>
            </div>
        </>
    )
};

export default AList;
