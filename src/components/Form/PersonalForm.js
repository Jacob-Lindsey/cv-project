import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../AppContext';

function PersonalForm() {

    const updateText = useContext(AppContext);
    
    return (
        <FormContainer>
            <FormTitle>Personal Information</FormTitle>
            <InputWrapper
                type="text"
                name="firstName"
                placeholder="First Name"
                value={updateText.firstName}
                onChange={e => updateText.setFirstName(e.target.value)}
            />
            <InputWrapper
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={updateText.lastName}
                onChange={e => updateText.setLastName(e.target.value)}
            />
            <InputWrapper
                type="text"
                name="address"
                placeholder="Address"
                value={updateText.address}
                onChange={e => updateText.setAddress(e.target.value)}
            />
            <InputWrapper
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phoneNumber"
                placeholder="Phone Number"
                value={updateText.phoneNumber}
                onChange={e => updateText.setPhoneNumber(e.target.value)}
            />
            <InputWrapper
                type="email"
                name="email"
                placeholder="Email"
                value={updateText.email}
                onChange={e => updateText.setEmail(e.target.value)}
            />
            <TextareaWrapper
                id="personal-info-textbox"
                rows="10"
                cols="18"
                wrap="soft"
                name="description"
                placeholder="Description"
                value={updateText.description}
                onChange={e => updateText.setDescription(e.target.value)}
            />
        </FormContainer>
    );
}

export default PersonalForm;

const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 1fr 1fr 1fr 1fr 1fr 10fr;
    gap: 0.8rem;
    margin-bottom: 3rem;
`;

const FormTitle = styled.p`
    margin-left: 1.5rem;
    font-size: 1.6rem;
`;

const InputWrapper = styled.input`
    width: 95%;
    line-height: 2;
    margin: 0 auto;
    background-color: #141b24;
    border-radius: 0.3rem;
    padding-left: 2%;
    &::placeholder {
        opacity: 0.5;
    }
`;

const TextareaWrapper = styled.textarea`
    width: 95%;
    margin: 0 auto;
    background-color: #141b24;
    border-radius: 0.3rem;
    margin-bottom: 1rem;
    padding: 1em;  
`;

const ButtonWrapper = styled.button`
    background-color: #036046;
    width: 20%;
    margin-left: 1.5rem;
    border-radius: 0.3rem;
    &:hover {
        background-color: #047958;
    }
`;