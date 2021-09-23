import React, { Component } from 'react';
import CreatePDFButton from './CreatePDFButton';
import './style.css';

class Header extends Component {

    render() {
        return (
        <div className="header-container">
            <div className="header-inner">
                <h1>CV to PDF</h1>
                <CreatePDFButton />
            </div>
        </div>
        )
    }
}


export default Header;
