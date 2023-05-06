import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";


const IndividualPages = () => {
    let { id } = useParams();
    const [scholarships, setScholarships] = useState('');

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/scholarships/${id}`).then(
            (response) => {
                setScholarships(response.data);
                console.log(response.data)
            }
        );
    },
        []);

    return (
        <div>
            <ul>
            {typeof scholarships.name !== "undefined" ? (<div className='data-wrapper-child'><p className='bold'>Market cap</p><p>$ {scholarships.name}</p></div>) : ("")}
                <li></li>
                <li></li>

            </ul>
        </div>
    )
}

export default IndividualPages
