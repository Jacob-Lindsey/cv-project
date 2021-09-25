import React, { Component } from 'react';
import styled from 'styled-components';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import PersonalForm from './PersonalForm';

class FormColumn extends Component {
    constructor() {
        super();
        this.state = {
        }
      }

    render() {
        
        return (
        <FormContainer>
            <form>
                <EducationForm />
                <ExperienceForm />
                <PersonalForm />
            </form>
        </FormContainer>
        )
    }
}


export default FormColumn;

const FormContainer = styled.div`
    height: 100%;
`;