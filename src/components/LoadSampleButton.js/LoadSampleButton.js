import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../AppContext';
import SampleData from '../SampleData/SampleData';

const LoadSampleButton = () => {

  const cvData = useContext(AppContext);

  function loadSampleData() {
    for (let i = 0; i < 3; i++) {
      let formattedData = {
        schoolStart: SampleData.education[i].schoolStart,
        schoolEnd: SampleData.education[i].schoolEnd,
        schoolName: SampleData.education[i].schoolName,
        schoolCity: SampleData.education[i].schoolCity,
        schoolDegree: SampleData.education[i].schoolDegree,
        schoolSubject: SampleData.education[i].schoolSubject,
      }
      console.log(formattedData);
      cvData.setEducationSections(prev => ([...prev, formattedData]));
    }
    for (let i = 0; i < 2; i++) {
      let formattedData = {
        expPosition: SampleData.experience[i].expPosition,
        expCompany: SampleData.experience[i].expCompany,
        expCity: SampleData.experience[i].expCity,
        expStart: SampleData.experience[i].expStart,
        expEnd: SampleData.experience[i].expEnd,       
      }
      console.log(formattedData);
      cvData.setExperienceSections(prev => ([...prev, formattedData]));
    }
    cvData.setFirstName(SampleData.personal.firstName);
    cvData.setLastName(SampleData.personal.lastName);
    cvData.setAddress(SampleData.personal.address);
    cvData.setPhoneNumber(SampleData.personal.phoneNumber);
    cvData.setEmail(SampleData.personal.email);
    cvData.setDescription(SampleData.personal.description);
  }

  return (
    <ButtonWrapper onClick={loadSampleData}>LOAD SAMPLE</ButtonWrapper>
  )
}

export default LoadSampleButton;

const ButtonWrapper = styled.button`
  background-color: #036e50;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  width: 8rem;
  height: 4rem;
  margin: auto 0;
  border-radius: 0.4rem;
  &:hover {
    background-color: #028a63;
  }
`;