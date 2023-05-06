import React from 'react'
import '../../pages/main/home/home.css'

const FundingFilter = ({ onFundingSelect }) => {

    const handleSelect = (e) => {
        onFundingSelect(e.target.value);
    }


    return (
        <>
            <div className='left-row' >
                <h1>Funding</h1>
                <select className='dropdown' onChange={handleSelect}>
                    <option className='dropdown-content' value="">Filter by funding type</option>
                    <option className='dropdown-content' value="Partial funding">Partial funding</option>
                    <option className='dropdown-content' value="Full funding">Full funding</option>
                </select>
            </div>
        </>
    )
}

export default FundingFilter
