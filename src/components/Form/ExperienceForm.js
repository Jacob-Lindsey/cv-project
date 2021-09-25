import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../AppContext';

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
        <FormContainer>
            <FormTitle>Experience</FormTitle>
            <InputWrapper
                type="text"
                name="expPosition"
                placeholder="Position"
                value={updateText.expPosition}
                onChange={e => updateText.setExpPosition(e.target.value)}
            />
            <InputWrapper
                type="text"
                name="expCompany"
                placeholder="Company"
                value={updateText.expCompany}
                onChange={e => updateText.setExpCompany(e.target.value)}
            />
            <InputWrapper
                type="text"
                name="expCity"
                placeholder="City"
                value={updateText.expCity}
                onChange={e => updateText.setExpCity(e.target.value)}
            />
            <InputWrapper
                type="text"
                name="expStart"
                placeholder="Start Date"
                value={updateText.expStart}
                onChange={e => updateText.setExpStart(e.target.value)}
            />
            <InputWrapper
                type="text"
                name="expEnd"
                placeholder="End Date"
                value={updateText.expEnd}
                onChange={e => updateText.setExpEnd(e.target.value)}
            />
            <ButtonWrapper onClick={onButtonClick}>ADD</ButtonWrapper>
        </FormContainer>
    );
}

export default ExperienceForm;


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