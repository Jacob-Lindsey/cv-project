import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../AppContext';

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
        <FormContainer>
            <FormTitle>Education</FormTitle>
            <InputWrapper
                type="text"
                name="schoolName"
                placeholder="School Name"
                value={updateText.schoolName}
                onChange={e => updateText.setSchoolName(e.target.value)}
            />
            <InputWrapper 
                type="text"
                name="schoolCity"
                placeholder="City, State"
                value={updateText.schoolCity}
                onChange={e => updateText.setSchoolCity(e.target.value)}
            />
            <InputWrapper
                type="text"
                name="schoolDegree"
                placeholder="Degree"
                value={updateText.schoolDegree}
                onChange={e => updateText.setSchoolDegree(e.target.value)}
            />
            <InputWrapper
                type="text"
                name="schoolSubject"
                placeholder="Major"
                value={updateText.schoolSubject}
                onChange={e => updateText.setSchoolSubject(e.target.value)}
            />
            <InputWrapper
                type="text"
                name="schoolStart"
                placeholder="Start Date"
                value={updateText.schoolStart}
                onChange={e => updateText.setSchoolStart(e.target.value)}
            />
            <InputWrapper
                type="text"
                name="schoolEnd"
                placeholder="End Date"
                value={updateText.schoolEnd}
                onChange={e => updateText.setSchoolEnd(e.target.value)}
            />
            <ButtonWrapper onClick={onButtonClick}>ADD</ButtonWrapper>
        </FormContainer>
    );
}

export default EducationForm;

const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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

const ButtonWrapper = styled.button`
    background-color: #036046;
    width: 20%;
    margin-left: 1.5rem;
    border-radius: 0.3rem;
    &:hover {
        background-color: #047958;
    }
`;