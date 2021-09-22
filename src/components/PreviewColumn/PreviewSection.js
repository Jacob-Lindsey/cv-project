import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import './style.css';

const PreviewSection = ({requestedSection}) => {

  const inputText = useContext(AppContext);
  
  const educationSection = <div className="preview-section">
                              <div className="preview-text">{inputText.schoolName}</div>
                              <div className="preview-text">{inputText.schoolCity}</div>
                              <div className="preview-text">{inputText.schoolDegree}</div>
                              <div className="preview-text">{inputText.schoolSubject}</div>
                              <div className="preview-text start-end">
                                <div id='schoolStart'>{inputText.schoolStart}</div>
                                -
                                <div id='schoolEnd'>{inputText.schoolEnd}</div>
                              </div>
                            </div>
                            

  const experienceSection = <div className="preview-section">
                              <div className="preview-text">{inputText.expPosition}</div>
                              <div className="preview-text">{inputText.expCompany}</div>
                              <div className="preview-text">{inputText.expCity}</div>
                              <div className="preview-text start-end">
                                <div id='expStart'>{inputText.expStart}</div>
                                -
                                <div id='expEnd'>{inputText.expEnd}</div>
                              </div>
                            </div>
                            
  const section = requestedSection === 'education' ? educationSection : experienceSection;

  return section;
}


export default PreviewSection;

