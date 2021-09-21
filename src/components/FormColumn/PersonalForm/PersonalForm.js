import React, { Component } from 'react';
import './style.css';

class PersonalForm extends Component {
    constructor() {
        super();
        this.state = {
          text: ''
        }
      }

    render() {
        return (
            <fieldset>
                <label>
                    <p>Personal Information</p>
                    <input name="personal" />
                </label>
            </fieldset>
        )
    }
}


export default PersonalForm;
