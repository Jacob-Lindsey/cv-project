import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FormColumn from './components/FormColumn/FormColumn';
import PreviewColumn from './components/PreviewColumn/PreviewColumn';
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
  };

    return (
      <AppContext.Provider value={inputValues}>
        <div>
          <Header />
          <div className="container flex mx-auto flex-row h-screen">
            <div className="bg-secondary flex-initial min-w-1/2 mr-4 p-4 h-5/6" id="form-column">
              <FormColumn />
            </div>
            <div className="bg-secondary min-w-1/2 ml-4 h-5/6">
              <PreviewColumn />
            </div>    
          </div>
        </div>
      </AppContext.Provider>
      
      )
  }

export default App;
