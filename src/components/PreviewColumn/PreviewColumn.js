import React, { useContext } from 'react';
import EditableLabel from 'react-inline-editing';
import AppContext from '../../AppContext';
import PreviewSection from './PreviewSection';
import './style.css';

const PreviewColumn = React.forwardRef((props, ref) => {

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
                            <EditableLabel text={item.schoolStart} inputWidth="100px" />&nbsp;&nbsp;-&nbsp;&nbsp;<EditableLabel text={item.schoolEnd} inputWidth="100px" />
                            </div>
                            <div className="preview-text school-name-location">
                              <EditableLabel text={item.schoolName} inputWidth="120px" />,&nbsp;&nbsp;<EditableLabel text={item.schoolCity} inputWidth="120px" />
                            </div>
                          </div>
                          <div className="preview-text degree"><EditableLabel text={item.schoolDegree} inputWidth="140px" /></div>
                          <div className="preview-text subject"><EditableLabel text={item.schoolSubject} inputWidth="190px" /></div>
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
                              <EditableLabel text={item.expStart} inputWidth="100px" />&nbsp;&nbsp;-&nbsp;&nbsp;<EditableLabel text={item.expEnd} inputWidth="100px" />
                            </div>
                            <div className="preview-text position"><EditableLabel text={item.expPosition} inputWidth="140px" /></div>
                          </div>
                            <div className="preview-text company-name-location">
                              <EditableLabel text={item.expCompany} inputWidth="120px" />,&nbsp;&nbsp;&nbsp;<EditableLabel text={item.expCity} inputWidth="140px" />
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
    <div className="preview-column-container" ref={ref}>

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
  });


export default PreviewColumn;
