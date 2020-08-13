import React from 'react';
import { VariableText } from './components/variableText';

function App() {
  return (
    <div className="App">
      <VariableText
        text="Hello World"
        isScale={true}
        isFlex={true}
        isAlpha={true}
        isWidth={true}
        isWeight={true}
        isItalic={true}
      />
    </div>
  );
}

export default App;
