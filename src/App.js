import React from 'react';
import Text from './components/Text';
import GlobalFonts from './fonts/fonts';

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <Text
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
