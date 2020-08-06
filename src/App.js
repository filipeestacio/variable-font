import React from 'react';
import Text from './components/Text';
import GlobalFonts from './fonts/fonts';

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <Text
        text="Compress"
        isScale={false}
        isFlex={false}
        isAlpha={false}
        isStroke={false}
        isWidth={false}
        isWeight={true}
        isItalic={false}
      />
    </div>
  );
}

export default App;
