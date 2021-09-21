import React, { Component } from 'react';
import './style.css';

class ExperienceForm extends Component {
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
                    <p>Company Name</p>
                    <input name="company" />
                </label>
            </fieldset>
        )
    }
}


export default ExperienceForm;
