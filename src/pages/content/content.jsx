import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Content = ({ keyNumber,
    image,
    name,
    country,
}) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()

    const onSubmit = (data) => {
        navigate("/scholarship-single", { replace: true, state: { data } })
    };

    return (
        <div className='right-row'>
            <div className='content-header'>
                <img src={image} />
            </div>
            <div className='content-text-wrapper'>
                <h1>{name}</h1>
                <h4>Location of study:</h4>
                <h2>{country}</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <button type={"radio"} {...register("submit-button")} value={`${keyNumber}`}>More information</button>
            </form>
        </div>
    )
}

export default Content