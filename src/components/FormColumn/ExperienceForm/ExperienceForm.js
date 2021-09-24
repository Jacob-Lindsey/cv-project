import React, { useContext } from 'react';
import AppContext from '../../../AppContext';
import './style.css';

function ExperienceForm() {

    const updateText = useContext(AppContext);
    const onButtonClick = (e) => {
        e.preventDefault();
        let formattedData = {
            expPosition: updateText.expPosition,
            expCompany: updateText.expCompany,
            expCity: updateText.expCity,
            expStart: updateText.expStart,
            expEnd: updateText.expEnd
        }
        updateText.setExperienceSections(prev => ([...prev, formattedData]));
        updateText.setExpPosition('');
        updateText.setExpCompany('');
        updateText.setExpCity('');
        updateText.setExpStart('');
        updateText.setExpEnd('');
    }

    return (
        <div className="experience-form">
            <p className="experience-title">Experience</p>
            <input 
                type="text"
                name="expPosition"
                placeholder="Position"
                value={updateText.expPosition}
                onChange={e => updateText.setExpPosition(e.target.value)}
            />
            <input 
                type="text"
                name="expCompany"
                placeholder="Company"
                value={updateText.expCompany}
                onChange={e => updateText.setExpCompany(e.target.value)}
            />
            <input 
                type="text"
                name="expCity"
                placeholder="City"
                value={updateText.expCity}
                onChange={e => updateText.setExpCity(e.target.value)}
            />
            <input 
                type="text"
                name="expStart"
                placeholder="Start Date"
                value={updateText.expStart}
                onChange={e => updateText.setExpStart(e.target.value)}
            />
            <input 
                type="text"
                name="expEnd"
                placeholder="End Date"
                value={updateText.expEnd}
                onChange={e => updateText.setExpEnd(e.target.value)}
            />
            <button className="experience-add" onClick={onButtonClick}>ADD</button>
        </div>
    );
}

export default ExperienceForm;