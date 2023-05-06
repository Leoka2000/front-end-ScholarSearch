import React from 'react'
import '../../pages/main/home/home.css'

const StudyLevelFilter = ({ onLevelSelect }) => {

    const handleSelect = (e) => {
        onLevelSelect(e.target.value);
    }


    return (
        <>
            <div className='left-row' >
                <h1>Study level</h1>
                <select className='dropdown' onChange={handleSelect}>
                    <option className='dropdown-content' value="">Filter by study level</option>
                    <option className='dropdown-content' value="Undergraduate">Undergraduate</option>
                    <option className='dropdown-content' value="Graduate">Graduate</option>
                    <option className='dropdown-content' value="All">All</option>
                    
                </select>
            </div>
        </>
    )
}

export default StudyLevelFilter
