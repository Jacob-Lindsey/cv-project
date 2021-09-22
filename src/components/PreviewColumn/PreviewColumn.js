import React, { useContext, useState } from 'react';
import AppContext from '../../AppContext';
import PreviewSection from './PreviewSection';
import './style.css';

const PreviewColumn = () => {

  const inputText = useContext(AppContext);
  const [educationSections, setEducationSections] = useState([]);
  const [experienceSections, setExperienceSections] = useState([]);

  return (
    <div className="preview-column-container">

        <div className="preview-column-header">
          <img src="https://via.placeholder.com/300" alt="" />
          <div className="header-text">
            <p className="header-name">{inputText.firstName} {inputText.lastName}</p>
            <div className="header-info">
              <div className="preview-text">{inputText.address}</div>
              <div className="preview-text">{inputText.phoneNumber}</div>
              <div className="preview-text">{inputText.email}</div>
            </div>
          </div>
        </div>

        <div className="preview-column-content">
          <section className="education-section">
              <h2>Education</h2>
              <hr />
              <PreviewSection requestedSection='education' />
          </section>

          <section className="experience-section">
              <h2>Experience</h2>
              <hr />
              <PreviewSection requestedSection='experience' />
          </section>

          <section className="personal-section">
              <h2>Personal Info</h2>
              <hr />
              <p className="personal-text">{inputText.description}</p>
          </section>

        </div>
    </div>
    )
  }


export default PreviewColumn;
