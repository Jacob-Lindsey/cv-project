import React, { useContext } from 'react';
import AppContext from '../../../AppContext';
import './style.css';

function PersonalForm() {

    const updateText = useContext(AppContext);
    
    return (
        <div className="personal-form">
            <p className="personal-title">Personal Information</p>
            <input 
                type="text"
                name="firstName"
                placeholder="First Name"
                value={updateText.firstName}
                onChange={e => updateText.setFirstName(e.target.value)}
            />
            <input 
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={updateText.lastName}
                onChange={e => updateText.setLastName(e.target.value)}
            />
            <input 
                type="text"
                name="address"
                placeholder="Address"
                value={updateText.address}
                onChange={e => updateText.setAddress(e.target.value)}
            />
            <input 
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phoneNumber"
                placeholder="Phone Number"
                value={updateText.phoneNumber}
                onChange={e => updateText.setPhoneNumber(e.target.value)}
            />
            <input 
                type="email"
                name="email"
                placeholder="Email"
                value={updateText.email}
                onChange={e => updateText.setEmail(e.target.value)}
            />
            <textarea
                id="personal-info-textbox"
                rows="10"
                cols="18"
                wrap="soft"
                name="description"
                placeholder="Description"
                value={updateText.description}
                onChange={e => updateText.setDescription(e.target.value)}
            />
        </div>
    );
}

export default PersonalForm;
