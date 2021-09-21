import React, { Component } from 'react';
import EducationForm from './EducationForm/EducationForm';
import ExperienceForm from './ExperienceForm/ExperienceForm';
import PersonalForm from './PersonalForm/PersonalForm';
import './style.css';

class FormColumn extends Component {
    constructor() {
        super();
        this.state = {
          text: ''
        }
      }

    render() {

        const handleSubmit = event => {
            event.preventDefault();
            alert('Form submitted.')
        }

        return (
        <div className="form-column-container">
            <form onSubmit={handleSubmit}>
                <EducationForm />
                <ExperienceForm />
                <PersonalForm />
            </form>
        </div>
        )
    }
}


export default FormColumn;
