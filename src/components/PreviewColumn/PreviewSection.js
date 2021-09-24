import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import './style.css';

const PreviewSection = ({requestedSection}) => {

  const inputText = useContext(AppContext);
  
  const educationSection = <div className="preview-section">
                              <div className="preview-text start-end">
                                <div className="date-text">
                                {inputText.schoolStart}&nbsp;&nbsp;-&nbsp;&nbsp;{inputText.schoolEnd}
                                </div>
                                <div className="preview-text school-name-location">
                                  {inputText.schoolName},&nbsp;&nbsp;{inputText.schoolCity}
                                </div>
                              </div>
                              <div className="preview-text degree">{inputText.schoolDegree}</div>
                              <div className="preview-text subject">{inputText.schoolSubject}</div>
                            </div>

  const experienceSection = <div className="preview-section">
                              <div className="preview-text start-end">
                                <div className="date-text">
                                  {inputText.expStart}&nbsp;&nbsp;-&nbsp;&nbsp;{inputText.expEnd}
                                </div>
                                <div className="preview-text position">{inputText.expPosition}</div>
                              </div>
                                <div className="preview-text company-name-location">
                                  {inputText.expCompany},&nbsp;&nbsp;&nbsp;{inputText.expCity}
                                </div>                         
                            </div>
                            
  const section = requestedSection === 'education' ? educationSection : experienceSection;

  return section;
}

export default PreviewSection;

