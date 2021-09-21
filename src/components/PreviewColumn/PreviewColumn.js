import React, { Component } from 'react';
import PreviewSection from './PreviewSection';
import './style.css';

class PreviewColumn extends Component {
    constructor() {
        super();
        this.state = {
          text: ''
        }
      }

    render() {

      return (
        <div className="preview-column-container">

            <div className="preview-column-header">
              <img src="https://via.placeholder.com/300" alt="" />
              <div className="header-text">
                <p className="header-name">Jacob Lindsey</p>
                <div className="header-info">
                  <div className="preview-text"></div>
                  <div className="preview-text"></div>
                  <div className="preview-text"></div>
                </div>
              </div>
            </div>

            <div className="preview-column-content">
              <section className="education-section">
                  <h2>Education</h2>
                  <hr />

                  <div className="preview-section">
                    <div className="preview-text" ref={this.schoolNameRef}></div>
                    <div className="preview-text" ref={this.schoolCityRef}></div>
                    <div className="preview-text" ref={this.schoolDegreeRef}></div>
                    <div className="preview-text start-end">
                      <div id='schoolStart' ref={this.schoolStartRef}></div>
                      <div id='schoolEnd' ref={this.schoolEndRef}></div>
                    </div>
                    
                  </div>
                  
              </section>

              <section className="experience-section">
                  <h2>Experience</h2>
                  <hr />

                  <div className="preview-section">
                    <div className="preview-text"></div>
                    <div className="preview-text"></div>
                    <div className="preview-text"></div>
                    <div className="preview-text"></div>
                    <div className="preview-text"></div>
                    <div className="preview-text"></div>
                  </div>
              </section>

              <section className="personal-section">
                  <h2>Personal Info</h2>
                  <hr />
                  <p className="personal-text">TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText</p>
              </section>

            </div>

            {/* <PreviewSection /> */}
        </div>
        )
    }
}


export default PreviewColumn;
