import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import styled from 'styled-components';
import PreviewColumn from '../Preview/PreviewColumn';

const CreatePDFButton = () => {

  const columnRef = useRef();
  const button = <>
                    <ReactToPrint
                      trigger={() => <ButtonWrapper>CREATE PDF</ButtonWrapper>}
                      content={() => columnRef.current}
                    />
                    <div style={{display: "none" }}>
                      <PreviewColumn ref={columnRef} />
                    </div>
                  </>
  return button;
}


export default CreatePDFButton;

const ButtonWrapper = styled.button`
  background-color: #9e7c0d;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  width: 8rem;
  height: 4rem;
  margin: auto 0;
  border-radius: 0.4rem;
  &:hover {
    background-color: #b68f0f;
  }
`;