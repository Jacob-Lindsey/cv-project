import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FormColumn from './components/Form/FormColumn';
import PreviewColumn from './components/Preview/PreviewColumn';
import AppContext from './AppContext';

const  App = () => {

  const [schoolName, setSchoolName] = useState('');
  const [schoolCity, setSchoolCity] = useState('');
  const [schoolDegree, setSchoolDegree] = useState('');
  const [schoolSubject, setSchoolSubject] = useState('');
  const [schoolStart, setSchoolStart] = useState('');
  const [schoolEnd, setSchoolEnd] = useState('');
  const [expPosition, setExpPosition] = useState('');
  const [expCompany, setExpCompany] = useState('');
  const [expCity, setExpCity] = useState('');
  const [expStart, setExpStart] = useState('');
  const [expEnd, setExpEnd] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [educationSections, setEducationSections] = useState([]);
  const [experienceSections, setExperienceSections] = useState([]);
  const [userAvatar, setUserAvatar] = useState('../../assets/avatar.png');

  const inputValues = {
    schoolName,
    schoolCity,
    schoolDegree,
    schoolSubject,
    schoolStart,
    schoolEnd,
    setSchoolName,
    setSchoolCity,
    setSchoolDegree,
    setSchoolSubject,
    setSchoolStart,
    setSchoolEnd,
    expPosition,
    expCompany,
    expCity,
    expStart,
    expEnd,
    setExpPosition,
    setExpCompany,
    setExpCity,
    setExpStart,
    setExpEnd,
    firstName,
    lastName,
    address,
    phoneNumber,
    email,
    description,
    setFirstName,
    setLastName,
    setAddress,
    setPhoneNumber,
    setEmail,
    setDescription,
    educationSections,
    experienceSections,
    setEducationSections,
    setExperienceSections,
    userAvatar,
    setUserAvatar,
  };

    return (
      <AppContext.Provider value={inputValues}>
        <div>
          <Header />
          <div className="2xl:container flex mx-auto 2xl:flex-row h-screen">
            <div className="bg-secondary flex-initial min-w-1/2 mr-4 p-4 h-5/6 column-col">
              <FormColumn />
            </div>
            <div className="bg-secondary min-w-1/2 ml-4 h-5/6 column-col">
              <PreviewColumn />
            </div>    
          </div>
        </div>
      </AppContext.Provider>
      
      )
  }

export default App;
