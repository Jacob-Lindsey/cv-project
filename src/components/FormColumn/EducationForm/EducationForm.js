import React, { Component } from 'react';
import PreviewColumn from '../../PreviewColumn/PreviewColumn';
import './style.css';

class EducationForm extends Component {

    

    render() {
        return (
            <div>
                <input 
                    type="text"
                    name="schoolName"
                    onChange={ (event) => console.log('typed') } />
                <button>Add</button>
            </div>
        )
    }
}


export default EducationForm;
