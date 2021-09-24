import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import PreviewColumn from '../PreviewColumn/PreviewColumn';
import './style.css';

const CreatePDFButton = () => {

  const columnRef = useRef();
  const button = <>
                    <ReactToPrint
                      trigger={() => <button className="pdf-button">CREATE PDF</button>}
                      content={() => columnRef.current}
                    />
                    <div style={{display: "none" }}>
                      <PreviewColumn ref={columnRef} />
                    </div>
                  </>

  return button;
}


export default CreatePDFButton;

