import React, { Component } from 'react';
import CreatePDFButton from './CreatePDFButton';
import SaveButton from './SaveButton';
import './style.css';

class Header extends Component {

    render() {
        return (
        <div className="header-container">
            <div className="header-inner">
                <h1>CV to PDF</h1>
                <div className="buttons">
                    <SaveButton />
                    <CreatePDFButton />
                </div>
            </div>
        </div>
        )
    }
}


export default Header;
