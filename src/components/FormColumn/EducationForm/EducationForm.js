import React, { useContext } from 'react';
import AppContext from '../../../AppContext';
import './style.css';

function EducationForm() {

    const updateText = useContext(AppContext);
    const onButtonClick = (e) => {
        e.preventDefault();
        let formattedData = {
            schoolStart: updateText.schoolStart,
            schoolEnd: updateText.schoolEnd,
            schoolName: updateText.schoolName,
            schoolCity: updateText.schoolCity,
            schoolDegree: updateText.schoolDegree,
            schoolSubject: updateText.schoolSubject
        }
        updateText.setEducationSections(prev => ([...prev, formattedData]));
        updateText.setSchoolStart('');
        updateText.setSchoolEnd('');
        updateText.setSchoolName('');
        updateText.setSchoolCity('');
        updateText.setSchoolDegree('');
        updateText.setSchoolSubject('');
    }          

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
                placeholder="City, State"
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
            <button className="education-add" onClick={onButtonClick}>ADD</button>
        </div>
    );
}

export default EducationForm;
