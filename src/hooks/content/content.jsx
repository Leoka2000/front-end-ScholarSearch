import React from 'react'
import {useNavigate} from 'react-router-dom'

const Content = ({keyNumber,
    id,
    image,
    name,
    country,
    funding,
    level,
    style,
    description,
    link}) => {

        const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/scholarship-single/${id}`, { replace: false, state: {keyNumber,
            id,
            image,
            name,
            country,
            funding,
            level,
            style,
            description,
            link}})
      }
      
    return (
        <div className='right-row'>
            <div className='content-header'>
                <img src={image}/>
            </div>
            <div className='content-text-wrapper'>
                <h1>{name}</h1>
                <h4>Type of funding:</h4>
                <h2>{funding}</h2>
                <button type='button' onClick={handleClick}>More info</button>
            </div>
        </div>
    )
}

export default Content
