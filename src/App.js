import React from 'react';
import Text from './components/Text';
import GlobalFonts from './fonts/fonts';

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <Text
        text="Variable Font says what?"
        isScale={false}
        isFlex={true}
        isAlpha={false}
        isStroke={false}
        isWidth={true}
        isWeight={true}
        isItalic={true}
      />
    </div>
  );
}

export default App;
