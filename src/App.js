import React, { Component } from 'react';
import RevealText from '@xailabs/react-reveal-text';

import logo from './xailabs.png';
import './App.css';

class App extends Component {
  state = {
    showText: false
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <RevealText text="@xailabs/react-reveal-text" />
          </h1>
        </header>
        <p className="App-intro">Reveals text word-by-word and letter-by-letter.</p>
        <p>
          <button onClick={() => this.setState({ showText: true })}>Show text</button>
          <button onClick={() => this.setState({ showText: false })}>Hide text</button>
        </p>
        {this.state.showText && (
          <div className="example">
            <RevealText
              text={
                'In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Replacing meaningful content with placeholder text allows designers to design the form of the content before the content itself has been produced. The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin. A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s by Aldus Corporation, which employed it in graphics and word-processing templates for its desktop publishing program PageMaker.'
              }
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
