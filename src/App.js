import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FormColumn from './components/FormColumn/FormColumn';
import PreviewColumn from './components/PreviewColumn/PreviewColumn';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.schoolName = React.createRef();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container flex mx-auto flex-row h-screen">
          <div className="bg-secondary flex-initial min-w-1/2 mr-4 p-4 h-5/6">
            <FormColumn />
          </div>
          <div className="bg-secondary min-w-1/2 ml-4 h-5/6 sticky">
            <PreviewColumn ref={this.schoolName} />
          </div>    
        </div>
      </div>
      
      )
  }
}


export default App;
