import React, { useContext } from 'react';
import AppContext from '../../../AppContext';
import './style.css';

function EducationForm() {

    const updateText = useContext(AppContext);

    return (
        <div className="education-form">
            <p className="education-title">Education</p>
            <input 
                type="text"
                name="schoolName"
                placeholder="School Name"
                value={updateText.schoolName}
                onChange={e => updateText.setSchoolName(e.target.value)}
            />
            <input 
                type="text"
                name="schoolCity"
                placeholder="City"
                value={updateText.schoolCity}
                onChange={e => updateText.setSchoolCity(e.target.value)}
            />
            <input 
                type="text"
                name="schoolDegree"
                placeholder="Degree"
                value={updateText.schoolDegree}
                onChange={e => updateText.setSchoolDegree(e.target.value)}
            />
            <input 
                type="text"
                name="schoolSubject"
                placeholder="Major"
                value={updateText.schoolSubject}
                onChange={e => updateText.setSchoolSubject(e.target.value)}
            />
            <input 
                type="text"
                name="schoolStart"
                placeholder="Start Date"
                value={updateText.schoolStart}
                onChange={e => updateText.setSchoolStart(e.target.value)}
            />
            <input 
                type="text"
                name="schoolEnd"
                placeholder="End Date"
                value={updateText.schoolEnd}
                onChange={e => updateText.setSchoolEnd(e.target.value)}
            />
            <button className="education-add">ADD</button>
        </div>
    );
}

export default EducationForm;
