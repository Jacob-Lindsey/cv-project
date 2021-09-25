import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../AppContext';

const SaveButton = () => {

  return (
    <ButtonWrapper>SAVE</ButtonWrapper>
  )
}

export default SaveButton;

const ButtonWrapper = styled.button`
  background-color: #036e50;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  width: 8rem;
  height: 4rem;
  margin: auto 0;
  border-radius: 0.4rem;
  &:hover {
    background-color: #028a63;
  }
`;