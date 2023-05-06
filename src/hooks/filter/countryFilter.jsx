import React from 'react'
import '../../pages/main/home/home.css'

const CountryFilter = ({onCountrySelect}) => {

    const handleSelect = (e) => {
        onCountrySelect(e.target.value);
    }
   

    return (
        <>
            <div className='left-row' >
                <h1>Country</h1>
                <select className='dropdown' onChange={handleSelect}>
                    <option className='dropdown-content' value="">Filter by country</option>
                    <option className='dropdown-content' value="Slovakia">Slovakia</option>
                    <option className='dropdown-content' value="Australia">Australia</option>
                    <option className='dropdown-content' value="Germany">Germany</option>
                    <option className='dropdown-content' value="Canada">Canada</option>
                    <option className='dropdown-content' value="Spain">Spain</option>
                    <option className='dropdown-content' value="Hungary">Hungary</option>
                </select>
            </div>
        </>
    )
}

export default CountryFilter
