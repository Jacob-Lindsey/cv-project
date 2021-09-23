import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import PreviewSection from './PreviewSection';
import './style.css';

const PreviewColumn = () => {

  const inputText = useContext(AppContext);

  function createLayoutFromData(section) {
    let formData;
      if (section === 'education') {
        formData = [...inputText.educationSections];
        if (formData.length > 0) {
          return (
            <>
              {
                formData.map(function(item, index){
                  return <div key={index} className="preview-section submitted">
                          <div className="preview-text start-end">
                            <div className="date-text">
                              {item.schoolStart}&nbsp;&nbsp;-&nbsp;&nbsp;{item.schoolEnd}
                            </div>
                            <div className="preview-text school-name-location">
                              {item.schoolName},&nbsp;&nbsp;{item.schoolCity}
                            </div>
                          </div>
                          <div className="preview-text degree">{item.schoolDegree}</div>
                          <div className="preview-text subject">{item.schoolSubject}</div>
                        </div>
                })
              }
            </>
          )
        }
      } else {
        formData = [...inputText.experienceSections];
        if (formData.length > 0) {
          return (
            <>
              {
                formData.map(function (item, index) {
                  return <div key={index} className="preview-section submitted">
                          <div className="preview-text start-end">
                            <div className="date-text">
                              {item.expStart}&nbsp;&nbsp;-&nbsp;&nbsp;{item.expEnd}
                            </div>
                            <div className="preview-text position">{item.expPosition}</div>
                          </div>
                            <div className="preview-text company-name-location">
                              {item.expCompany},&nbsp;&nbsp;&nbsp;{item.expCity}
                            </div>                         
                        </div>
                })
              }
            </>
          )
        }
      }   
  }

  return (
    <div className="preview-column-container">

        <div className="preview-column-header">
          <img src="https://via.placeholder.com/300" alt="" />
          <div className="header-text">
            <p className="header-name">{inputText.firstName} {inputText.lastName}</p>
            <div className="header-info">
              <h4>ADDRESS</h4>
              <div className="preview-text">{inputText.address}</div>
              <h4>PHONE NUMBER</h4>
              <div className="preview-text">{inputText.phoneNumber}</div>
              <h4>EMAIL</h4>
              <div className="preview-text">{inputText.email}</div>
            </div>
          </div>
        </div>

        <div className="preview-column-content">
          <section className="education-section">
              <h2>Education</h2>
              <hr />
              {createLayoutFromData('education')}
              <PreviewSection requestedSection='education' />
          </section>

          <section className="experience-section">
              <h2>Experience</h2>
              <hr />
              {createLayoutFromData('experience')}
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
